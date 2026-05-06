import React, { useEffect, useMemo, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  DatabaseZap,
  Filter,
  Layers3,
  Loader2,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const firebaseConfig = {
  apiKey: 'AIzaSyBYziumFk_ONDE7tVtdLFyV3L1yMGnzXj0',
  authDomain: 'idox-lifecycle.firebaseapp.com',
  projectId: 'idox-lifecycle',
  storageBucket: 'idox-lifecycle.firebasestorage.app',
  messagingSenderId: '478383450565',
  appId: '1:478383450565:web:f0322a22dd601404d343ac',
  measurementId: 'G-CZL52LFLEF',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const appId = 'idox-lifecycle-hub';

const GOOGLE_SHEET_ID = '17MCi7epIJdxac0xzV2QTGGBUoL4Hi11zhzrbeRtRJXg';
const EDIT_PASSWORD = 'test';

const INDUSTRY_STAGES = {
  Fibre: [
    'Strategic Planning (HLP)',
    'High-Level Design (HLD)',
    'Physical Infrastructure Analysis (PIA)',
    'Field Survey',
    'Low Level Design (LLD)',
    'Civils & Build',
    'As-Built',
  ],
  Housing: [
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
    'Post-Construction Monitoring',
  ],
  Solar: ['Scoping', 'Feasibility', 'Environmental Screening', 'Approvals', 'Construction'],
  'Onshore Wind': ['Scoping', 'Feasibility', 'EIA', 'Approvals', 'Construction'],
  'Offshore Wind': ['Scoping', 'Feasibility', 'EIA', 'Approvals', 'Detailed Design & Engineering'],
};

const BUSINESS_UNITS = ['Emapsite', 'LandHawk', 'ThinkWhere', 'Backlog'];

const STATUS_OPTIONS = ['all', 'catalogue', 'product', 'desired-gap', 'sme-input', 'client-request'];
const ACCESS_OPTIONS = ['all', 'open', 'proprietary', 'mixed', 'unknown'];

function normalizeValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeBusinessUnit(rawValue, supplier = '', status = '') {
  const raw = `${normalizeValue(rawValue)} ${normalizeValue(supplier)} ${normalizeValue(status)}`.toLowerCase();
  if (raw.includes('thinkwhere')) return 'ThinkWhere';
  if (raw.includes('landhawk')) return 'LandHawk';
  if (raw.includes('emapsite') || raw.includes('e map site') || raw.includes('emap')) return 'Emapsite';
  return 'Backlog';
}

function normalizeStatus(rawValue) {
  const raw = normalizeValue(rawValue).toLowerCase();
  if (raw.includes('product')) return 'product';
  if (raw.includes('sme')) return 'sme-input';
  if (raw.includes('client')) return 'client-request';
  if (raw.includes('gap') || raw.includes('desired') || raw.includes('candidate')) return 'desired-gap';
  return 'catalogue';
}

function normalizeAccess(rawValue) {
  const raw = normalizeValue(rawValue).toLowerCase();
  if (!raw) return 'unknown';
  if (raw.includes('mixed')) return 'mixed';
  if (raw.includes('open')) return 'open';
  if (raw.includes('proprietary') || raw.includes('licensed') || raw.includes('paid')) return 'proprietary';
  return 'unknown';
}

function normalizeUsageValue(rawValue) {
  const raw = normalizeValue(rawValue).toLowerCase();
  if (raw === 'a' || raw.includes('analytical')) return 'A';
  if (raw === 'b' || raw.includes('basemap') || raw.includes('basemapping')) return 'B';
  if (raw === 'd' || raw.includes('descriptive') || raw.includes('context')) return 'D';
  if (raw === '?' || raw === 'u' || raw.includes('unknown')) return 'U';
  return '';
}

function normalizeDataset(input, index = 0) {
  const status = normalizeStatus(
    input.status ||
      input.Status ||
      input.sourceStatus ||
      input['Source Status'] ||
      input['Source/Status'] ||
      input.catalogueStatus,
  );
  const supplier = normalizeValue(input.supplier || input.Supplier || input.Provider);
  const businessUnit = normalizeBusinessUnit(
    input.businessUnit || input.BusinessUnit || input.BU || input.bu || input.Company,
    supplier,
    status,
  );
  const openProprietary = normalizeAccess(
    input.openProprietary ||
      input['Open / proprietary'] ||
      input['Open/Proprietary'] ||
      input.Access ||
      input.Licensing,
  );
  const usage = {};

  Object.entries(input || {}).forEach(([key, value]) => {
    const usageValue = normalizeUsageValue(value);
    if (usageValue && Object.values(INDUSTRY_STAGES).some((stages) => stages.includes(key))) {
      usage[key] = usageValue;
    }
  });

  return {
    id: input.id || `dataset-${index}`,
    rawName: normalizeValue(input.name || input.Name || input.Dataset || input.Dataset_Name),
    commonName: normalizeValue(input.commonName || input['Common Name'] || input.common_name) || 'Untitled dataset',
    group: normalizeValue(input.group || input.Group || input['Data Group']) || 'General',
    businessUnit,
    supplier: supplier || 'Not set',
    description:
      normalizeValue(input.description || input.Description) ||
      'Governed geospatial record managed for lifecycle use across products and project stages.',
    coverage: normalizeValue(input.coverage || input.Coverage) || 'Not stated',
    status,
    openProprietary,
    usage,
    stageCount: Object.keys(usage).length,
    updatedAt: input.updatedAt || null,
  };
}

function parseCsv(text) {
  const rows = [];
  let current = '';
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      row.push(current);
      current = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(current);
      if (row.some((cell) => cell.trim() !== '')) {
        rows.push(row);
      }
      row = [];
      current = '';
      continue;
    }

    current += char;
  }

  if (current || row.length) {
    row.push(current);
    rows.push(row);
  }

  if (rows.length === 0) return [];
  const headers = rows[0].map((header) => header.trim());

  return rows.slice(1).map((values) =>
    headers.reduce((record, header, index) => {
      record[header] = values[index]?.trim() ?? '';
      return record;
    }, {}),
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="h-5 w-5 rotate-45 rounded-[4px] border-[3px] border-[#156082]" />
      </div>
      <div className="leading-none">
        <div className="text-[11px] font-black uppercase tracking-[0.32em] text-[#156082]">Idox Geospatial</div>
        <div className="mt-2 text-2xl font-black tracking-tight text-[#0E2841]">Data Lifecycles MVP</div>
      </div>
    </div>
  );
}

