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
  Map,
  Layers
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
// Analytics only initializes in browser environments with window
if (typeof window !== 'undefined') {
  getAnalytics(app);
}

// Global App ID for Firestore pathing
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

// --- UI COMPONENTS ---

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
  if (type === 'basemap') return <div title="Basemap" className="w-7 h-7 rounded bg-[#007CBA] text-white flex items-center justify-center font-bold text-xs shadow-sm">B</div>;
  if (type === 'analytical') return <div title="Analytical" className="w-7 h-7 rounded bg-[#2ECC71] text-white flex items-center justify-center font-bold text-xs shadow-sm">A</div>;
  if (type === 'unknown') return <div title="Unknown" className="w-7 h-7 rounded bg-[#F1C40F] text-white flex items-center justify-center font-bold text-xs shadow-sm">?</div>;
  return <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />;
};

// --- PAGES ---

const OverviewPage = ({ onSelectRole, datasets }) => (
  <div className="min-h-screen bg-slate-50">
    <div className="bg-[#003057] text-white py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1">
          <IdoxLogo className="mb-8 scale-125 origin-left" />
          <h1 className="text-5xl font-extrabold mb-6">Lifecycle Hub</h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
            Standardizing geospatial data availability across the business. Select your role to view industry-specific project lifecycles.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{datasets.length}</span>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest">Datasets</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">2</span>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest">Industries</span>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-4 w-full max-w-md">
          {[
            { id: 'sales', title: 'Sales & Commercial', icon: Users, desc: 'Lifecycle touchpoints & usage classification.' },
            { id: 'data', title: 'Data Management', icon: Database, desc: 'Workbook sync & catalog administration.' },
            { id: 'leadership', title: 'Insights', icon: BarChart3, desc: 'Strategic coverage & data health.' }
          ].map(role => (
            <button 
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className="group flex items-center gap-5 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:translate-x-2"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <role.icon size={24} />
              </div>
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

    <div className="max-w-6xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#003057]">Centralized Asset Management</h2>
        <p className="text-slate-600 leading-relaxed">
          The Idox Lifecycle system aligns datasets with the unique workflows of Fibre and Housing development. We ensure commercial teams know exactly what data exists and how it should be used at every project milestone.
        </p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="blue">Firestore Backed</Badge>
          <Badge variant="blue">Idox Geospatial Standard</Badge>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h3 className="font-bold mb-4 text-[#003057] flex items-center gap-2">
          <Layers className="text-sky-500" size={20} /> System Information
        </h3>
        <p className="text-sm text-slate-500 mb-6 italic">About the Data User & Sales Workflows</p>
        <div className="space-y-4 text-sm text-slate-600">
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <span>Dedicated Edit Mode for Data Users with commit confirmation.</span>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <span>B/A/? Classification for quick data identification.</span>
          </div>
          <div className="flex gap-3">
            <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
            <span>Sticky Lifecycle headers for easy reference while scrolling.</span>
          </div>
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
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.commonName.toLowerCase().includes(search.toLowerCase())
  ), [datasets, search]);

  return (
    <div className="space-y-6">
      {/* Filters/Industry Select */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-end">
        <div className="w-64">
          <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Industry Framework</label>
          <select 
            className="w-full px-3 py-2 border-2 border-slate-100 rounded-xl focus:border-[#007CBA] outline-none font-bold text-[#003057]"
            value={industry}
            onChange={e => setIndustry(e.target.value)}
          >
            {Object.keys(INDUSTRY_CONFIG).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>
        <div className="flex-1 min-w-[240px]">
          <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Dataset Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              className="w-full pl-10 pr-4 py-2 border-2 border-slate-100 rounded-xl focus:border-[#007CBA] outline-none"
              placeholder="Search datasets..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-slate-100 p-1 rounded-xl ml-auto flex">
          <button onClick={() => setView('touchpoint')} className={`px-5 py-2 rounded-lg font-bold text-xs transition-all ${view === 'touchpoint' ? 'bg-white shadow-md text-[#003057]' : 'text-slate-500'}`}>Touchpoint View</button>
          <button onClick={() => setView('role-led')} className={`px-5 py-2 rounded-lg font-bold text-xs transition-all ${view === 'role-led' ? 'bg-white shadow-md text-[#003057]' : 'text-slate-500'}`}>Role-Led View</button>
        </div>
      </div>

      {view === 'touchpoint' ? (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 z-30 bg-[#003057] text-white">
                <tr>
                  <th className="px-6 py-5 font-bold text-xs uppercase tracking-widest border-r border-white/10 w-[300px]">Dataset / Common Name</th>
                  {stages.map(s => (
                    <th key={s} className="px-4 py-5 text-center font-bold text-[10px] uppercase tracking-tighter leading-none min-w-[120px]">
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(d => (
                  <tr key={d.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 border-r border-slate-100">
                      <div className="font-bold text-[#003057] group-hover:text-[#007CBA] transition-colors">{d.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-1 flex items-center gap-1">
                         <Info size={12} className="text-sky-400" /> {d.commonName}
                      </div>
                    </td>
                    {stages.map(s => (
                      <td key={s} className="px-4 py-4 text-center">
                        <div className="flex justify-center">
                          <UsageIcon type={d.usage?.[s]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-6 text-[9px] font-black uppercase text-slate-400">
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#007CBA] text-white flex items-center justify-center">B</div> Basemap</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#2ECC71] text-white flex items-center justify-center">A</div> Analytical</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#F1C40F] text-white flex items-center justify-center">?</div> Unknown</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(d => (
            <div key={d.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#007CBA] transition-all group cursor-pointer" onClick={() => setSelected(d)}>
              <div className="flex justify-between items-start mb-4">
                <Badge variant="blue">{d.group}</Badge>
                <div className="flex gap-1">
                  {stages.filter(s => d.usage?.[s]).slice(0, 3).map((s, i) => <UsageIcon key={i} type={d.usage[s]} />)}
                </div>
              </div>
              <h3 className="font-bold text-[#003057] text-lg mb-2">{d.name}</h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-6">{d.description}</p>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-black text-[#007CBA] tracking-widest">
                <span>VIEW DETAILS</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col">
            <div className="p-8 bg-[#003057] text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{selected.name}</h2>
                <span className="text-xs text-sky-300 font-mono tracking-widest">{selected.commonName}</span>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={28} /></button>
            </div>
            <div className="p-8 space-y-10 overflow-y-auto flex-1">
              <section>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-3 block tracking-widest">About this Dataset</label>
                <p className="text-slate-600 leading-relaxed text-sm">{selected.description}</p>
              </section>
              <section>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-4 block tracking-widest">{industry} Mapping</label>
                <div className="grid grid-cols-1 gap-2">
                  {stages.map(s => (
                    <div key={s} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-100">
                      <span className="text-xs font-bold text-slate-700">{s}</span>
                      <UsageIcon type={selected.usage?.[s]} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DataWorkflow = ({ datasets, onCommit, onSync }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [local, setLocal] = useState(datasets);
  const [pending, setPending] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => { setLocal(datasets); }, [datasets]);

  const handleUpdate = (id, field, val) => {
    setPending(p => ({ ...p, [id]: { ...(p[id] || {}), [field]: val } }));
    setLocal(curr => curr.map(d => d.id === id ? { ...d, [field]: val } : d));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[#003057]">Data Administration</h2>
          <p className="text-slate-500 mt-1">Refine dataset descriptions and framework mappings.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={onSync}
            className="bg-sky-50 text-[#007CBA] px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-sky-100 transition-all border border-sky-100"
          >
            <RefreshCw size={18} /> Sync Workbook
          </button>
          {Object.keys(pending).length > 0 && (
            <button onClick={() => setShowConfirm(true)} className="bg-[#003057] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg hover:bg-[#004a7a] transition-all">
              <Save size={18} /> Commit ({Object.keys(pending).length})
            </button>
          )}
          <button onClick={() => setIsEdit(!isEdit)} className={`px-6 py-3 rounded-2xl font-bold border transition-all ${isEdit ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            {isEdit ? 'Cancel Edit' : 'Edit Mode'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-[#003057] text-white text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="px-6 py-5">Internal Name</th>
              <th className="px-6 py-5">Common Name</th>
              <th className="px-6 py-5">Status</th>
              <th className="px-6 py-5">Data Group</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {local.map(d => (
              <tr key={d.id} className={`${pending[d.id] ? 'bg-sky-50' : 'hover:bg-slate-50'} transition-colors`}>
                <td className="px-6 py-4 font-bold text-[#003057]">{d.name}</td>
                <td className="px-6 py-4">
                  {isEdit ? (
                    <input className="px-2 py-1 border-2 border-sky-100 rounded-lg w-full font-mono text-xs outline-none focus:border-sky-400" value={d.commonName} onChange={e => handleUpdate(d.id, 'commonName', e.target.value)} />
                  ) : d.commonName}
                </td>
                <td className="px-6 py-4">
                  {isEdit ? (
                    <select className="px-2 py-1 border-2 border-sky-100 rounded-lg w-full text-xs" value={d.status} onChange={e => handleUpdate(d.id, 'status', e.target.value)}>
                      <option>In Catalogue</option><option>In Product</option><option>Required</option>
                    </select>
                  ) : <Badge>{d.status}</Badge>}
                </td>
                <td className="px-6 py-4"><Badge variant="blue">{d.group}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#003057]/50 backdrop-blur-md">
          <div className="bg-white rounded-[2rem] p-10 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-extrabold text-[#003057] mb-4">Push to Production?</h3>
            <p className="text-slate-500 mb-8 text-sm">Commit {Object.keys(pending).length} changes to the global lifecycle database.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowConfirm(false)} className="flex-1 py-4 font-bold text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
              <button onClick={() => { onCommit(local); setPending({}); setIsEdit(false); setShowConfirm(false); }} className="flex-1 py-4 bg-[#003057] text-white rounded-2xl font-bold shadow-lg shadow-[#003057]/20">Confirm & Push</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [role, setRole] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Authenticate
  useEffect(() => {
    const login = async () => {
      try {
        await signInAnonymously(auth);
      } catch (e) {
        console.error("Auth failed", e);
      }
    };
    login();
    return onAuthStateChanged(auth, setUser);
  }, []);

  // Listen to Firestore
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'datasets'));
    const unsubscribe = onSnapshot(q, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setDatasets(data);
      setLoading(false);
    }, (err) => {
      console.error("Firestore access error", err);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const handleCommit = async (updated) => {
    const batch = writeBatch(db);
    updated.forEach(d => {
      const ref = doc(db, 'artifacts', appId, 'public', 'data', 'datasets', d.id);
      batch.set(ref, d);
    });
    await batch.commit();
  };

  const handleSyncWorkbook = async () => {
    // This seeds the database with initial framework data
    const batch = writeBatch(db);
    const initial = [
      { id: '1', name: 'Existing Infrastructure (PIA)', commonName: 'PIA_EXT', group: 'Geospatial', bu: 'Fibre Team', status: 'In Product', description: 'Existing duct and pole infrastructure for network rollout.', usage: { 'Strategic Planning (HLP)': 'basemap', 'Physical Infrastructure Analysis (PIA)': 'analytical', 'Field Survey': 'unknown' } },
      { id: '2', name: 'Environmental Screening Zones', commonName: 'ENV_SCREEN', group: 'Environmental', bu: 'Housing Team', status: 'Required', description: 'Critical zones requiring EIA assessment for Housing developments.', usage: { 'Scoping': 'analytical', 'Environmental Impact Assessment (EIA)': 'analytical' } },
      { id: '3', name: 'Land Ownership (LR)', commonName: 'HMLR_TITLES', group: 'Geospatial', bu: 'Commercial', status: 'In Catalogue', description: 'Land registry boundary datasets.', usage: { 'Strategic Planning (HLP)': 'basemap', 'Scoping': 'basemap', 'Financing & Acquisition': 'analytical' } },
      { id: '4', name: 'Detailed Design Plans', commonName: 'DESIGN_PLANS', group: 'Geospatial', bu: 'Engineering', status: 'In Product', description: 'Civil engineering designs for the build phase.', usage: { 'Detailed Design & Engineering': 'analytical', 'Construction': 'basemap', 'Low Level Design (LLD)': 'analytical' } }
    ];
    initial.forEach(d => {
      const ref = doc(db, 'artifacts', appId, 'public', 'data', 'datasets', d.id);
      batch.set(ref, d);
    });
    await batch.commit();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4">
        <Loader2 className="animate-spin text-[#007CBA]" size={48} />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Connecting to Idox Firebase...</p>
      </div>
    );
  }
  
  if (!role) return <OverviewPage onSelectRole={setRole} datasets={datasets} />;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <header className="bg-[#003057] text-white px-10 py-5 flex justify-between items-center shadow-xl sticky top-0 z-40">
        <div className="flex items-center gap-12">
          <button onClick={() => setRole(null)} className="hover:opacity-80 transition-opacity"><IdoxLogo /></button>
          <nav className="hidden lg:flex gap-8">
            {['sales', 'data', 'leadership'].map(r => (
              <button 
                key={r} 
                onClick={() => setRole(r)} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] border-b-2 transition-all pb-1 ${role === r ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-white'}`}
              >
                {r}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-bold leading-none">Idox Administrator</div>
            <div className="text-[9px] text-slate-400 font-bold uppercase mt-1">v1.5.1</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#007CBA] flex items-center justify-center font-bold text-sm shadow-lg">ID</div>
        </div>
      </header>

      <main className="flex-1 p-8 md:p-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-10">
          <button onClick={() => setRole(null)} className="p-3 bg-white rounded-2xl text-slate-400 hover:bg-slate-50 border border-slate-100 shadow-sm transition-all">
            <ArrowLeft size={18} />
          </button>
          <div className="h-4 w-px bg-slate-300 mx-2" />
          <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">{role} Workspace</h2>
        </div>

        {role === 'sales' && <SalesWorkflow datasets={datasets} />}
        {role === 'data' && <DataWorkflow datasets={datasets} onCommit={handleCommit} onSync={handleSyncWorkbook} />}
        {role === 'leadership' && (
          <div className="bg-white p-24 rounded-[3rem] border-4 border-dashed border-slate-100 flex flex-col items-center gap-6">
             <BarChart3 size={80} className="text-slate-100" />
             <h3 className="text-3xl font-extrabold text-[#003057]">Intelligence Dashboard</h3>
             <p className="text-slate-500 max-w-lg text-center leading-relaxed font-medium">Global coverage insights and data readiness reports are being compiled.</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-100 py-8 px-12 flex justify-between items-center">
        <div className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">© 2024 Idox plc. Strategic Intelligence.</div>
        <div className="flex gap-10 text-[10px] font-black uppercase text-slate-400 tracking-widest">
          <button className="hover:text-[#007CBA]">Privacy</button>
          <button className="hover:text-[#007CBA]">Accessibility</button>
        </div>
      </footer>
    </div>
  );
}