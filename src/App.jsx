import React, { useState, useMemo, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  onSnapshot, 
  query,
  writeBatch
} from 'firebase/firestore';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  Users, 
  Database, 
  BarChart3, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft,
  X,
  RefreshCw,
  Loader2,
  AlertTriangle,
  Layers,
  DatabaseZap
} from 'lucide-react';

// --- FIREBASE CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSyBYziumFk_ONDE7tVtdLFyV3L1yMGnzXj0",
  authDomain: "idox-lifecycle.firebaseapp.com",
  projectId: "idox-lifecycle",
  storageBucket: "idox-lifecycle.firebasestorage.app",
  messagingSenderId: "478383450565",
  appId: "1:478383450565:web:f0322a22dd601404d343ac",
  measurementId: "G-CZL52LFLEF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const appId = "idox-lifecycle-hub";

const INDUSTRY_CONFIG = {
  'Fibre': ['Strategic Planning (HLP)', 'High-Level Design (HLD)', 'Physical Infrastructure Analysis (PIA)', 'Field Survey', 'Low Level Design (LLD)', 'Civils & Build', 'As-Built'],
  'Housing': ['Scoping', 'Feasibility', 'Preliminary Environmental Screening', 'Environmental Impact Assessment (EIA)', 'Concept Design & Planning Application', 'Government & Community Approvals', 'Detailed Design & Engineering', 'Financing & Acquisition', 'Construction', 'Sales, Marketing & Handover', 'Post-Construction Monitoring']
};

const parseCSV = (text) => {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  if (lines.length === 0) return [];
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
};

const IdoxLogo = () => (
  <div className="flex items-center gap-2 font-bold tracking-tight">
    <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-md">
      <div className="w-5 h-5 border-2 border-[#003057] rounded-sm transform rotate-45" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xl text-white">idox</span>
      <span className="text-[10px] text-sky-400 font-light tracking-widest uppercase">Geospatial</span>
    </div>
  </div>
);

const Badge = ({ children }) => (
  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
    {children}
  </span>
);

const UsageIcon = ({ type }) => {
  const t = type?.toLowerCase();
  if (t === 'basemap' || t === 'b') return <div title="Basemap" className="w-7 h-7 rounded bg-[#007CBA] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white/20">B</div>;
  if (t === 'analytical' || t === 'a') return <div title="Analytical" className="w-7 h-7 rounded bg-[#2ECC71] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white/20">A</div>;
  if (t === 'unknown' || t === '?') return <div title="Unknown" className="w-7 h-7 rounded bg-[#F1C40F] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white/20">?</div>;
  return <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />;
};

const DataManagement = ({ datasets, onSync }) => {
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState(null);

  const handleSync = async () => {
    setSyncing(true);
    setError(null);
    try {
      await onSync();
    } catch (e) {
      setError("Sync failed. Ensure your Google Sheet is 'Published to Web' as CSV.");
    }
    setSyncing(false);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#003057] text-white p-8 rounded-3xl mb-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <DatabaseZap size={240} />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-2">Catalogue Master Sync</h2>
          <p className="text-sky-200/70 font-medium">Connect and pull live data from the master project workbook.</p>
        </div>
        <button 
          onClick={handleSync} 
          disabled={syncing}
          className="relative z-10 bg-white text-[#003057] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-sky-50 transition-all shadow-xl disabled:opacity-50"
        >
          {syncing ? <Loader2 className="animate-spin" /> : <RefreshCw />}
          {syncing ? 'Connecting...' : 'Sync Workbook Now'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl flex gap-3 text-sm font-bold mb-8 items-center">
          <AlertTriangle className="shrink-0" /> {error}
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-[#003057] flex items-center gap-2">
            <Layers size={18} className="text-sky-500" /> Live Catalogue ({datasets.length} records)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
              <tr><th className="px-8 py-4">Internal Dataset Name</th><th className="px-8 py-4">Common Name</th><th className="px-8 py-4">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {datasets.length === 0 ? (
                <tr><td colSpan="3" className="px-8 py-20 text-center text-slate-400 italic">No data yet. Please use the "Sync" button above to pull data from Google Sheets.</td></tr>
              ) : (
                datasets.map(d => (
                  <tr key={d.id} className="hover:bg-sky-50/30 transition-colors">
                    <td className="px-8 py-5 font-bold text-[#003057]">{d.name}</td>
                    <td className="px-8 py-5 font-mono text-xs text-slate-500">{d.commonName}</td>
                    <td className="px-8 py-5"><Badge>Active</Badge></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [role, setRole] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    signInAnonymously(auth).catch(console.error);
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'datasets'));
    return onSnapshot(q, (snap) => {
      setDatasets(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
  }, [user]);

  const handleSync = async () => {
    const SHEET_ID = '17MCi7epIJdxac0xzV2QTGGBUoL4Hi11zhzrbeRtRJXg';
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Fetch failed");
    const rows = parseCSV(await res.text());
    
    const batch = writeBatch(db);
    rows.forEach((row, i) => {
      const name = row.Name || row.name || row.Dataset;
      if (!name) return;
      const ref = doc(db, 'artifacts', appId, 'public', 'data', 'datasets', `ds-${i}`);
      const usage = {};
      Object.keys(row).forEach(key => {
        const val = row[key]?.trim().toLowerCase();
        if (val === 'b' || val === 'a' || val === '?') usage[key] = val;
      });
      batch.set(ref, {
        name,
        commonName: row['Common Name'] || row.common_name || '',
        group: row.Group || 'General',
        description: row.Description || '',
        usage
      });
    });
    await batch.commit();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-sky-600" size={48} /></div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-[#003057] text-white px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-2xl">
        <button onClick={() => setRole(null)} className="hover:scale-105 transition-transform"><IdoxLogo /></button>
        <nav className="flex gap-4">
          <button onClick={() => setRole('sales')} className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg ${role === 'sales' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>Sales</button>
          <button onClick={() => setRole('data')} className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg ${role === 'data' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}>Data Sync</button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto p-8 md:p-12">
        {!role ? (
          <div className="grid md:grid-cols-2 gap-8 py-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-black text-[#003057] mb-6 leading-none">Strategic Intelligence Hub</h1>
              <p className="text-xl text-slate-500 mb-10 font-medium">Governance, Lifecycle, and Commercial Availability in one centralized platform.</p>
              <div className="flex gap-4">
                <button onClick={() => setRole('sales')} className="bg-[#003057] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:translate-y-[-2px] transition-all">Go to Sales View <ChevronRight size={20}/></button>
                <button onClick={() => setRole('data')} className="bg-white text-[#003057] border border-slate-200 px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition-all">Data Sync Admin</button>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-sky-100 text-sky-600 rounded-3xl flex items-center justify-center mb-6"><Database size={40} /></div>
              <h3 className="text-2xl font-black text-[#003057] mb-2">{datasets.length} Active Datasets</h3>
              <p className="text-slate-400 text-sm">Managed through Idox Strategic Data Governance</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <button onClick={() => setRole(null)} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-widest hover:text-[#003057] transition-colors mb-8"><ArrowLeft size={16} /> Home</button>
            {role === 'data' ? <DataManagement datasets={datasets} onSync={handleSync} /> : <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center text-slate-400 font-bold uppercase tracking-widest text-sm">Sales View (Filtered by Industry Lifecycle)</div>}
          </div>
        )}
      </main>
    </div>
  );
}
