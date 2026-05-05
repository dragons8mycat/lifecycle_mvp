import React, { useState, useMemo, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  onSnapshot, 
  query,
  writeBatch,
  serverTimestamp
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
  Info,
  DatabaseZap,
  Globe,
  MapPin,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

// --- FIREBASE CONFIGURATION ---
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

// --- SYSTEM CONSTANTS ---
const INDUSTRY_STAGES = {
  'Fibre': ['Strategic Planning (HLP)', 'High-Level Design (HLD)', 'Physical Infrastructure Analysis (PIA)', 'Field Survey', 'Low Level Design (LLD)', 'Civils & Build', 'As-Built'],
  'Housing': ['Scoping', 'Feasibility', 'Preliminary Environmental Screening', 'Environmental Impact Assessment (EIA)', 'Concept Design & Planning Application', 'Government & Community Approvals', 'Detailed Design & Engineering', 'Financing & Acquisition', 'Construction', 'Sales, Marketing & Handover', 'Post-Construction Monitoring']
};

const DATA_GROUPS = ['Aviation Constraints', 'Biodiversity', 'Administrative', 'Geospatial', 'Planning & Policy', 'Environmental', 'Demographics'];
const BUSINESS_UNITS = ['Commercial', 'Marketing', 'Product', 'Customer Success', 'GIS Team', 'Geospatial Products', 'Renewables'];

// --- UI COMPONENTS ---

const IdoxLogo = () => (
  <div className="flex items-center gap-3 font-bold tracking-tight text-left">
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl border border-slate-200">
      <div className="w-6 h-6 border-[3px] border-[#003057] rounded-sm transform rotate-45" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-2xl text-white font-extrabold tracking-tighter">idox</span>
      <span className="text-[10px] text-sky-400 font-black tracking-[0.2em] uppercase mt-0.5">Geospatial</span>
    </div>
  </div>
);

const Badge = ({ children, variant = 'default' }) => {
  const styles = {
    default: "bg-slate-100 text-slate-600 border-slate-200",
    success: "bg-emerald-100 text-emerald-700 border-emerald-200",
    warning: "bg-amber-100 text-amber-700 border-amber-200",
    blue: "bg-sky-50 text-sky-700 border-sky-100",
    idox: "bg-[#003057] text-white border-transparent"
  };
  return (
    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${styles[variant]}`}>
      {children}
    </span>
  );
};

const UsageIcon = ({ type }) => {
  const t = type?.toLowerCase();
  if (t === 'basemap' || t === 'b') return <div title="Basemap" className="w-8 h-8 rounded-lg bg-[#007CBA] text-white flex items-center justify-center font-bold text-[11px] shadow-sm ring-2 ring-white/20">B</div>;
  if (t === 'analytical' || t === 'a') return <div title="Analytical" className="w-8 h-8 rounded-lg bg-[#2ECC71] text-white flex items-center justify-center font-bold text-[11px] shadow-sm ring-2 ring-white/20">A</div>;
  if (t === 'unknown' || t === '?') return <div title="Unknown" className="w-8 h-8 rounded-lg bg-[#F1C40F] text-white flex items-center justify-center font-bold text-[11px] shadow-sm ring-2 ring-white/20">?</div>;
  return <div className="w-2 h-2 rounded-full bg-slate-200 mx-auto" />;
};

// --- WORKSPACES ---

const CatalogueWorkspace = ({ datasets, onSync }) => {
  const [selected, setSelected] = useState(null);
  const [industry, setIndustry] = useState('Housing');
  const [search, setSearch] = useState('');
  const [dataGroup, setDataGroup] = useState('All data groups');
  const [unit, setUnit] = useState('All business units');
  const [stage, setStage] = useState('All lifecycle stages');
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState(null);

  useEffect(() => {
    if (datasets.length > 0 && !selected) setSelected(datasets[0]);
  }, [datasets, selected]);

  const filtered = useMemo(() => {
    return datasets.filter(d => {
      const matchSearch = (d.commonName || '').toLowerCase().includes(search.toLowerCase()) || 
                          (d.name || '').toLowerCase().includes(search.toLowerCase());
      const matchGroup = dataGroup === 'All data groups' || d.group === dataGroup;
      const matchUnit = unit === 'All business units' || d.bu === unit;
      const matchStage = stage === 'All lifecycle stages' || (d.usage && d.usage[stage]);
      return matchSearch && matchGroup && matchUnit && matchStage;
    });
  }, [datasets, search, dataGroup, unit, stage]);

  const handleSync = async () => {
    setSyncing(true);
    setSyncError(null);
    try {
      await onSync();
    } catch (e) { 
      console.error(e);
      setSyncError("Sync failed. Ensure your Google Sheet is 'Published to Web' as a CSV.");
    }
    setSyncing(false);
  };

  return (
    <div className="space-y-10 text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Workspace Header */}
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
           <div className="flex items-center gap-2 text-[10px] font-black uppercase text-sky-600 tracking-[0.3em] mb-3">
             <Globe size={12} />
             <span>Strategic Intelligence</span>
             <ChevronRight size={10} className="text-slate-300" />
             <span className="text-slate-400">Catalogue Workspace</span>
           </div>
           <h2 className="text-4xl font-black text-[#003057] tracking-tight">Catalogue workspace</h2>
           <p className="text-slate-500 text-sm mt-3 max-w-2xl leading-relaxed font-medium">
             Browse the governed non-client catalogue. Switch into edit mode to refine record intelligence or trigger a sync with the master project workbook.
           </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-slate-50 text-slate-600 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">Admin Queue</button>
            <button 
              onClick={handleSync} 
              disabled={syncing}
              className="px-6 py-3 bg-[#003057] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#004a7a] transition-all shadow-xl shadow-[#003057]/10 disabled:opacity-50"
            >
               {syncing ? <Loader2 className="animate-spin" size={16} /> : <RefreshCw size={16} />}
               {syncing ? 'Syncing...' : 'Sync Workbook Now'}
            </button>
          </div>
          {syncError && (
            <div className="text-[10px] font-bold text-rose-500 flex items-center gap-2 animate-pulse bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              <AlertTriangle size={12} /> {syncError}
            </div>
          )}
        </div>
      </div>

      {/* Modern Filter Strip */}
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] block ml-1">Search records</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-sky-500/10 outline-none transition-all placeholder:text-slate-300"
              placeholder="Search common name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] block ml-1">Data group</label>
          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold outline-none cursor-pointer hover:bg-slate-100 transition-colors" value={dataGroup} onChange={e => setDataGroup(e.target.value)}>
            <option>All data groups</option>
            {DATA_GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] block ml-1">Business unit</label>
          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold outline-none cursor-pointer hover:bg-slate-100 transition-colors" value={unit} onChange={e => setUnit(e.target.value)}>
            <option>All business units</option>
            {BUSINESS_UNITS.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] block ml-1">Stage (Housing)</label>
          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold outline-none cursor-pointer hover:bg-slate-100 transition-colors" value={stage} onChange={e => setStage(e.target.value)}>
            <option>All lifecycle stages</option>
            {INDUSTRY_STAGES[industry].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Content Split View */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Table Area */}
        <div className="flex-1 bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-10 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
            <h3 className="text-xs font-black text-[#003057] uppercase tracking-widest flex items-center gap-2">
              <Layers size={14} className="text-sky-500" /> Catalogue Records
            </h3>
            <span className="text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">{filtered.length} records found</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] border-b border-slate-100">
                <tr>
                  <th className="px-10 py-6">Common Name</th>
                  <th className="px-10 py-6">Group</th>
                  <th className="px-10 py-6">Supplier</th>
                  <th className="px-10 py-6">BU</th>
                  <th className="px-10 py-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.length === 0 ? (
                  <tr><td colSpan="5" className="px-10 py-20 text-center text-slate-400 font-medium italic">No data synced. Click "Sync Workbook Now" above.</td></tr>
                ) : (
                  filtered.map(d => (
                    <tr 
                      key={d.id} 
                      onClick={() => setSelected(d)}
                      className={`hover:bg-sky-50/40 transition-all cursor-pointer group ${selected?.id === d.id ? 'bg-sky-50' : ''}`}
                    >
                      <td className="px-10 py-6">
                        <div className="font-extrabold text-[#003057] group-hover:text-sky-600 transition-colors text-base tracking-tight">{d.commonName || 'Untitled Dataset'}</div>
                        <div className="text-[10px] text-slate-400 mt-1 font-mono uppercase tracking-tighter opacity-70">{d.name}</div>
                      </td>
                      <td className="px-10 py-6 text-xs text-slate-500 font-bold">{d.group}</td>
                      <td className="px-10 py-6 text-xs text-slate-500 font-bold">{d.supplier || 'Idox / Local Auth'}</td>
                      <td className="px-10 py-6 text-xs text-slate-500 font-bold">{d.bu}</td>
                      <td className="px-10 py-6">
                        <Badge variant="warning">Desired / Gap</Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Detail Panel */}
        <div className="w-full lg:w-[480px] bg-white rounded-[3rem] border border-slate-200 shadow-xl sticky top-32 overflow-hidden ring-1 ring-slate-100">
          {selected ? (
            <div className="p-12 space-y-10 animate-in fade-in duration-500">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                   <Badge variant="blue">Record intelligence</Badge>
                   <h3 className="text-3xl font-black text-[#003057] mt-4 tracking-tight leading-none">{selected.commonName}</h3>
                   <div className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-2">
                     <Database size={10} /> {selected.name}
                   </div>
                </div>
                <div className="w-12 h-12 bg-slate-50 text-slate-300 rounded-2xl flex items-center justify-center border border-slate-100"><Info size={24} /></div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">Core Description</label>
                 <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                   {selected.description || "Comprehensive geospatial intelligence record managed under the Idox Strategic Data Governance framework."}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-y-10 gap-x-6 pt-10 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block flex items-center gap-1.5"><Layers size={10}/> Data Group</label>
                  <div className="text-xs font-black text-[#003057]">{selected.group}</div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block flex items-center gap-1.5"><MapPin size={10}/> Supplier</label>
                  <div className="text-xs font-black text-[#003057]">{selected.supplier || 'Proprietary / Partners'}</div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block flex items-center gap-1.5"><Globe size={10}/> Coverage</label>
                  <div className="text-xs font-black text-[#003057]">Great Britain (GB)</div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block flex items-center gap-1.5"><ExternalLink size={10}/> Business Unit</label>
                  <div className="text-xs font-black text-[#003057]">{selected.bu}</div>
                </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-slate-100">
                 <div className="flex justify-between items-center">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">Lifecycle Touchpoints</label>
                   <span className="text-[9px] font-black text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg uppercase border border-sky-100">{industry} Framework</span>
                 </div>
                 <div className="space-y-3 max-h-[350px] overflow-y-auto pr-3 custom-scrollbar">
                   {INDUSTRY_STAGES[industry].map(s => (
                     <div key={s} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all hover:border-sky-300 hover:bg-sky-50/20 group">
                       <span className="text-[11px] font-extrabold text-slate-600 group-hover:text-sky-700 transition-colors pr-6">{s}</span>
                       <UsageIcon type={selected.usage?.[s]} />
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          ) : (
            <div className="p-32 text-center flex flex-col items-center justify-center space-y-6 grayscale opacity-30">
              <Layers size={80} strokeWidth={1.5} className="text-slate-200" />
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Select record for intelligence</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- MAIN APPLICATION ENTRY ---

export default function App() {
  const [role, setRole] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Initialize and handle standard resets
  useEffect(() => {
    signInAnonymously(auth).catch(console.error);
    return onAuthStateChanged(auth, setUser);
  }, []);

  // Listen to Firestore
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'datasets'));
    return onSnapshot(q, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setDatasets(data);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });
  }, [user]);

  const handleSync = async () => {
    // Standard CSV Export URL for Published Google Sheets
    const SHEET_ID = '17MCi7epIJdxac0xzV2QTGGBUoL4Hi11zhzrbeRtRJXg';
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
    
    const parseCSV = (text) => {
      const lines = text.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) return [];
      const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
      return lines.slice(1).map(line => {
        const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const cleanValues = values.map(v => v.trim().replace(/^"|"$/g, ''));
        return headers.reduce((obj, header, index) => {
          obj[header] = cleanValues[index];
          return obj;
        }, {});
      });
    };

    const res = await fetch(url);
    if (!res.ok) {
        // Log details to help user fix the "Published to web" settings
        console.error("HTTP Error during sync:", res.status, res.statusText);
        throw new Error("HTTP " + res.status);
    }
    
    const text = await res.text();
    const rows = parseCSV(text);
    
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
        group: row.Group || row.group || 'General',
        bu: row.BU || row.BusinessUnit || 'Geospatial',
        supplier: row.Supplier || row.supplier || '',
        description: row.Description || row.description || '',
        usage,
        updatedAt: serverTimestamp()
      });
    });
    await batch.commit();
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003057] gap-10">
       <div className="relative">
         <div className="w-20 h-20 border-4 border-sky-500/20 rounded-full" />
         <div className="w-20 h-20 border-4 border-sky-400 border-t-transparent rounded-full animate-spin absolute top-0 left-0" />
       </div>
       <div className="flex flex-col items-center gap-3">
         <span className="text-[11px] font-black uppercase text-sky-400 tracking-[0.6em] animate-pulse">Idox Geospatial Hub</span>
         <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Establishing Secure Session</span>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col text-left">
      <header className="bg-[#003057] text-white px-12 py-8 flex justify-between items-center sticky top-0 z-50 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-20">
          <button onClick={() => setRole(null)} className="hover:scale-105 transition-transform"><IdoxLogo /></button>
          <nav className="hidden lg:flex gap-2">
            {['Sales', 'Data', 'Leadership'].map(r => (
              <button 
                key={r} 
                onClick={() => setRole(r.toLowerCase())}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all ${role === r.toLowerCase() ? 'bg-sky-500 text-white shadow-xl ring-4 ring-sky-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {r === 'Data' ? 'Data Management' : r}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest leading-none mb-1.5">Environment</span>
            <span className="text-[12px] font-bold text-white leading-none">Strategic Intelligence v1.5</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center text-white font-black text-base shadow-xl ring-4 ring-white/10 select-none">ID</div>
        </div>
      </header>

      <main className="flex-1 max-w-[1600px] mx-auto p-12 md:p-20 w-full">
        {!role ? (
          <div className="grid lg:grid-cols-2 gap-32 py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
             <div className="flex flex-col justify-center text-left">
                <div className="w-20 h-2 bg-sky-500 rounded-full mb-10" />
                <h1 className="text-8xl font-black text-[#003057] mb-10 leading-[0.9] tracking-tighter">
                  Strategic <br/>Intelligence Hub
                </h1>
                <p className="text-2xl text-slate-500 mb-16 font-semibold leading-relaxed max-w-xl">
                   Governed lifecycle insight for sales, data, and leadership teams. Centralizing geospatial availability across the business.
                </p>
                <div className="flex gap-6">
                  <button onClick={() => setRole('sales')} className="bg-[#003057] text-white px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl hover:translate-y-[-4px] hover:bg-[#004a7a] transition-all flex items-center gap-4">
                    Sales Framework <ChevronRight size={20}/>
                  </button>
                  <button onClick={() => setRole('data')} className="bg-white text-[#003057] border-2 border-slate-200 px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all">
                    Catalogue Admin
                  </button>
                </div>
             </div>
             <div className="bg-white p-20 rounded-[5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
               <div className="w-32 h-32 bg-sky-100 text-sky-600 rounded-[3rem] flex items-center justify-center mb-10 ring-[12px] ring-sky-50 transition-transform group-hover:scale-110 duration-700">
                 <DatabaseZap size={56} />
               </div>
               <h3 className="text-4xl font-black text-[#003057] mb-4 tracking-tight">{datasets.length} Active Records</h3>
               <p className="text-slate-400 font-black text-xs uppercase tracking-[0.3em]">Product Intelligence Store</p>
               <div className="mt-12 flex gap-3 items-center">
                 <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                 <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Real-time Sync Active</span>
               </div>
             </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="flex items-center gap-6 mb-12">
              <button onClick={() => setRole(null)} className="p-4 bg-white rounded-2xl text-slate-400 hover:bg-slate-50 border border-slate-200 shadow-sm transition-all group">
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="h-10 w-px bg-slate-300 mx-2" />
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.5em] block leading-none mb-2">Workspace Navigation</span>
                <span className="text-2xl font-black text-[#003057] uppercase tracking-tighter leading-none capitalize">{role} workspace</span>
              </div>
            </div>
            {role === 'data' ? (
              <CatalogueWorkspace datasets={datasets} onSync={handleSync} />
            ) : (
              <div className="bg-white p-40 rounded-[5rem] border border-slate-200 shadow-sm text-center flex flex-col items-center gap-10 animate-in fade-in zoom-in-95 duration-1000">
                <div className="w-32 h-32 bg-slate-50 rounded-[3rem] flex items-center justify-center text-slate-200 border-2 border-slate-100 mb-6">
                  <BarChart3 size={60} />
                </div>
                <h3 className="text-4xl font-black text-[#003057] uppercase tracking-tight leading-none">Strategy Dashboard</h3>
                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[11px] max-w-sm mx-auto leading-loose">
                   Market coverage and commercial gap analysis reports are being compiled from the live master workbook.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-16 px-20 flex flex-col md:flex-row justify-between items-center gap-12 mt-32 text-left">
        <div className="flex items-center gap-6 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <div className="w-10 h-10 border-[4px] border-[#003057] rounded-sm transform rotate-45 transition-transform group-hover:rotate-[225deg] duration-1000" />
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.4em] text-[#003057]">idox</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">Geospatial Intelligence Standard</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          <button className="hover:text-sky-600 transition-colors">Governance Policy</button>
          <button className="hover:text-sky-600 transition-colors">Strategic Compliance</button>
          <button className="hover:text-sky-600 transition-colors">Internal Support</button>
          <button className="hover:text-emerald-600 transition-colors flex items-center gap-3">
            System Online <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          </button>
        </div>
      </footer>
    </div>
  );
}
