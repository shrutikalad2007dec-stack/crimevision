"use client";
import { useState } from "react";
import { Fingerprint, Upload, Search, CheckCircle, AlertTriangle } from "lucide-react";
import CyberCard from "../../../components/ui/CyberCard";

export default function FingerprintModule() {
  const [isUploading, setIsUploading] = useState(false);
  const [matchResult, setMatchResult] = useState<null | number>(null);

  const handleSimulatedUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setMatchResult(null);

    // Simulate AI processing delay
    setTimeout(() => {
      setIsUploading(false);
      setMatchResult(98.7); // Simulated match percentage
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Fingerprint className="mr-3 w-8 h-8 text-cyber-accent" />
          Biometric Analysis Module
        </h1>
        <p className="text-cyber-muted mt-2">Upload, analyze, and cross-reference latent prints.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Form */}
        <CyberCard>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2">New Entry</h2>
          <form onSubmit={handleSimulatedUpload} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-cyber-accent mb-1 uppercase tracking-widest">Case ID</label>
                <input type="text" required className="w-full bg-cyber-dark border border-cyber-border rounded px-3 py-2 text-white focus:outline-none focus:border-cyber-accent" placeholder="e.g. CAS-409" />
              </div>
              <div>
                <label className="block text-xs text-cyber-accent mb-1 uppercase tracking-widest">Suspect Name (Optional)</label>
                <input type="text" className="w-full bg-cyber-dark border border-cyber-border rounded px-3 py-2 text-white focus:outline-none focus:border-cyber-accent" placeholder="Unknown" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs text-cyber-accent mb-1 uppercase tracking-widest">Upload Print Image</label>
              <div className="border-2 border-dashed border-cyber-border rounded-lg p-8 flex flex-col items-center justify-center bg-cyber-dark/50 hover:bg-cyber-dark transition-colors cursor-pointer group">
                <Upload className="w-10 h-10 text-cyber-muted group-hover:text-cyber-accent transition-colors mb-2" />
                <span className="text-sm text-cyber-muted group-hover:text-white transition-colors">Select highly detailed image (JPG/PNG)</span>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isUploading}
              className={`w-full py-3 rounded font-bold text-cyber-dark flex items-center justify-center space-x-2 transition-all ${isUploading ? 'bg-cyber-muted cursor-not-allowed' : 'bg-cyber-accent hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]'}`}
            >
              {isUploading ? (
                <>
                  <span className="animate-spin w-5 h-5 border-2 border-cyber-dark border-t-transparent rounded-full"></span>
                  <span>ANALYZING BIOMETRICS...</span>
                </>
              ) : (
                <>
                  <Fingerprint className="w-5 h-5" />
                  <span>RUN AI MATCH</span>
                </>
              )}
            </button>
          </form>
        </CyberCard>

        {/* AI Results / Search */}
        <CyberCard>
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2 flex justify-between">
            <span>AI Analysis Result</span>
            {matchResult !== null && <span className="text-green-400 text-sm flex items-center"><CheckCircle className="w-4 h-4 mr-1"/> Complete</span>}
          </h2>

          {isUploading && (
            <div className="h-64 flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <Fingerprint className="w-20 h-20 text-cyber-accent opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full border-t-2 border-cyber-accent animate-bounce" style={{ animationDuration: '1s' }}></div>
              </div>
              <p className="text-cyber-accent animate-pulse font-mono tracking-widest text-sm">CROSS-REFERENCING AFIS DATABASE...</p>
            </div>
          )}

          {!isUploading && matchResult === null && (
            <div className="h-64 flex flex-col items-center justify-center text-cyber-muted text-center space-y-2">
              <Search className="w-12 h-12 opacity-50" />
              <p>Awaiting print submission for AI analysis.</p>
            </div>
          )}

          {matchResult !== null && !isUploading && (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-green-400/10 border border-green-400 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Fingerprint className="w-10 h-10 text-green-400" />
                  <div>
                    <h3 className="font-bold text-white">Match Identified</h3>
                    <p className="text-xs text-green-400">Suspect: John Doe (DOB: 1988)</p>
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-green-400">{matchResult}%</div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white tracking-widest uppercase">Database Records</h4>
                <div className="p-3 bg-cyber-dark border border-cyber-border rounded flex justify-between text-sm">
                  <span className="text-cyber-muted">Prior Arrests</span>
                  <span className="text-red-400">2 (Burglary, Grand Theft)</span>
                </div>
                <div className="p-3 bg-cyber-dark border border-cyber-border rounded flex justify-between text-sm">
                  <span className="text-cyber-muted">Last Known Location</span>
                  <span className="text-white">Sector 4, Neo-District</span>
                </div>
              </div>

              <button className="w-full border border-cyber-accent text-cyber-accent py-2 rounded hover:bg-cyber-accent hover:text-cyber-dark transition-colors text-sm font-bold tracking-widest">
                ATTACH TO CASE FILE
              </button>
            </div>
          )}
        </CyberCard>
      </div>
    </div>
  );
}
