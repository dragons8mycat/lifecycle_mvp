import React, { useState, useMemo, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
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
  getAnalytics 
} from "firebase/analytics";
import { 
  Users, 
  Database, 
  BarChart3, 
  Search, 
  ChevronRight, 
  LayoutGrid, 
  CheckCircle2, 
  Save, 
  ArrowLeft,
  X,
  Edit3,
  RefreshCw,
  Info,
  Loader2,
  FileSpreadsheet,
  AlertTriangle
} from 'lucide-react';

// --- YOUR FIREBASE CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyBYziumFk_ONDE7tVtdLFyV3L1yMGnzXj0",
  authDomain: "idox-lifecycle.firebaseapp.com",
  projectId: "idox-lifecycle",
  storageBucket: "idox-lifecycle.firebasestorage.app",
  messagingSenderId: "478383450565",
  appId: "1:478383450565:web:f0322a22dd601404d343ac",
  measurementId: "G-CZL52LFLEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const appId = "idox-lifecycle-hub";

// --- INDUSTRY STAGE CONFIGURATION ---
const INDUSTRY_CONFIG = {
  'Fibre': [
    'Strategic Planning (HLP)',
    'High-Level Design (HLD)',
    'Physical Infrastructure Analysis (PIA)',
    'Field Survey',
    'Low Level Design (LLD)',
    'Civils & Build',
    'As-Built'
  ],
  'Housing': [
    'Scoping',
    'Feasibility',
    'Preliminary Environmental Screening',
    'Environmental Impact Assessment (EIA)',
    'Concept Design & Planning Application',
    'Government & Community Approvals',
    'Detailed Design & Engineering',
    'Financing & Acquisition',
    'Construction',
    'Sales, Marketing & Handover',
    'Post-Construction Monitoring'
  ]
};

const DATA_GROUPS = ['Firmographics', 'Technographics', 'Intent', 'Contact', 'Geospatial', 'Environmental'];
const BUSINESS_UNITS = ['Commercial', 'Marketing', 'Product', 'Customer Success', 'GIS Team'];

// --- HELPERS ---
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

// --- COMPONENTS ---

const IdoxLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-1.5 font-bold tracking-tight ${className}`}>
    <div className="w-7 h-7 bg-white rounded flex items-center justify-center shadow-sm">
      <div className="w-4 h-4 border-2 border-[#003057] rounded-sm transform rotate-45" />
    </div>
    <span className="text-xl text-white">idox</span>
    <span className="text-sky-400 font-light ml-0.5">Geospatial</span>
  </div>
);

const Badge = ({ children, variant = 'default' }) => {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    blue: "bg-[#003057]/10 text-[#003057]",
    idox: "bg-[#003057] text-white"
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${styles[variant]}`}>
      {children}
    </span>
  );
};

const UsageIcon = ({ type }) => {
  const t = type?.toLowerCase();
  if (t === 'basemap' || t === 'b') return <div title="Basemap" className="w-7 h-7 rounded bg-[#007CBA] text-white flex items-center justify-center font-bold text-xs shadow-sm">B</div>;
  if (t === 'analytical' || t === 'a') return <div title="Analytical" className="w-7 h-7 rounded bg-[#2ECC71] text-white flex items-center justify-center font-bold text-xs shadow-sm">A</div>;
  if (t === 'unknown' || t === '?') return <div title="Unknown" className="w-7 h-7 rounded bg-[#F1C40F] text-white flex items-center justify-center font-bold text-xs shadow-sm">?</div>;
  return <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />;
};

// --- PAGES ---

