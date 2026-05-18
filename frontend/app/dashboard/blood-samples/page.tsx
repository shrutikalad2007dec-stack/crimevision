"use client";
import { useState } from "react";
import { Database, Upload, Droplet, Activity, FlaskConical } from "lucide-react";
import CyberCard from "../../../components/ui/CyberCard";

export default function BloodSampleModule() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Droplet className="mr-3 w-8 h-8 text-red-500" />
          Blood & DNA Analysis
        </h1>
        <p className="text-cyber-muted mt-2">Log fluid samples, request DNA sequencing, and track storage.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CyberCard className="lg:col-span-1">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2">Log New Sample</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs text-cyber-accent mb-1 uppercase tracking-widest">Case ID</label>
              <input type="text" className="w-full bg-cyber-dark border border-cyber-border rounded px-3 py-2 text-white" placeholder="CAS-..." />
            </div>
            <div>
              <label className="block text-xs text-cyber-accent mb-1 uppercase tracking-widest">Blood Group (If known)</label>
              <select className="w-full bg-cyber-dark border border-cyber-border rounded px-3 py-2 text-white">
                <option>Unknown</option>
                <option>A+</option><option>A-</option>
                <option>B+</option><option>B-</option>
                <option>AB+</option><option>AB-</option>
                <option>O+</option><option>O-</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-cyber-accent mb-1 uppercase tracking-widest">Storage Location</label>
              <input type="text" className="w-full bg-cyber-dark border border-cyber-border rounded px-3 py-2 text-white" placeholder="e.g. Fridge A, Rack 3" />
            </div>
            <button className="w-full bg-red-900/50 border border-red-500 text-red-400 font-bold py-2 rounded hover:bg-red-500 hover:text-white transition-all">
              LOG SAMPLE
            </button>
          </form>
        </CyberCard>

        <CyberCard className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-cyber-border pb-2">Active DNA Sequencing</h2>
          <div className="space-y-4">
            <SequenceItem id="DNA-8812" caseId="CAS-409" progress={78} status="Sequencing..." />
            <SequenceItem id="DNA-8810" caseId="CAS-402" progress={100} status="Complete - Match Found" />
            <SequenceItem id="DNA-8805" caseId="CAS-399" progress={100} status="Complete - No Match" />
          </div>
        </CyberCard>
      </div>
    </div>
  );
}

function SequenceItem({ id, caseId, progress, status }: any) {
  const isComplete = progress === 100;
  return (
    <div className="bg-cyber-dark/50 border border-cyber-border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <FlaskConical className={`w-5 h-5 ${isComplete ? 'text-green-400' : 'text-cyber-accent animate-pulse'}`} />
          <span className="font-bold text-white">{id}</span>
          <span className="text-xs text-cyber-muted px-2 py-1 bg-cyber-dark rounded">{caseId}</span>
        </div>
        <span className={`text-xs font-bold ${isComplete ? (status.includes('Match Found') ? 'text-green-400' : 'text-yellow-400') : 'text-cyber-accent'}`}>
          {status}
        </span>
      </div>
      <div className="w-full bg-cyber-dark rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${isComplete ? (status.includes('Match Found') ? 'bg-green-400' : 'bg-yellow-400') : 'bg-cyber-accent'}`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
