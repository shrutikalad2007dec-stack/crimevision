import { Shield, Fingerprint, Activity, Video, Database, LogOut } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-cyber-dark text-cyber-text">
      {/* Sidebar */}
      <aside className="w-64 glass-panel border-r border-cyber-border flex flex-col hidden md:flex">
        <div className="p-6 flex items-center space-x-3 border-b border-cyber-border">
          <Shield className="w-8 h-8 text-cyber-accent" />
          <span className="font-bold text-lg neon-text tracking-wider">NEXUS</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <SidebarItem href="/dashboard" icon={<Activity />} label="Overview" />
          <SidebarItem href="/dashboard/fingerprints" icon={<Fingerprint />} label="Fingerprints" />
          <SidebarItem href="/dashboard/blood-samples" icon={<Database />} label="Blood Samples" />
          <SidebarItem href="/dashboard/cctv" icon={<Video />} label="CCTV Footage" />
          <SidebarItem href="/dashboard/evidence" icon={<Shield />} label="Physical Evidence" />
        </nav>

        <div className="p-4 border-t border-cyber-border">
          <button className="flex items-center space-x-3 text-cyber-muted hover:text-red-400 transition-colors w-full p-3 rounded-lg hover:bg-red-900/20">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 glass-panel border-b border-cyber-border flex items-center justify-between px-8 z-10">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Search databases..." 
              className="w-full max-w-md bg-cyber-dark/50 border border-cyber-border rounded-full px-6 py-2 focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">Officer K.</div>
              <div className="text-xs text-cyber-accent">ID: #9942</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-cyber-accent/20 border border-cyber-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-cyber-accent" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyber-accent/10 hover:text-cyber-accent text-cyber-muted transition-all group">
      <div className="group-hover:neon-glow rounded p-1 transition-all">{icon}</div>
      <span className="font-medium tracking-wide">{label}</span>
    </Link>
  );
}