const OverviewPage = ({ onSelectRole, datasets }) => (
  <div className="min-h-screen bg-slate-50">
    <div className="bg-[#003057] text-white py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1">
          <IdoxLogo className="mb-8 scale-125 origin-left" />
          <h1 className="text-5xl font-extrabold mb-6">Strategic Data Lifecycle</h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Synchronize geospatial intelligence from your master workbook. Access live project stages and usage classifications.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{datasets.length}</span>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest">Active Records</span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-4 w-full max-w-md">
          {[
            { id: 'sales', title: 'Sales & Commercial', icon: Users, desc: 'Lifecycle touchpoints & usage classification.' },
            { id: 'data', title: 'Data Management', icon: Database, desc: 'Workbook sync & catalog administration.' },
            { id: 'leadership', title: 'Leadership Insights', icon: BarChart3, desc: 'Coverage metrics & strategic health.' }
          ].map(role => (
            <button key={role.id} onClick={() => onSelectRole(role.id)} className="group flex items-center gap-5 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:translate-x-2">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center"><role.icon size={24} /></div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-lg leading-tight">{role.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{role.desc}</p>
              </div>
              <ChevronRight className="text-slate-500 group-hover:text-white" size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SalesWorkflow = ({ datasets }) => {
  const [view, setView] = useState('touchpoint');
  const [industry, setIndustry] = useState('Fibre');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const stages = INDUSTRY_CONFIG[industry] || [];
  const filtered = useMemo(() => datasets.filter(d => 
    d.name?.toLowerCase().includes(search.toLowerCase()) || 
    d.commonName?.toLowerCase().includes(search.toLowerCase())
  ), [datasets, search]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-end">
        <div className="w-64">
          <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Industry Framework</label>
          <select className="w-full px-3 py-2 border-2 border-slate-100 rounded-xl font-bold text-[#003057]" value={industry} onChange={e => setIndustry(e.target.value)}>
            {Object.keys(INDUSTRY_CONFIG).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        <div className="flex-1 min-w-[240px]">
          <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Dataset Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input className="w-full pl-10 pr-4 py-2 border-2 border-slate-100 rounded-xl focus:border-[#007CBA] outline-none" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="bg-slate-100 p-1 rounded-xl ml-auto flex">
          <button onClick={() => setView('touchpoint')} className={`px-5 py-2 rounded-lg font-bold text-xs ${view === 'touchpoint' ? 'bg-white shadow-md text-[#003057]' : 'text-slate-500'}`}>Lifecycle View</button>
          <button onClick={() => setView('role-led')} className={`px-5 py-2 rounded-lg font-bold text-xs ${view === 'role-led' ? 'bg-white shadow-md text-[#003057]' : 'text-slate-500'}`}>Simplified View</button>
        </div>
      </div>

      {view === 'touchpoint' ? (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 z-30 bg-[#003057] text-white">
                <tr>
                  <th className="px-6 py-5 font-bold text-xs uppercase border-r border-white/10 w-[300px]">Dataset / Common Name</th>
                  {stages.map(s => <th key={s} className="px-4 py-5 text-center font-bold text-[10px] uppercase min-w-[120px]">{s}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(d => (
                  <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 border-r border-slate-100">
                      <div className="font-bold text-[#003057]">{d.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1">{d.commonName}</div>
                    </td>
                    {stages.map(s => <td key={s} className="px-4 py-4 text-center"><UsageIcon type={d.usage?.[s]} /></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(d => (
            <div key={d.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#007CBA] transition-all cursor-pointer" onClick={() => setSelected(d)}>
              <Badge variant="blue">{d.group || 'General'}</Badge>
              <h3 className="font-bold text-[#003057] text-lg mt-2 mb-1">{d.name}</h3>
              <p className="text-xs text-slate-500 line-clamp-2">{d.description || 'No description available.'}</p>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col p-8">
            <button onClick={() => setSelected(null)} className="ml-auto p-2 hover:bg-slate-100 rounded-full"><X /></button>
            <h2 className="text-2xl font-bold text-[#003057] mb-2">{selected.name}</h2>
            <p className="text-slate-600 mb-8">{selected.description}</p>
            <div className="space-y-2">
              {stages.map(s => (
                <div key={s} className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                  <span className="text-xs font-bold">{s}</span>
                  <UsageIcon type={selected.usage?.[s]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DataWorkflow = ({ datasets, onSync }) => {
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState(null);

  const handleSync = async () => {
    setSyncing(true);
    setError(null);
    try {
      await onSync();
    } catch (e) {
      console.error(e);
      setError("Failed to fetch from Google Sheets. Ensure the sheet is 'Published to Web' as CSV.");
    }
    setSyncing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[#003057]">Catalogue Sync</h2>
          <p className="text-slate-500">Pull latest records from the master project workbook.</p>
        </div>
        <button 
          onClick={handleSync} 
          disabled={syncing} 
          className="bg-[#003057] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#004a7a] transition-all disabled:opacity-50"
        >
          {syncing ? <Loader2 className="animate-spin" /> : <RefreshCw />} 
          {syncing ? 'Syncing...' : 'Sync Workbook Now'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl flex gap-3 text-sm font-medium">
          <AlertTriangle className="shrink-0" /> {error}
        </div>
      )}

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-[#003057]">Active Catalogue ({datasets.length} records)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Internal Name</th>
                <th className="px-6 py-4">Common Name</th>
                <th className="px-6 py-4">Group</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {datasets.length === 0 ? (
                <tr>
                  <td colSpan="3" className="px-6 py-12 text-center text-slate-400 italic">No datasets found. Please click "Sync Workbook" above.</td>
                </tr>
              ) : (
                datasets.map(d => (
                  <tr key={d.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-[#003057]">{d.name}</td>
                    <td className="px-6 py-4 text-slate-600 font-mono text-xs">{d.commonName}</td>
                    <td className="px-6 py-4"><Badge variant="blue">{d.group || 'General'}</Badge></td>
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
    const unsubscribe = onSnapshot(q, (snap) => {
      setDatasets(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const handleSync = async () => {
    const SHEET_ID = '17MCi7epIJdxac0xzV2QTGGBUoL4Hi11zhzrbeRtRJXg';
    const GID = '0'; // Default first sheet
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Fetch failed");
    const csv = await response.text();
    const rows = parseCSV(csv);
    
    if (rows.length === 0) return;

    const batch = writeBatch(db);
    rows.forEach((row, i) => {
      // Mapping based on common header names
      const name = row.Name || row.name || row.Dataset || row.dataset;
      if (!name) return;
      
      const ref = doc(db, 'artifacts', appId, 'public', 'data', 'datasets', `ds-${i}`);
      
      // Attempt to parse usage from columns
      const usage = {};
      Object.keys(row).forEach(key => {
        const val = row[key]?.trim().toLowerCase();
        // Look for our classification markers
        if (val === 'b' || val === 'a' || val === '?') usage[key] = val;
      });

      batch.set(ref, {
        name: name,
        commonName: row['Common Name'] || row.common_name || '',
        group: row.Group || row.group || 'General',
        description: row.Description || row.description || '',
        usage: usage,
        lastUpdated: new Date().toISOString()
      });
    });
    await batch.commit();
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
      <Loader2 className="animate-spin text-[#007CBA]" size={48} />
      <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Connecting to Idox Systems...</p>
    </div>
  );

  // If no role is selected, show the OverviewPage (Landing Page)
  if (!role) return <OverviewPage onSelectRole={setRole} datasets={datasets} />;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <header className="bg-[#003057] text-white px-10 py-5 flex justify-between items-center sticky top-0 z-40 shadow-xl">
        <div className="flex items-center gap-8">
          <button onClick={() => setRole(null)} className="hover:opacity-80 transition-opacity">
            <IdoxLogo />
          </button>
          <nav className="hidden md:flex gap-6">
            <button 
              onClick={() => setRole('sales')} 
              className={`text-[10px] font-black uppercase tracking-widest border-b-2 pb-1 transition-all ${role === 'sales' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              Sales
            </button>
            <button 
              onClick={() => setRole('data')} 
              className={`text-[10px] font-black uppercase tracking-widest border-b-2 pb-1 transition-all ${role === 'data' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              Data Management
            </button>
            <button 
              onClick={() => setRole('leadership')} 
              className={`text-[10px] font-black uppercase tracking-widest border-b-2 pb-1 transition-all ${role === 'leadership' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              Leadership
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
           <div className="w-px h-6 bg-white/20" />
           <div className="w-8 h-8 rounded bg-[#007CBA] flex items-center justify-center text-[10px] font-bold">AD</div>
        </div>
      </header>

      <main className="flex-1 p-8 md:p-12 max-w-7xl mx-auto w-full">
        {role === 'sales' && <SalesWorkflow datasets={datasets} />}
        {role === 'data' && <DataWorkflow datasets={datasets} onSync={handleSync} />}
        {role === 'leadership' && (
          <div className="bg-white p-24 rounded-[3rem] border-4 border-dashed border-slate-100 flex flex-col items-center gap-6">
             <BarChart3 size={80} className="text-slate-100" />
             <h3 className="text-3xl font-extrabold text-[#003057]">Intelligence Dashboard</h3>
             <p className="text-slate-500 max-w-lg text-center leading-relaxed font-medium">Strategic coverage reports are being calculated.</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-100 py-6 px-12 flex justify-between items-center">
        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">© 2024 Idox plc. Strategic Intelligence.</div>
        <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase">
          <button className="hover:text-[#007CBA]">Privacy</button>
          <button className="hover:text-[#007CBA]">Support</button>
        </div>
      </footer>
    </div>
  );
}