"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    badgeNumber: "",
    email: "",
    password: ""
  });
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    alert("Request submitted. Pending admin approval.");
    router.push("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-cyber-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-panel p-8 rounded-2xl relative overflow-hidden mt-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-cyber-dark border border-cyber-accent flex items-center justify-center mb-4 neon-glow">
            <UserPlus className="w-8 h-8 text-cyber-accent" />
          </div>
          <h2 className="text-2xl font-bold tracking-widest text-white text-center">REQUEST CLEARANCE</h2>
          <p className="text-sm text-cyber-muted mt-2 text-center">New officers must be approved by admin</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4 relative z-10">
          <div>
            <label className="block text-xs font-semibold text-cyber-accent mb-1 tracking-widest uppercase">Full Name</label>
            <input 
              type="text" name="name"
              className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
              placeholder="Officer Name"
              onChange={handleChange} required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-cyber-accent mb-1 tracking-widest uppercase">Badge Number</label>
            <input 
              type="text" name="badgeNumber"
              className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
              placeholder="e.g. 9942"
              onChange={handleChange} required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-cyber-accent mb-1 tracking-widest uppercase">Email</label>
            <input 
              type="email" name="email"
              className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
              placeholder="officer@nexus.gov"
              onChange={handleChange} required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-cyber-accent mb-1 tracking-widest uppercase">Password</label>
            <input 
              type="password" name="password"
              className="w-full bg-cyber-dark/50 border border-cyber-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-accent focus:neon-glow transition-all"
              placeholder="••••••••"
              onChange={handleChange} required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-cyber-accent text-cyber-dark font-bold py-3 mt-4 rounded-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] flex items-center justify-center space-x-2 transition-all"
          >
            <span>SUBMIT REQUEST</span>
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-cyber-muted">
          Already have clearance?{" "}
          <Link href="/login" className="text-cyber-accent hover:underline">Login here</Link>
        </div>
      </div>
    </div>
  );
}
