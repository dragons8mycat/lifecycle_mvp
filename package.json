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
  DatabaseZap,
  Info,
  Filter,
  Map,
  Globe,
  Settings
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

// --- SYSTEM CONSTANTS ---
const INDUSTRY_STAGES = {
  'Fibre': ['Strategic Planning (HLP)', 'High-Level Design (HLD)', 'Physical Infrastructure Analysis (PIA)', 'Field Survey', 'Low Level Design (LLD)', 'Civils & Build', 'As-Built'],
  'Housing': ['Scoping', 'Feasibility', 'Preliminary Environmental Screening', 'Environmental Impact Assessment (EIA)', 'Concept Design & Planning Application', 'Government & Community Approvals', 'Detailed Design & Engineering', 'Financing & Acquisition', 'Construction', 'Sales, Marketing & Handover', 'Post-Construction Monitoring']
};

const DATA_GROUPS = ['Aviation Constraints', 'Biodiversity', 'Administrative', 'Geospatial', 'Planning & Policy', 'Environmental'];
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
    catalogue: "bg-emerald-50 text-emerald-600 border-emerald-100"
  };
  return (
    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${styles[variant]}`}>
      {children}
    </span>
  );
};

const UsageIcon = ({ type }) => {
  const t = type?.toLowerCase();
  if (t === 'basemap' || t === 'b') return <div title="Basemap" className="w-7 h-7 rounded bg-[#007CBA] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">B</div>;
  if (t === 'analytical' || t === 'a') return <div title="Analytical" className="w-7 h-7 rounded bg-[#2ECC71] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">A</div>;
  if (t === 'unknown' || t === '?') return <div title="Unknown" className="w-7 h-7 rounded bg-[#F1C40F] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">?</div>;
  return <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />;
};

// --- MAIN PAGES ---

const OverviewPage = ({ onSelectRole, datasets }) => (
  <div className="min-h-screen bg-slate-50">
    <div className="bg-[#003057] text-white py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <IdoxLogo />
          <h1 className="text-6xl font-black mb-8 mt-12 leading-[1.1] tracking-tight">
            Data Lifecycles <span className="text-sky-400">MVP</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-medium">
            Governed lifecycle insight for sales, data, and leadership teams. Centralizing geospatial availability across the business.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">{datasets.length}</span>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-[0.2em] mt-1">Live Records</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">2</span>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-[0.2em] mt-1">Industries</span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-4 w-full max-w-md">
          {[
            { id: 'sales', title: 'Sales & Commercial', icon: Users, desc: 'Lifecycle touchpoints & usage classification.' },
            { id: 'data', title: 'Data Management', icon: DatabaseZap, desc: 'Workbook sync & catalogue administration.' },
            { id: 'leadership', title: 'Leadership', icon: BarChart3, desc: 'Coverage metrics & strategic health.' }
          ].map(role => (
            <button key={role.id} onClick={() => onSelectRole(role.id)} className="group flex items-center gap-6 p-7 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl transition-all hover:translate-x-3">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center ring-1 ring-white/5 group-hover:scale-110 transition-transform"><role.icon size={28} /></div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-xl leading-tight">{role.title}</h3>
                <p className="text-sm text-slate-400 mt-1 font-medium">{role.desc}</p>
              </div>
              <ChevronRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" size={24} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CatalogueWorkspace = ({ datasets, onSync }) => {
  const [selected, setSelected] = useState(datasets[0] || null);
  const [industry, setIndustry] = useState('Housing');
  const [search, setSearch] = useState('');
  const [dataGroup, setDataGroup] = useState('All data groups');
  const [unit, setUnit] = useState('All business units');
  const [stage, setStage] = useState('All lifecycle stages');
  const [syncing, setSyncing] = useState(false);

  const filtered = useMemo(() => {
    return datasets.filter(d => {
      const matchSearch = d.commonName?.toLowerCase().includes(search.toLowerCase()) || d.name?.toLowerCase().includes(search.toLowerCase());
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Header Area */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-[10px] font-black text-sky-600 uppercase tracking-[0.3em] mb-2 block">Data Management</span>
          <h2 className="text-3xl font-black text-[#003057] tracking-tight">Catalogue workspace</h2>
          <p className="text-slate-500 text-sm mt-1 max-w-xl leading-relaxed">
            Browse the governed non-client catalogue, switch into edit mode when records need improvement, and commit changes only when you are ready.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl font-bold text-xs hover:bg-slate-100 transition-all">Open admin queue</button>
          <button onClick={handleSync} disabled={syncing} className="px-5 py-2.5 bg-[#003057] text-white rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-[#004a7a] shadow-lg shadow-[#003057]/10 disabled:opacity-50">
            {syncing ? <Loader2 className="animate-spin" size={14} /> : <RefreshCw size={14} />} 
            {syncing ? 'Syncing...' : 'Sync Workbook Now'}
          </button>
        </div>
      </div>

      {/* Filters Area */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Common name</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:border-sky-500 outline-none transition-all font-medium"
              placeholder="Search by common name, supplier..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Data group</label>
          <select 
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none"
            value={dataGroup}
            onChange={e => setDataGroup(e.target.value)}
          >
            <option>All data groups</option>
            {DATA_GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Business unit</label>
          <select 
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none"
            value={unit}
            onChange={e => setUnit(e.target.value)}
          >
            <option>All business units</option>
            {BUSINESS_UNITS.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block ml-1">Lifecycle stage</label>
          <select 
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none"
            value={stage}
            onChange={e => setStage(e.target.value)}
          >
            <option>All lifecycle stages</option>
            {INDUSTRY_STAGES[industry].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden w-full">
          <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-sm font-black text-[#003057] uppercase tracking-widest">Catalogue records</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">{filtered.length} visible</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                <tr>
                  <th className="px-8 py-4">Common name</th>
                  <th className="px-8 py-4">Data group</th>
                  <th className="px-8 py-4">Supplier</th>
                  <th className="px-8 py-4">Business unit</th>
                  <th className="px-8 py-4 text-center">Stages</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(d => (
                  <tr 
                    key={d.id} 
                    className={`hover:bg-sky-50/40 transition-colors cursor-pointer group ${selected?.id === d.id ? 'bg-sky-50' : ''}`}
                    onClick={() => setSelected(d)}
                  >
                    <td className="px-8 py-5">
                      <div className="font-bold text-[#003057] group-hover:text-sky-600 transition-colors">{d.commonName || 'Untitled'}</div>
                      <div className="text-[10px] text-slate-400 mt-1 leading-tight max-w-[140px] font-medium">{d.name}</div>
                    </td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{d.group}</td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{d.supplier || 'N/A'}</td>
                    <td className="px-8 py-5 text-xs text-slate-500 font-medium">{d.bu}</td>
                    <td className="px-8 py-5 text-center font-bold text-xs text-[#003057]">{Object.keys(d.usage || {}).length}</td>
                    <td className="px-8 py-5">
                      <div className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-[9px] font-black uppercase tracking-tighter text-center">Desired / Gap</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="w-full lg:w-[400px] bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden sticky top-32">
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest block mb-2">Record Detail</span>
                <h3 className="text-2xl font-black text-[#003057] leading-tight">{selected?.name || 'Select a record'}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-100 transition-all">
                <Info size={18} />
              </div>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {selected?.description || 'No description provided for this dataset.'}
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="catalogue">Catalogue</Badge>
              <Badge variant="blue">{selected?.bu}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-slate-100 pt-8">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Data group</label>
                <div className="text-xs font-bold text-slate-700">{selected?.group}</div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Supplier</label>
                <div className="text-xs font-bold text-slate-700">{selected?.supplier || 'Idox / Local Authorities'}</div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Coverage</label>
                <div className="text-xs font-bold text-slate-700">Great Britain</div>
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Business unit</label>
                <div className="text-xs font-bold text-slate-700">{selected?.bu || 'Geospatial Products'}</div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-100">
              <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest block">Lifecycle usage</label>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {INDUSTRY_STAGES[industry].map(s => (
                  <div key={s} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 group hover:border-sky-200 transition-colors">
                    <span className="text-[11px] font-bold text-slate-600">{industry} · {s}</span>
                    <UsageIcon type={selected?.usage?.[s]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CORE APP ---

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
        const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
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
      Object.keys(row).forEach(key => {
        const val = row[key]?.trim().toLowerCase();
        if (val === 'b' || val === 'a' || val === '?') usage[key] = val;
      });

      batch.set(ref, {
        name,
        commonName: row['Common Name'] || row.common_name || '',
        group: row.Group || row.group || 'General',
        bu: row.BU || row.BusinessUnit || row.bu || 'Geospatial',
        description: row.Description || row.description || '',
        usage,
        updatedAt: new Date().toISOString()
      });
    });
    await batch.commit();
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#003057] gap-6">
      <Loader2 className="animate-spin text-sky-400" size={48} />
      <span className="text-[10px] font-black uppercase text-sky-400 tracking-[0.4em] animate-pulse">Initializing Idox Hub</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-[#003057] text-white px-10 py-6 flex justify-between items-center sticky top-0 z-50 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-12">
          <button onClick={() => setRole(null)} className="hover:scale-105 transition-transform"><IdoxLogo /></button>
          <nav className="hidden lg:flex gap-1">
            {['Sales', 'Data', 'Leadership'].map(r => (
              <button 
                key={r} 
                onClick={() => setRole(r.toLowerCase())}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${role === r.toLowerCase() ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {r}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Environment</span>
            <span className="text-xs font-bold text-white">Production v1.5</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-sky-500 flex items-center justify-center text-white font-black text-sm shadow-lg ring-4 ring-white/10">ID</div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-10 md:p-16">
        {!role ? (
          <OverviewPage onSelectRole={setRole} datasets={datasets} />
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-12">
              <button onClick={() => setRole(null)} className="p-3 bg-white rounded-2xl text-slate-400 hover:bg-slate-50 border border-slate-200 shadow-sm transition-all group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="h-6 w-px bg-slate-300 mx-2" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">Current View</span>
                <span className="text-sm font-bold text-[#003057] capitalize">{role} workspace</span>
              </div>
            </div>
            {role === 'data' ? (
              <CatalogueWorkspace datasets={datasets} onSync={handleSync} />
            ) : (
              <div className="bg-white p-32 rounded-[3rem] border border-slate-200 shadow-sm text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200 mx-auto mb-8 border border-slate-100">
                  <BarChart3 size={40} />
                </div>
                <h3 className="text-2xl font-black text-[#003057] mb-3 uppercase tracking-tight">Intelligence Dashboard</h3>
                <p className="text-slate-400 font-medium max-w-sm mx-auto">Market coverage and commercial gap analysis reports are being calculated.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-10 px-16 flex flex-col md:flex-row justify-between items-center gap-6 mt-20">
        <div className="flex items-center gap-4 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="w-6 h-6 border-2 border-[#003057] rounded-sm transform rotate-45" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003057]">idox Geospatial Standard</span>
        </div>
        <div className="flex gap-12 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <button className="hover:text-sky-600 transition-colors">Privacy & Data Governance</button>
          <button className="hover:text-sky-600 transition-colors">Support Hub</button>
          <button className="hover:text-sky-600 transition-colors flex items-center gap-1.5">
            System Status <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          </button>
        </div>
      </footer>
    </div>
  );
}
