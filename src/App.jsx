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
  Filter,
  Globe,
  MoreVertical,
  DatabaseZap
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
  <div className="flex items-center gap-2.5 font-bold tracking-tight">
    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-lg border border-slate-200">
      <div className="w-5 h-5 border-[3px] border-[#003057] rounded-sm transform rotate-45" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-2xl text-white font-extrabold tracking-tighter">idox</span>
      <span className="text-[10px] text-sky-400 font-bold tracking-[0.2em] uppercase mt-0.5">Geospatial</span>
    </div>
  </div>
);

const Badge = ({ children, variant = 'default' }) => {
  const styles = {
    default: "bg-slate-100 text-slate-600 border-slate-200",
    success: "bg-emerald-100 text-emerald-700 border-emerald-200",
    warning: "bg-amber-100 text-amber-700 border-amber-200",
    blue: "bg-sky-50 text-sky-700 border-sky-100",
    gap: "bg-orange-50 text-orange-600 border-orange-100"
  };
  return (
    <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider border ${styles[variant]}`}>
      {children}
    </span>
  );
};

const UsageIcon = ({ type }) => {
  const t = type?.toLowerCase();
  if (t === 'basemap' || t === 'b') return <div title="Basemap" className="w-7 h-7 rounded bg-[#007CBA] text-white flex items-center justify-center font-bold text-[10px] shadow-sm ring-1 ring-white/20">B</div>;
  if (t === 'analytical' || t === 'a') return <div title="Analytical" className="w-7 h-7 rounded bg-[#2ECC71] text-white flex items-center justify-center font-bold text-[10px] shadow-sm ring-1 ring-white/20">A</div>;
  if (t === 'unknown' || t === '?') return <div title="Unknown" className="w-7 h-7 rounded bg-[#F1C40F] text-white flex items-center justify-center font-bold text-[10px] shadow-sm ring-1 ring-white/20">?</div>;
  return <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />;
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

  useEffect(() => {
    if (datasets.length > 0 && !selected) setSelected(datasets[0]);
  }, [datasets]);

  const filtered = useMemo(() => {
    return datasets.filter(d => {
      const matchSearch = (d.commonName || '').toLowerCase().includes(search.toLowerCase()) || 
                          (d.name || '').toLowerCase().includes(search.toLowerCase()) ||
                          (d.supplier || '').toLowerCase().includes(search.toLowerCase());
      const matchGroup = dataGroup === 'All data groups' || d.group === dataGroup;
      const matchUnit = unit === 'All business units' || d.bu === unit;
      const matchStage = stage === 'All lifecycle stages' || (d.usage && d.usage[stage]);
      return matchSearch && matchGroup && matchUnit && matchStage;
    });
  }, [datasets, search, dataGroup, unit, stage]);

  const handleSync = async () => {
    setSyncing(true);
    try {
      await onSync();
    } catch (e) {
      console.error(e);
    }
    setSyncing(false);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
      {/* Top Banner / Breadcrumb */}
      <div className="flex justify-between items-center bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm">
        <div>
           <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">
             <span>Idox Geospatial</span>
             <ChevronRight size={10} />
             <span className="text-sky-600">Catalogue workspace</span>
           </div>
           <h2 className="text-2xl font-black text-[#003057]">Catalogue workspace</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl font-bold text-[11px] uppercase tracking-wider hover:bg-slate-100 transition-all">Open admin queue</button>
          <button onClick={handleSync} disabled={syncing} className="px-4 py-2 bg-[#003057] text-white rounded-xl font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 hover:bg-[#004a7a] transition-all shadow-lg shadow-[#003057]/10 disabled:opacity-50">
             {syncing ? <Loader2 className="animate-spin" size={14} /> : <RefreshCw size={14} />}
             {syncing ? 'Syncing...' : 'Sync Workbook Now'}
          </button>
        </div>
      </div>

      {/* Filters Card */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
        <p className="text-sm text-slate-500 font-medium max-w-2xl leading-relaxed">
          Browse the governed non-client catalogue, switch into edit mode when records need improvement, and commit changes only when you are ready.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Common name</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-sky-500/20 outline-none"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Data group</label>
            <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none" value={dataGroup} onChange={e => setDataGroup(e.target.value)}>
              <option>All data groups</option>
              {DATA_GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Business unit</label>
            <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none" value={unit} onChange={e => setUnit(e.target.value)}>
              <option>All business units</option>
              {BUSINESS_UNITS.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Lifecycle stage</label>
            <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none" value={stage} onChange={e => setStage(e.target.value)}>
              <option>All lifecycle stages</option>
              {INDUSTRY_STAGES[industry].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Split Content View */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Table View */}
        <div className="flex-1 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-[11px] font-black text-[#003057] uppercase tracking-widest">Catalogue Records</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-100">{filtered.length} results</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400 tracking-[0.15em] border-b border-slate-100">
                <tr>
                  <th className="px-8 py-5">Common Name</th>
                  <th className="px-8 py-5">Data Group</th>
                  <th className="px-8 py-5">Supplier</th>
                  <th className="px-8 py-5">BU</th>
                  <th className="px-8 py-5 text-center">Stages</th>
                  <th className="px-8 py-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(d => (
                  <tr 
                    key={d.id} 
                    onClick={() => setSelected(d)}
                    className={`hover:bg-sky-50/40 transition-colors cursor-pointer group ${selected?.id === d.id ? 'bg-sky-50' : ''}`}
                  >
                    <td className="px-8 py-5">
                      <div className="font-bold text-[#003057] group-hover:text-sky-600 transition-colors">{d.commonName || 'Untitled'}</div>
                      <div className="text-[10px] text-slate-400 mt-1 max-w-[180px] font-medium line-clamp-1">{d.name}</div>
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{d.group}</td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{d.supplier || 'N/A'}</td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{d.bu}</td>
                    <td className="px-8 py-5 text-center font-bold text-xs text-[#003057]">{Object.keys(d.usage || {}).length}</td>
                    <td className="px-8 py-5">
                      <Badge variant="gap">Desired / Gap</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="w-full lg:w-[420px] bg-white rounded-[2rem] border border-slate-200 shadow-sm sticky top-28 overflow-hidden">
          {selected ? (
            <div className="p-10 space-y-10 animate-in fade-in duration-300">
              <div className="flex justify-between items-start">
                <div>
                   <Badge variant="blue">Record Detail</Badge>
                   <h3 className="text-2xl font-black text-[#003057] mt-3 leading-tight tracking-tight">{selected.commonName}</h3>
                   <div className="text-[10px] font-mono text-slate-400 mt-1">{selected.name}</div>
                </div>
                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg"><Info size={20} /></div>
              </div>

              <div className="space-y-4">
                 <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">Description</label>
                 <p className="text-sm text-slate-500 leading-relaxed font-medium">
                   {selected.description || "No description provided for this geospatial record."}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-8 border-t border-slate-100">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block">Data group</label>
                  <div className="text-xs font-bold text-[#003057]">{selected.group}</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block">Supplier</label>
                  <div className="text-xs font-bold text-[#003057]">{selected.supplier || 'Idox / Partners'}</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block">Coverage</label>
                  <div className="text-xs font-bold text-[#003057]">Great Britain</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block">Business Unit</label>
                  <div className="text-xs font-bold text-[#003057]">{selected.bu}</div>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-slate-100">
                 <div className="flex justify-between items-center">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">Lifecycle Usage</label>
                   <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded uppercase">{industry} Framework</span>
                 </div>
                 <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                   {INDUSTRY_STAGES[industry].map(s => (
                     <div key={s} className="flex items-center justify-between p-3.5 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all hover:border-sky-200">
                       <span className="text-[11px] font-bold text-slate-600 pr-4">{s}</span>
                       <UsageIcon type={selected.usage?.[s]} />
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          ) : (
            <div className="p-20 text-center flex flex-col items-center justify-center space-y-4">
              <Layers className="text-slate-200" size={60} />
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Select a record to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- CORE APP COMPONENT ---

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
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setDatasets(data);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });
  }, [user]);

  const handleSync = async () => {
    const SHEET_ID = '17MCi7epIJdxac0xzV2QTGGBUoL4Hi11zhzrbeRtRJXg';
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
    
    const parseCSV = (text) => {
      const lines = text.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) return [];
      
      const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
      return lines.slice(1).map(line => {
        // Handle CSV split with commas inside quotes properly
        const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const cleanValues = values.map(v => v.trim().replace(/^"|"$/g, ''));
        
        return headers.reduce((obj, header, index) => {
          obj[header] = cleanValues[index];
          return obj;
        }, {});
      });
    };

    const res = await fetch(url);
    if (!res.ok) throw new Error("Sync failed");
    const rows = parseCSV(await res.text());
    
    const batch = writeBatch(db);
    rows.forEach((row, i) => {
      const name = row.Name || row.name || row.Dataset;
      if (!name) return;
      
      const ref = doc(db, 'artifacts', appId, 'public', 'data', 'datasets', `ds-${i}`);
      const usage = {};
      
      // Auto-map lifecycle stages based on columns
      Object.keys(row).forEach(key => {
        const val = row[key]?.trim().toLowerCase();
        if (val === 'b' || val === 'a' || val === '?') {
          usage[key] = val;
        }
      });

      batch.set(ref, {
        name,
        commonName: row['Common Name'] || row.common_name || '',
        group: row.Group || row.group || row['Data Group'] || 'General',
        bu: row.BU || row.BusinessUnit || row.bu || 'Geospatial',
        supplier: row.Supplier || row.supplier || '',
        description: row.Description || row.description || '',
        usage,
        updatedAt: serverTimestamp()
      });
    });
    await batch.commit();
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003057] gap-8">
       <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin shadow-2xl" />
       <div className="flex flex-col items-center gap-2">
         <span className="text-[10px] font-black uppercase text-sky-400 tracking-[0.5em] animate-pulse">Initializing Idox Platform</span>
         <span className="text-xs text-white/40 font-bold">Connecting to Secure Cloud</span>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <header className="bg-[#003057] text-white px-12 py-7 flex justify-between items-center sticky top-0 z-50 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-16">
          <button onClick={() => setRole(null)} className="hover:scale-105 transition-transform"><IdoxLogo /></button>
          <nav className="hidden lg:flex gap-2">
            {['Sales', 'Data', 'Leadership'].map(r => (
              <button 
                key={r} 
                onClick={() => setRole(r.toLowerCase())}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${role === r.toLowerCase() ? 'bg-sky-500 text-white shadow-xl ring-4 ring-sky-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {r === 'Data' ? 'Data Management' : r}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end mr-2">
            <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest leading-none">Security Environment</span>
            <span className="text-[11px] font-bold text-white mt-1">Production Hub v1.5</span>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-sky-500 flex items-center justify-center text-white font-black text-sm shadow-xl ring-4 ring-white/10 select-none">ID</div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto p-12 md:p-16 w-full">
        {!role ? (
          <div className="grid lg:grid-cols-2 gap-20 py-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
             <div className="flex flex-col justify-center">
                <div className="w-16 h-2 bg-sky-500 rounded-full mb-8" />
                <h1 className="text-7xl font-black text-[#003057] mb-8 leading-[0.95] tracking-tighter">
                  Strategic <br/>Intelligence Hub
                </h1>
                <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed max-w-md">
                   Governed lifecycle insight for sales, data, and leadership teams. Centralizing geospatial availability across the business.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setRole('sales')} className="bg-[#003057] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:translate-y-[-2px] hover:bg-[#004a7a] transition-all flex items-center gap-3">
                    Go to Sales View <ChevronRight size={18}/>
                  </button>
                  <button onClick={() => setRole('data')} className="bg-white text-[#003057] border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all">
                    Data Sync Admin
                  </button>
                </div>
             </div>
             <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
               <div className="w-24 h-24 bg-sky-100 text-sky-600 rounded-[2.5rem] flex items-center justify-center mb-8 ring-8 ring-sky-50 transition-transform group-hover:scale-110 duration-500">
                 <DatabaseZap size={44} />
               </div>
               <h3 className="text-3xl font-black text-[#003057] mb-3 tracking-tight">{datasets.length} Active Datasets</h3>
               <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Master Product Catalogue</p>
               <div className="mt-8 flex gap-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                 <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Database Sync Active</span>
               </div>
             </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setRole(null)} className="p-3 bg-white rounded-2xl text-slate-400 hover:bg-slate-50 border border-slate-200 shadow-sm transition-all group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="h-8 w-px bg-slate-300 mx-2" />
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.4em] block leading-none mb-1.5">Environment Hub</span>
                <span className="text-lg font-black text-[#003057] uppercase tracking-tighter capitalize leading-none">{role} workspace</span>
              </div>
            </div>
            {role === 'data' ? (
              <CatalogueWorkspace datasets={datasets} onSync={handleSync} />
            ) : (
              <div className="bg-white p-32 rounded-[4rem] border border-slate-200 shadow-sm text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-700">
                <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 border-2 border-slate-100 mb-4">
                  <BarChart3 size={48} />
                </div>
                <h3 className="text-3xl font-black text-[#003057] uppercase tracking-tight leading-none">Intelligence Dashboard</h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-sm mx-auto leading-relaxed">
                   Market coverage and commercial gap analysis reports are being calculated from the master product workbook.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 px-16 flex flex-col md:flex-row justify-between items-center gap-8 mt-20">
        <div className="flex items-center gap-5 opacity-50 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <div className="w-8 h-8 border-[3px] border-[#003057] rounded-sm transform rotate-45 transition-transform group-hover:rotate-[135deg] duration-700" />
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#003057]">idox</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-sky-600">Geospatial Standard</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <button className="hover:text-sky-600 transition-colors">Privacy & Data Governance</button>
          <button className="hover:text-sky-600 transition-colors">Compliance Hub</button>
          <button className="hover:text-sky-600 transition-colors">Strategic Support</button>
          <button className="hover:text-emerald-600 transition-colors flex items-center gap-2">
            System Online <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </button>
        </div>
      </footer>
    </div>
  );
}
