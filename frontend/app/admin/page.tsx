import { Shield, Users, Database, ShieldAlert, BarChart } from "lucide-react";
import Link from "next/link";
import CyberCard from "../../components/ui/CyberCard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-text p-8">
      <header className="flex justify-between items-center mb-8 border-b border-cyber-border pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center">
            <ShieldAlert className="mr-3 w-8 h-8 text-red-500" />
            Admin Override Terminal
          </h1>
          <p className="text-cyber-muted mt-2">System-wide monitoring, user management, and security logs.</p>
        </div>
        <Link href="/dashboard" className="px-4 py-2 border border-cyber-accent text-cyber-accent rounded hover:bg-cyber-accent hover:text-cyber-dark transition-all">
          Return to Standard Dashboard
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CyberCard className="flex items-center p-4">
          <Users className="w-10 h-10 text-blue-400 mr-4" />
          <div>
            <div className="text-2xl font-bold text-white">142</div>
            <div className="text-xs text-cyber-muted uppercase tracking-widest">Active Officers</div>
          </div>
        </CyberCard>
        <CyberCard className="flex items-center p-4 border-yellow-500/50">
          <Shield className="w-10 h-10 text-yellow-400 mr-4" />
          <div>
            <div className="text-2xl font-bold text-yellow-400">7</div>
            <div className="text-xs text-cyber-muted uppercase tracking-widest">Pending Approvals</div>
          </div>
        </CyberCard>
        <CyberCard className="flex items-center p-4">
          <Database className="w-10 h-10 text-green-400 mr-4" />
          <div>
            <div className="text-2xl font-bold text-white">4.2 TB</div>
            <div className="text-xs text-cyber-muted uppercase tracking-widest">Storage Used</div>
          </div>
        </CyberCard>
        <CyberCard className="flex items-center p-4 border-red-500/50">
          <BarChart className="w-10 h-10 text-red-400 mr-4" />
          <div>
            <div className="text-2xl font-bold text-red-400">3</div>
            <div className="text-xs text-cyber-muted uppercase tracking-widest">Security Alerts</div>
          </div>
        </CyberCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CyberCard>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2">Pending Officer Clearances</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-cyber-dark p-3 rounded border border-cyber-border">
              <div>
                <div className="font-bold text-white">Sarah Jenkins</div>
                <div className="text-xs text-cyber-muted">Badge: #8812 • sarah.j@nexus.gov</div>
              </div>
              <div className="space-x-2">
                <button className="px-3 py-1 bg-green-900/50 text-green-400 rounded text-xs font-bold hover:bg-green-500 hover:text-white transition-colors">APPROVE</button>
                <button className="px-3 py-1 bg-red-900/50 text-red-400 rounded text-xs font-bold hover:bg-red-500 hover:text-white transition-colors">DENY</button>
              </div>
            </div>
          </div>
        </CyberCard>

        <CyberCard>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2">Recent System Activity</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-cyber-muted">
              <span>[14:02:11] Officer K. accessed CAS-409 Evidence</span>
              <span>10.0.4.22</span>
            </div>
            <div className="flex justify-between text-cyber-muted">
              <span>[13:45:00] AI Model AFIS_v4.2 successfully updated</span>
              <span>System</span>
            </div>
            <div className="flex justify-between text-red-400">
              <span>[12:10:05] FAILED LOGIN ATTEMPT (Badge #9999)</span>
              <span>192.168.1.1</span>
            </div>
          </div>
        </CyberCard>
      </div>
    </div>
  );
}
