"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint, Database, Activity, Lock, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cyber-gradient flex flex-col items-center overflow-hidden">
      {/* Navbar */}
      <nav className="w-full glass-panel p-4 px-8 flex justify-between items-center fixed top-0 z-50">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-cyber-accent" />
          <span className="text-xl font-bold tracking-widest neon-text">NEXUS FORENSICS</span>
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-6 py-2 rounded-full border border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-cyber-dark transition-all">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 rounded-full bg-cyber-accent text-cyber-dark font-semibold hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center mt-32 px-4 z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel mb-4">
            <span className="animate-pulse w-2 h-2 rounded-full bg-cyber-accent mr-2"></span>
            <span className="text-sm tracking-widest text-cyber-accent">SYSTEM ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Secure AI-Powered <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent to-blue-500 neon-text">
              Forensic Management
            </span>
          </h1>
          
          <p className="text-xl text-cyber-muted max-w-2xl mx-auto">
            Advanced cryptographic evidence storage, real-time AI analysis, and immutable chain of custody for modern law enforcement.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <Link href="/login" className="group flex items-center space-x-2 px-8 py-4 rounded-lg bg-cyber-accent text-cyber-dark font-bold text-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all">
              <span>Access Terminal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 mb-20 w-full">
          <FeatureCard 
            icon={<Fingerprint className="w-10 h-10 text-cyber-accent" />}
            title="Biometric Analysis"
            description="AI-driven fingerprint and DNA matching algorithms with 99.9% accuracy."
          />
          <FeatureCard 
            icon={<Database className="w-10 h-10 text-cyber-accent" />}
            title="Encrypted Storage"
            description="Military-grade encryption for all media, documents, and physical evidence records."
          />
          <FeatureCard 
            icon={<Activity className="w-10 h-10 text-cyber-accent" />}
            title="Real-time Tracking"
            description="Immutable chain of custody with automated audit logs and QR tracking."
          />
        </div>
      </main>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-cyan-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-panel p-8 rounded-xl flex flex-col items-center text-center space-y-4 hover:neon-glow transition-all duration-300"
    >
      <div className="p-4 bg-cyber-dark rounded-full border border-cyber-border">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-cyber-muted">{description}</p>
    </motion.div>
  );
}
