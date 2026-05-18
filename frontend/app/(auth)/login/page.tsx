"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [badgeId, setBadgeId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for now
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-cyber-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-panel p-8 rounded-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyber-accent rounded-full filter blur-[80px] opacity-20"></div>

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-cyber-dark border border-cyber-accent flex items-center justify-center mb-4 neon-glow">
            <Shield className="w-8 h-8 text-cyber-accent" />
          </div>
          <h2 className="text-2xl font-bold tracking-widest text-white">SYSTEM LOGIN</h2>
          <p className="text-sm text-cyber-muted mt-2">Authorized Personnel Only</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <div>
            <label className="block text-xs font-semibold text-cyber-accent mb-2 tracking-widest uppercase">Badge Number</label>
            <input 
              type="text" 
              className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
              placeholder="e.g. 9942"
              value={badgeId}
              onChange={(e) => setBadgeId(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-xs font-semibold text-cyber-accent mb-2 tracking-widest uppercase">Password Clearance</label>
            <input 
              type="password" 
              className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-cyber-accent text-cyber-dark font-bold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] flex items-center justify-center space-x-2 transition-all"
          >
            <Lock className="w-5 h-5" />
            <span>AUTHENTICATE</span>
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-cyber-muted">
          Don't have an access clearance?{" "}
          <Link href="/signup" className="text-cyber-accent hover:underline">Request Access</Link>
        </div>
      </div>
    </div>
  );
}
