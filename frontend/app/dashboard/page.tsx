"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, Fingerprint, Database, CheckCircle } from "lucide-react";
import CyberCard from "../../components/ui/CyberCard";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Command Center</h1>
        <p className="text-cyber-muted">Overview of current investigations and system status.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Cases" value="24" icon={<Activity />} color="text-cyber-accent" />
        <StatCard title="Pending Verifications" value="12" icon={<AlertTriangle />} color="text-yellow-400" />
        <StatCard title="AI Matches Found" value="8" icon={<Fingerprint />} color="text-green-400" />
        <StatCard title="Total Evidence" value="1,492" icon={<Database />} color="text-blue-400" />
      </div>

      {/* AI Activity Stream & Recent Uploads */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CyberCard className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center"><Activity className="mr-2 w-5 h-5 text-cyber-accent"/> AI Analysis Stream</h2>
            <div className="flex items-center text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
              LIVE
            </div>
          </div>
          
          {/* Stream Items */}
          <div className="space-y-3">
            <StreamItem 
              time="10:42 AM" 
              message="High probability match (99.2%) found for Fingerprint #F-882 in Case 409."
              type="match"
            />
            <StreamItem 
              time="09:15 AM" 
              message="Suspicious activity detected in CCTV-12 (Warehouse District)."
              type="alert"
            />
            <StreamItem 
              time="08:30 AM" 
              message="Blood sample #B-201 DNA sequencing complete. Pending officer review."
              type="info"
            />
          </div>
        </CyberCard>

        <CyberCard>
          <h2 className="text-xl font-bold text-white mb-4">Recent Uploads</h2>
          <div className="space-y-4">
            <UploadItem id="#EV-992" type="Weapon" officer="K. Reynolds" status="Verified" />
            <UploadItem id="#FP-441" type="Fingerprint" officer="J. Doe" status="Pending" />
            <UploadItem id="#VD-012" type="CCTV" officer="M. Smith" status="Processing" />
          </div>
        </CyberCard>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: any) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="glass-panel p-6 rounded-xl border border-cyber-border hover:neon-glow transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg bg-cyber-dark ${color} border border-cyber-border`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-white mb-1">{value}</h3>
        <p className="text-cyber-muted text-sm uppercase tracking-wider">{title}</p>
      </div>
    </motion.div>
  );
}

function StreamItem({ time, message, type }: any) {
  const getIcon = () => {
    if (type === 'match') return <CheckCircle className="w-4 h-4 text-green-400" />;
    if (type === 'alert') return <AlertTriangle className="w-4 h-4 text-red-400" />;
    return <Activity className="w-4 h-4 text-blue-400" />;
  };

  return (
    <div className="flex items-start space-x-3 p-3 rounded bg-cyber-dark/50 border-l-2 border-cyber-accent">
      <div className="mt-1">{getIcon()}</div>
      <div>
        <p className="text-sm text-white">{message}</p>
        <span className="text-xs text-cyber-muted">{time}</span>
      </div>
    </div>
  );
}

function UploadItem({ id, type, officer, status }: any) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-cyber-dark/50 rounded transition-colors cursor-pointer border-b border-cyber-border/50 last:border-0">
      <div>
        <div className="text-sm font-bold text-white">{id}</div>
        <div className="text-xs text-cyber-muted">{type} • {officer}</div>
      </div>
      <div className={`text-xs px-2 py-1 rounded ${status === 'Verified' ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'}`}>
        {status}
      </div>
    </div>
  );
}
