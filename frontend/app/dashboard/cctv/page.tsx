"use client";
import { Video, Camera, AlertTriangle, PlayCircle } from "lucide-react";
import CyberCard from "../../../components/ui/CyberCard";

export default function CCTVModule() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Video className="mr-3 w-8 h-8 text-purple-500" />
          Surveillance & CCTV
        </h1>
        <p className="text-cyber-muted mt-2">Upload footage, run AI anomaly detection, and isolate subjects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CyberCard className="lg:col-span-2 p-0 overflow-hidden">
          {/* Main Video Player Placeholder */}
          <div className="aspect-video bg-black relative flex items-center justify-center border-b border-cyber-border">
            <div className="absolute inset-0 bg-cyber-dark/40"></div>
            <PlayCircle className="w-20 h-20 text-white/50 hover:text-white cursor-pointer z-10 transition-colors" />
            
            {/* Fake AI Overlay */}
            <div className="absolute top-4 left-4 text-xs font-mono text-green-400 bg-black/50 px-2 py-1 rounded">
              CAM_12_DISTRICT_4 • REC: ACTIVE
            </div>
            <div className="absolute border-2 border-red-500 w-32 h-64 right-1/4 top-1/4 z-10 flex flex-col justify-end">
              <div className="bg-red-500 text-white text-[10px] font-bold px-1 uppercase tracking-widest">
                Anomaly Detected (89%)
              </div>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center bg-cyber-dark">
            <div>
              <h3 className="font-bold text-white">Downtown Alleyway Inc 4</h3>
              <p className="text-xs text-cyber-muted">Uploaded by Officer K. • 2 hours ago</p>
            </div>
            <button className="bg-purple-900/50 border border-purple-500 text-purple-400 px-4 py-2 rounded text-sm font-bold hover:bg-purple-500 hover:text-white transition-all">
              RUN ENHANCEMENT
            </button>
          </div>
        </CyberCard>

        <CyberCard className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            AI Flags
          </h2>
          
          <div className="space-y-3">
             <FlagItem time="00:12:44" desc="Unidentified subject entered frame." severity="medium" />
             <FlagItem time="00:15:02" desc="Rapid movement / Altercation detected." severity="high" />
             <FlagItem time="00:16:30" desc="Metallic object (potential weapon) identified." severity="high" />
          </div>

          <button className="w-full mt-4 border border-cyber-border text-cyber-muted py-2 rounded hover:text-white hover:border-white transition-all text-sm font-bold">
            EXPORT CLIP
          </button>
        </CyberCard>
      </div>
    </div>
  );
}

function FlagItem({ time, desc, severity }: any) {
  const isHigh = severity === 'high';
  return (
    <div className={`p-3 rounded border-l-2 ${isHigh ? 'border-red-500 bg-red-500/10' : 'border-yellow-400 bg-yellow-400/10'}`}>
      <div className={`text-xs font-bold font-mono ${isHigh ? 'text-red-400' : 'text-yellow-400'} mb-1`}>{time}</div>
      <div className="text-sm text-white">{desc}</div>
    </div>
  );
}
