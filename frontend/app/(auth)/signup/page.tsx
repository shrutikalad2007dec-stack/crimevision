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
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Clearance Request Submitted! Pending Admin Approval.");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setMessage(data.message || "Failed to submit request.");
      }
    } catch (error) {
      setMessage("Server connection error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
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

        {message && (
          <div className={`mb-4 p-3 rounded text-center text-sm font-bold ${message.includes("Submitted") ? "bg-green-900/50 text-green-400 border border-green-500" : "bg-red-900/50 text-red-400 border border-red-500"}`}>
            {message}
          </div>
        )}

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
            disabled={isLoading}
            className={`w-full text-cyber-dark font-bold py-3 mt-4 rounded-lg flex items-center justify-center space-x-2 transition-all ${isLoading ? 'bg-cyber-muted cursor-not-allowed' : 'bg-cyber-accent hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]'}`}
          >
            <span>{isLoading ? "SUBMITTING..." : "SUBMIT REQUEST"}</span>
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
