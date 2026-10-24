import { motion } from 'framer-motion';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <nav className="border-b border-white/10 p-6 flex justify-between">
        <h1 className="text-xl font-bold tracking-tighter">AZV Radar</h1>
        <div className="space-x-4">
          <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
          <button onClick={() => setActiveTab('kanban')}>CRM Kanban</button>
        </div>
      </nav>
      
      <main className="p-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'kanban' && <Kanban />}
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-3 gap-6">
      <Card title="Leads Totais" value="1,204" />
      <Card title="Alta Oportunidade" value="86" />
      <Card title="Negociações" value="12" />
    </motion.div>
  );
}

function Card({ title, value }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="border border-white/10 p-6 rounded-xl bg-white/5">
      <h3 className="text-sm opacity-60">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}

function Kanban() {
  return <div className="text-center opacity-50 pt-20">Sistema Kanban Integrado (Em desenvolvimento)</div>;
}
