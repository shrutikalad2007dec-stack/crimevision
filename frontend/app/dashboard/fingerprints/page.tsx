"use client";
import { useState, useEffect } from "react";
import CyberCard from "../../../components/ui/CyberCard";
import { Fingerprint, Upload, Search, CheckCircle, AlertTriangle } from "lucide-react";

export default function FingerprintsPage() {
  const [fingerprints, setFingerprints] = useState<any[]>([]);
  const [notes, setNotes] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  
  const apiUrl = "https://evidence-management-system-kd9i.onrender.com";

  // Fetch real data on load
  useEffect(() => {
    fetchFingerprints();
  }, []);

  const fetchFingerprints = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/fingerprints`);
      const data = await res.json();
      setFingerprints(data);
    } catch (error) {
      console.error("Error fetching fingerprints", error);
    }
  };

  const handleUpload = async () => {
    if (!notes) return alert("Please enter notes for this evidence!");
    setIsUploading(true);
    
    try {
      await fetch(`${apiUrl}/api/fingerprints`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uploadedBy: localStorage.getItem("userName") || "Admin",
          notes: notes
        }),
      });
      setNotes("");
      fetchFingerprints(); // Refresh the list
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Fingerprint className="mr-3 text-cyber-accent" />
          AFIS Database
        </h1>
        <p className="text-cyber-muted mt-2">Upload and analyze biometric evidence using AI matching algorithms.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CyberCard className="col-span-1 border-blue-500/30">
          <h2 className="text-xl font-bold text-white flex items-center mb-6">
            <Upload className="mr-2 text-cyber-accent" />
            Upload Evidence
          </h2>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-cyber-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-cyber-accent hover:bg-cyber-accent/5 transition-colors cursor-pointer group">
              <Upload className="w-12 h-12 text-cyber-muted group-hover:text-cyber-accent mb-4 transition-colors" />
              <p className="text-white font-bold">Select Fingerprint Image</p>
              <p className="text-xs text-cyber-muted mt-2">WSQ, PNG, or JPG up to 10MB</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-cyber-muted uppercase tracking-widest">Case Notes / Description</label>
              <input 
                type="text" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-cyber-dark/50 border border-cyber-border rounded p-3 text-white focus:outline-none focus:border-cyber-accent" 
                placeholder="e.g. Found on broken glass at scene..."
              />
            </div>
            
            <button 
              onClick={handleUpload}
              disabled={isUploading}
              className={`w-full font-bold py-3 rounded text-cyber-dark transition-all ${isUploading ? 'bg-cyber-muted cursor-not-allowed' : 'bg-cyber-accent hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]'}`}
            >
              {isUploading ? "UPLOADING..." : "UPLOAD TO AFIS"}
            </button>
          </div>
        </CyberCard>

        <CyberCard className="col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Search className="mr-2 text-cyber-accent" />
              Database Matches
            </h2>
          </div>
          
          <div className="space-y-4">
            {fingerprints.length === 0 ? (
              <div className="text-center p-8 text-cyber-muted border border-dashed border-cyber-border rounded">
                No fingerprints in database. Upload one to start!
              </div>
            ) : (
              fingerprints.map((fp) => (
                <div key={fp._id} className="bg-cyber-dark/50 border border-cyber-border rounded p-4 flex flex-col md:flex-row justify-between items-center hover:border-cyber-accent/50 transition-colors">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-black rounded flex items-center justify-center mr-4 border border-cyber-border">
                      <Fingerprint className="w-6 h-6 text-cyber-muted" />
                    </div>
                    <div>
                      <div className="font-bold text-white">ID: {fp._id.substring(0, 8).toUpperCase()}</div>
                      <div className="text-xs text-cyber-muted">Uploaded By: {fp.uploadedBy} • {new Date(fp.uploadDate).toLocaleDateString()}</div>
                      <div className="text-sm text-gray-300 mt-1">"{fp.notes}"</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-xs text-cyber-muted uppercase tracking-widest mb-1">AI Match Score</div>
                      <div className={`text-xl font-bold ${fp.matchScore > 85 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {fp.matchScore}%
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded text-xs font-bold flex items-center ${fp.status === 'Matched' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                      {fp.status === 'Matched' ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                      {fp.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CyberCard>
      </div>
    </div>
  );
}