function ShellCard({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(14,40,65,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function StatCard({ label, value, note, icon: Icon }) {
  return (
    <ShellCard className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">{label}</div>
          <div className="mt-3 text-3xl font-black tracking-tight text-[#0E2841]">{value}</div>
          {note ? <div className="mt-2 text-sm font-medium text-slate-500">{note}</div> : null}
        </div>
        <div className="rounded-2xl bg-[#F4F8FB] p-3 text-[#156082]">
          <Icon size={20} />
        </div>
      </div>
    </ShellCard>
  );
}

function StatusBadge({ status }) {
  const labelMap = {
    catalogue: 'Catalogue',
    product: 'Product',
    'desired-gap': 'Desired / gap',
    'sme-input': 'SME input',
    'client-request': 'Client request',
  };

  const styleMap = {
    catalogue: 'border-[#D4E6EF] bg-[#F4F8FB] text-[#0F4761]',
    product: 'border-[#D9F0DD] bg-[#F1FBF3] text-[#196B24]',
    'desired-gap': 'border-[#F7D7C4] bg-[#FFF4EE] text-[#E97132]',
    'sme-input': 'border-[#E6E0F3] bg-[#F7F3FD] text-[#6A4FB3]',
    'client-request': 'border-[#F2D8DB] bg-[#FFF2F4] text-[#A63A50]',
  };

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${styleMap[status] || styleMap.catalogue}`}>
      {labelMap[status] || status}
    </span>
  );
}

function AccessBadge({ access }) {
  const labelMap = {
    open: 'Open',
    proprietary: 'Proprietary',
    mixed: 'Mixed',
    unknown: 'Unknown',
  };

  return (
    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600">
      {labelMap[access] || access}
    </span>
  );
}

function UsageMarker({ value }) {
  const styles = {
    A: 'bg-[#196B24] text-white',
    B: 'bg-[#0F9ED5] text-white',
    D: 'bg-[#156082] text-white',
    U: 'bg-[#E97132] text-white',
  };

  return value ? (
    <div className={`flex h-8 w-8 items-center justify-center rounded-xl text-[11px] font-black ${styles[value]}`}>
      {value}
    </div>
  ) : (
    <div className="h-8 w-8 rounded-xl border border-slate-200 bg-slate-50" />
  );
}

function PasswordPrompt({ onClose, onSubmit, error }) {
  const [password, setPassword] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-7 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[#156082]">Edit access</div>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-[#0E2841]">Unlock catalogue editing</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
          >
            <X size={16} />
          </button>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          This MVP keeps edit mode behind a simple password so the governed catalogue view stays read-only by default.
        </p>
        <div className="mt-6">
          <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">Password</label>
          <input
            autoFocus
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#156082] focus:ring-4 focus:ring-[#156082]/10"
            placeholder="Enter edit password"
          />
          {error ? <div className="mt-3 text-sm font-semibold text-rose-600">{error}</div> : null}
        </div>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => onSubmit(password)}
            className="rounded-full bg-[#156082] px-5 py-2.5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#0F4761]"
          >
            Unlock editing
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-black uppercase tracking-[0.16em] text-slate-600 transition hover:border-slate-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function CatalogueWorkspace({ datasets, onSync }) {
  const [industry, setIndustry] = useState('Housing');
  const [search, setSearch] = useState('');
  const [dataGroup, setDataGroup] = useState('all');
  const [unit, setUnit] = useState('all');
  const [stage, setStage] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [accessFilter, setAccessFilter] = useState('all');
  const [sortBy, setSortBy] = useState('alpha-asc');
  const [selectedId, setSelectedId] = useState('');
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [editUnlocked, setEditUnlocked] = useState(false);
  const [drafts, setDrafts] = useState({});

  const groups = useMemo(() => Array.from(new Set(datasets.map((dataset) => dataset.group))).sort(), [datasets]);

  const filteredDatasets = useMemo(() => {
    const records = datasets.filter((dataset) => {
      const haystack = [
        dataset.commonName,
        dataset.rawName,
        dataset.supplier,
        dataset.group,
        dataset.businessUnit,
        dataset.description,
      ]
        .join(' ')
        .toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      const matchesGroup = dataGroup === 'all' || dataset.group === dataGroup;
      const matchesUnit = unit === 'all' || dataset.businessUnit === unit;
      const matchesStage = stage === 'all' || Boolean(dataset.usage?.[stage]);
      const matchesStatus = statusFilter === 'all' || dataset.status === statusFilter;
      const matchesAccess = accessFilter === 'all' || dataset.openProprietary === accessFilter;
      return matchesSearch && matchesGroup && matchesUnit && matchesStage && matchesStatus && matchesAccess;
    });

    return records.sort((left, right) => {
      if (sortBy === 'alpha-desc') {
        return right.commonName.localeCompare(left.commonName);
      }
      if (sortBy === 'stages-desc') {
        return right.stageCount - left.stageCount || left.commonName.localeCompare(right.commonName);
      }
      if (sortBy === 'status') {
        return left.status.localeCompare(right.status) || left.commonName.localeCompare(right.commonName);
      }
      return left.commonName.localeCompare(right.commonName);
    });
  }, [accessFilter, dataGroup, datasets, search, sortBy, stage, statusFilter, unit]);

  const selectedDataset = useMemo(() => {
    return filteredDatasets.find((dataset) => dataset.id === selectedId) || filteredDatasets[0] || null;
  }, [filteredDatasets, selectedId]);

  const selectedRecord = selectedDataset ? drafts[selectedDataset.id] || selectedDataset : null;
  const pendingChanges = Object.keys(drafts).length;

  useEffect(() => {
    if (selectedDataset && selectedDataset.id !== selectedId) {
      setSelectedId(selectedDataset.id);
    }
  }, [selectedDataset, selectedId]);

  useEffect(() => {
    setStage('all');
  }, [industry]);

  const summary = useMemo(() => {
    const openCount = datasets.filter((dataset) => dataset.openProprietary === 'open').length;
    const proprietaryCount = datasets.filter((dataset) => dataset.openProprietary === 'proprietary').length;
    const backlogCount = datasets.filter((dataset) => dataset.businessUnit === 'Backlog').length;

    return { openCount, proprietaryCount, backlogCount };
  }, [datasets]);

  async function handleSync() {
    setSyncing(true);
    setSyncError('');
    try {
      await onSync();
    } catch (error) {
      console.error(error);
      setSyncError('Sync failed. Make sure the Google Sheet can be accessed as CSV.');
    } finally {
      setSyncing(false);
    }
  }

  function requestEditMode() {
    if (editUnlocked) {
      setEditUnlocked(false);
      setDrafts({});
      return;
    }
    setPasswordError('');
    setShowPasswordPrompt(true);
  }

  function confirmPassword(password) {
    if (password === EDIT_PASSWORD) {
      setEditUnlocked(true);
      setShowPasswordPrompt(false);
      setPasswordError('');
      return;
    }
    setPasswordError('Incorrect password. Use the agreed MVP edit password.');
  }

  function updateDraft(field, value) {
    if (!selectedRecord) return;
    setDrafts((current) => ({
      ...current,
      [selectedRecord.id]: {
        ...selectedRecord,
        [field]: value,
      },
    }));
  }

  function commitDrafts() {
    if (pendingChanges === 0) return;
    setDrafts({});
  }

  return (
    <div className="space-y-8">
      <ShellCard className="p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[#156082]">Data user</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0E2841]">Catalogue workspace</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Browse the governed non-client catalogue, filter it the way a data steward actually works, and only
              unlock editing when you explicitly need to improve the record.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSync}
              disabled={syncing}
              className="inline-flex items-center gap-2 rounded-full bg-[#156082] px-5 py-2.5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#0F4761] disabled:opacity-60"
            >
              {syncing ? <Loader2 className="animate-spin" size={16} /> : <RefreshCw size={16} />}
              {syncing ? 'Syncing data' : 'Data sync'}
            </button>
            <button
              type="button"
              onClick={requestEditMode}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-[0.16em] transition ${
                editUnlocked
                  ? 'border-[#E97132] bg-[#FFF4EE] text-[#E97132]'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <LockKeyhole size={15} />
              {editUnlocked ? 'Lock editing' : 'Edit mode'}
            </button>
            {pendingChanges > 0 ? (
              <button
                type="button"
                onClick={commitDrafts}
                className="inline-flex items-center gap-2 rounded-full border border-[#196B24] bg-[#F1FBF3] px-5 py-2.5 text-sm font-black uppercase tracking-[0.16em] text-[#196B24]"
              >
                <CheckCircle2 size={15} />
                Commit {pendingChanges} change{pendingChanges === 1 ? '' : 's'}
              </button>
            ) : null}
          </div>
        </div>
        {syncError ? (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
            <AlertTriangle size={14} />
            {syncError}
          </div>
        ) : null}

        <div className="mt-7 grid gap-4 xl:grid-cols-6">
          <FilterField label="Industry">
            <select
              value={industry}
              onChange={(event) => setIndustry(event.target.value)}
              className="field-control"
            >
              {Object.keys(INDUSTRY_STAGES).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Common name" className="xl:col-span-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="field-control pl-10"
                placeholder="Search common name, supplier, raw name, or description"
              />
            </div>
          </FilterField>
          <FilterField label="Data group">
            <select value={dataGroup} onChange={(event) => setDataGroup(event.target.value)} className="field-control">
              <option value="all">All data groups</option>
              {groups.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Business unit">
            <select value={unit} onChange={(event) => setUnit(event.target.value)} className="field-control">
              <option value="all">All business units</option>
              {BUSINESS_UNITS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
          <FilterField label="Lifecycle stage">
            <select value={stage} onChange={(event) => setStage(event.target.value)} className="field-control">
              <option value="all">All lifecycle stages</option>
              {INDUSTRY_STAGES[industry].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FilterField>
        </div>
      </ShellCard>

      <div className="grid gap-5 xl:grid-cols-4">
        <StatCard label="Visible records" value={filteredDatasets.length} note="Filtered catalogue items" icon={Database} />
        <StatCard label="Open datasets" value={summary.openCount} note="Clearly marked as open" icon={ShieldCheck} />
        <StatCard label="Proprietary datasets" value={summary.proprietaryCount} note="Licensed or supplier-managed" icon={Layers3} />
        <StatCard label="Backlog items" value={summary.backlogCount} note="Not yet tied to a platform company" icon={Sparkles} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <ShellCard className="overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[#156082]">Catalogue records</div>
              <div className="mt-2 text-sm text-slate-500">Wider records table with access type, company ownership, and faster governance filters.</div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <FilterField label="Access type" compact>
                <select value={accessFilter} onChange={(event) => setAccessFilter(event.target.value)} className="field-control">
                  {ACCESS_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option === 'all' ? 'All types' : option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              </FilterField>
              <FilterField label="Status" compact>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="field-control">
                  {STATUS_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option === 'all'
                        ? 'All statuses'
                        : option === 'desired-gap'
                          ? 'Desired / gap'
                          : option === 'sme-input'
                            ? 'SME input'
                            : option === 'client-request'
                              ? 'Client request'
                              : option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              </FilterField>
              <FilterField label="Sort" compact>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="field-control">
                  <option value="alpha-asc">Alphabetical A-Z</option>
                  <option value="alpha-desc">Alphabetical Z-A</option>
                  <option value="stages-desc">Most stages first</option>
                  <option value="status">Status</option>
                </select>
              </FilterField>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                  <th className="px-6 py-4">Common name</th>
                  <th className="px-6 py-4">Raw name</th>
                  <th className="px-6 py-4">Data group</th>
                  <th className="px-6 py-4">Supplier</th>
                  <th className="px-6 py-4">Business unit</th>
                  <th className="px-6 py-4">Open / proprietary</th>
                  <th className="px-6 py-4 text-center">Stages</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDatasets.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-20 text-center text-sm font-semibold text-slate-400">
                      No records match the current filters.
                    </td>
                  </tr>
                ) : (
                  filteredDatasets.map((dataset) => {
                    const isSelected = selectedRecord?.id === dataset.id;
                    const hasDraft = Boolean(drafts[dataset.id]);

                    return (
                      <tr
                        key={dataset.id}
                        onClick={() => setSelectedId(dataset.id)}
                        className={`cursor-pointer transition ${
                          isSelected ? 'bg-[#F4F8FB]' : 'hover:bg-slate-50'
                        } ${hasDraft ? 'ring-1 ring-inset ring-[#E97132]/30' : ''}`}
                      >
                        <td className="px-6 py-5 align-top">
                          <div className="text-base font-black tracking-tight text-[#0E2841]">{dataset.commonName}</div>
                          <div className="mt-1 text-sm text-slate-500">{dataset.description.slice(0, 78)}{dataset.description.length > 78 ? '…' : ''}</div>
                        </td>
                        <td className="px-6 py-5 align-top text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {dataset.rawName || 'Not supplied'}
                        </td>
                        <td className="px-6 py-5 align-top text-sm font-semibold text-slate-600">{dataset.group}</td>
                        <td className="px-6 py-5 align-top text-sm font-semibold text-slate-600">{dataset.supplier}</td>
                        <td className="px-6 py-5 align-top text-sm font-semibold text-slate-600">{dataset.businessUnit}</td>
                        <td className="px-6 py-5 align-top">
                          <AccessBadge access={dataset.openProprietary} />
                        </td>
                        <td className="px-6 py-5 align-top text-center text-sm font-black text-[#0E2841]">{dataset.stageCount}</td>
                        <td className="px-6 py-5 align-top">
                          <StatusBadge status={dataset.status} />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </ShellCard>

        <ShellCard className="sticky top-24 self-start p-7">
          {selectedRecord ? (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[#156082]">
                    {editUnlocked ? 'Editable record' : 'Record detail'}
                  </div>
                  <h3 className="mt-3 text-3xl font-black tracking-tight text-[#0E2841]">{selectedRecord.commonName}</h3>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{selectedRecord.rawName || 'No raw source name supplied'}</div>
                </div>
                <StatusBadge status={selectedRecord.status} />
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">{selectedRecord.description}</p>

              {editUnlocked ? (
                <div className="mt-7 space-y-4">
                  <EditableField label="Common name">
                    <input
                      value={selectedRecord.commonName}
                      onChange={(event) => updateDraft('commonName', event.target.value)}
                      className="field-control"
                    />
                  </EditableField>
                  <EditableField label="Description">
                    <textarea
                      value={selectedRecord.description}
                      onChange={(event) => updateDraft('description', event.target.value)}
                      className="field-control min-h-[110px]"
                    />
                  </EditableField>
                  <div className="grid gap-4 md:grid-cols-2">
                    <EditableField label="Data group">
                      <input value={selectedRecord.group} onChange={(event) => updateDraft('group', event.target.value)} className="field-control" />
                    </EditableField>
                    <EditableField label="Supplier">
                      <input value={selectedRecord.supplier} onChange={(event) => updateDraft('supplier', event.target.value)} className="field-control" />
                    </EditableField>
                    <EditableField label="Business unit">
                      <select value={selectedRecord.businessUnit} onChange={(event) => updateDraft('businessUnit', event.target.value)} className="field-control">
                        {BUSINESS_UNITS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </EditableField>
                    <EditableField label="Open / proprietary">
                      <select value={selectedRecord.openProprietary} onChange={(event) => updateDraft('openProprietary', event.target.value)} className="field-control">
                        {ACCESS_OPTIONS.filter((option) => option !== 'all').map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </option>
                        ))}
                      </select>
                    </EditableField>
                  </div>
                </div>
              ) : (
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <DetailItem label="Data group" value={selectedRecord.group} />
                  <DetailItem label="Supplier" value={selectedRecord.supplier} />
                  <DetailItem label="Business unit" value={selectedRecord.businessUnit} />
                  <DetailItem label="Coverage" value={selectedRecord.coverage} />
                  <DetailItem label="Access type" value={selectedRecord.openProprietary} />
                  <DetailItem label="Status" value={selectedRecord.status.replace('-', ' ')} />
                </div>
              )}

              <div className="mt-8 border-t border-slate-100 pt-7">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Lifecycle touchpoints</div>
                    <div className="mt-2 text-sm font-semibold text-[#0E2841]">{industry} stages</div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                    <Legend label="A" description="Analytical" />
                    <Legend label="B" description="Basemapping" />
                    <Legend label="D" description="Descriptive" />
                    <Legend label="U" description="Unknown" />
                  </div>
                </div>
                <div className="space-y-3">
                  {INDUSTRY_STAGES[industry].map((stageName) => (
                    <div key={stageName} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <div className="pr-4 text-sm font-semibold text-slate-600">{stageName}</div>
                      <UsageMarker value={selectedRecord.usage?.[stageName]} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="py-16 text-center">
              <Database className="mx-auto text-slate-200" size={56} />
              <div className="mt-4 text-sm font-semibold text-slate-400">Select a record to inspect it.</div>
            </div>
          )}
        </ShellCard>
      </div>

      {showPasswordPrompt ? (
        <PasswordPrompt
          error={passwordError}
          onClose={() => {
            setPasswordError('');
            setShowPasswordPrompt(false);
          }}
          onSubmit={confirmPassword}
        />
      ) : null}
    </div>
  );
}

function FilterField({ label, children, className = '', compact = false }) {
  return (
    <div className={className}>
      <label className={`mb-2 block font-black uppercase tracking-[0.18em] text-slate-400 ${compact ? 'text-[10px]' : 'text-[11px]'}`}>{label}</label>
      {children}
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div>
      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">{label}</div>
      <div className="mt-2 text-sm font-semibold capitalize text-[#0E2841]">{value}</div>
    </div>
  );
}

function EditableField({ label, children }) {
  return (
    <div className="rounded-3xl border border-[#F7D7C4] bg-[#FFF8F4] p-4">
      <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">{label}</label>
      {children}
    </div>
  );
}

function Legend({ label, description }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
      <span className="font-black text-[#0E2841]">{label}</span>
      <span>{description}</span>
    </span>
  );
}

function OverviewPage({ datasets, onOpenRole }) {
  const totalStages = Object.values(INDUSTRY_STAGES).reduce((count, stages) => count + stages.length, 0);
  const groupedCounts = useMemo(
    () => ({
      backlog: datasets.filter((dataset) => dataset.businessUnit === 'Backlog').length,
      open: datasets.filter((dataset) => dataset.openProprietary === 'open').length,
      governed: datasets.filter((dataset) => dataset.status === 'catalogue').length,
    }),
    [datasets],
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <ShellCard className="p-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[#156082]">Overview</div>
            <h1 className="mt-3 text-5xl font-black tracking-tight text-[#0E2841]">
              Governed lifecycle insight for sales, data, and leadership teams.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-500">
              This Firebase-backed MVP turns the workbook into a working internal product. It helps teams understand
              which geospatial datasets matter at each stage, where the governed catalogue is strong, and where the
              next data gaps should be addressed.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onOpenRole('sales')}
              className="rounded-full bg-[#156082] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#0F4761]"
            >
              Open sales view
            </button>
            <button
              type="button"
              onClick={() => onOpenRole('data')}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-slate-700 transition hover:border-slate-300"
            >
              Open data view
            </button>
            <button
              type="button"
              onClick={() => onOpenRole('leadership')}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-slate-700 transition hover:border-slate-300"
            >
              Open leadership view
            </button>
          </div>
        </ShellCard>

        <div className="grid gap-5">
          <StatCard label="Synced records" value={datasets.length} note="Live from Firestore" icon={DatabaseZap} />
          <StatCard label="Lifecycle stages modelled" value={totalStages} note="Across current industry templates" icon={Layers3} />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <WorkspaceCard
          eyebrow="Sales"
          title="Stage-first answers"
          description="Built for faster client conversations, with lifecycle touchpoints and clearer role meaning per stage."
          icon={Users}
          onClick={() => onOpenRole('sales')}
        />
        <WorkspaceCard
          eyebrow="Data"
          title="Governed catalogue workspace"
          description="Search, filter, inspect, and improve records with edit access deliberately controlled."
          icon={Database}
          onClick={() => onOpenRole('data')}
        />
        <WorkspaceCard
          eyebrow="Leadership"
          title="Portfolio gap insight"
          description="See where catalogue value is strongest and which candidate data should be prioritised next."
          icon={BarChart3}
          onClick={() => onOpenRole('leadership')}
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <StatCard label="Catalogue records" value={groupedCounts.governed} note="Currently mapped as governed" icon={ShieldCheck} />
        <StatCard label="Open records" value={groupedCounts.open} note="Available without proprietary licensing" icon={Sparkles} />
        <StatCard label="Backlog candidates" value={groupedCounts.backlog} note="Not yet assigned to a platform company" icon={Filter} />
      </div>
    </div>
  );
}

function WorkspaceCard({ eyebrow, title, description, icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left"
    >
      <ShellCard className="h-full p-6 transition hover:-translate-y-0.5 hover:border-[#0F9ED5]">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-2xl bg-[#F4F8FB] p-3 text-[#156082]">
            <Icon size={20} />
          </div>
          <ArrowRight size={18} className="text-slate-300" />
        </div>
        <div className="mt-6 text-[11px] font-black uppercase tracking-[0.24em] text-[#156082]">{eyebrow}</div>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-[#0E2841]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
      </ShellCard>
    </button>
  );
}

function PlaceholderWorkspace({ title, description }) {
  return (
    <ShellCard className="p-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#F4F8FB] text-[#156082]">
          <BarChart3 size={32} />
        </div>
        <h2 className="mt-6 text-4xl font-black tracking-tight text-[#0E2841]">{title}</h2>
        <p className="mt-4 text-base leading-8 text-slate-500">{description}</p>
      </div>
    </ShellCard>
  );
}

export default function App() {
  const [role, setRole] = useState('overview');
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    signInAnonymously(auth).catch(console.error);
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    if (!user) return undefined;
    const datasetsQuery = query(collection(db, 'artifacts', appId, 'public', 'data', 'datasets'));

    return onSnapshot(
      datasetsQuery,
      (snapshot) => {
        const nextDatasets = snapshot.docs.map((docSnapshot, index) =>
          normalizeDataset({ id: docSnapshot.id, ...docSnapshot.data() }, index),
        );
        setDatasets(nextDatasets);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      },
    );
  }, [user]);

  async function handleSync() {
    const response = await fetch(`https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=csv`);
    if (!response.ok) {
      throw new Error(`Sheet sync failed: ${response.status}`);
    }

    const csvText = await response.text();
    const rows = parseCsv(csvText);
    const batch = writeBatch(db);

    rows.forEach((row, index) => {
      const normalised = normalizeDataset(row, index);
      if (!normalised.rawName && !normalised.commonName) return;

      const ref = doc(db, 'artifacts', appId, 'public', 'data', 'datasets', `ds-${index}`);
      batch.set(ref, {
        name: normalised.rawName,
        commonName: normalised.commonName,
        group: normalised.group,
        businessUnit: normalised.businessUnit,
        supplier: normalised.supplier,
        description: normalised.description,
        coverage: normalised.coverage,
        status: normalised.status,
        openProprietary: normalised.openProprietary,
        usage: normalised.usage,
        updatedAt: serverTimestamp(),
      });
    });

    await batch.commit();
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#F7FAFC]">
        <div className="flex h-20 w-20 items-center justify-center rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <Loader2 className="animate-spin text-[#156082]" size={28} />
        </div>
        <div className="text-center">
          <div className="text-[11px] font-black uppercase tracking-[0.28em] text-[#156082]">Idox Geospatial</div>
          <div className="mt-3 text-2xl font-black tracking-tight text-[#0E2841]">Establishing secure session</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-left text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1880px] flex-col gap-6 px-6 py-5 xl:px-10">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <LogoMark />
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-3 text-right">
              <div className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">Current view</div>
              <div className="mt-2 text-base font-black capitalize tracking-tight text-[#0E2841]">{role}</div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3">
            {['overview', 'sales', 'data', 'leadership'].map((navRole) => (
              <button
                key={navRole}
                type="button"
                onClick={() => setRole(navRole)}
                className={`rounded-full px-5 py-2.5 text-sm font-black uppercase tracking-[0.16em] transition ${
                  role === navRole
                    ? 'bg-[#156082] text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {navRole}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1880px] px-6 py-8 xl:px-10">
        {role === 'overview' ? <OverviewPage datasets={datasets} onOpenRole={setRole} /> : null}
        {role === 'data' ? <CatalogueWorkspace datasets={datasets} onSync={handleSync} /> : null}
        {role === 'sales' ? (
          <PlaceholderWorkspace
            title="Sales stage finder"
            description="The cleaned shell and data model are now in place. The next pass can bring the lifecycle touchpoint and role-led sales views back into this Firebase-backed app using the same governed records."
          />
        ) : null}
        {role === 'leadership' ? (
          <PlaceholderWorkspace
            title="Leadership insight"
            description="This surface is ready for prioritisation and gap analysis once the stage-first catalogue mappings are fully reintroduced from the workbook model."
          />
        ) : null}
      </main>
    </div>
  );
}
