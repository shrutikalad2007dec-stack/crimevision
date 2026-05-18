"use client";
import { Shield, Box, QrCode, Search } from "lucide-react";
import CyberCard from "../../../components/ui/CyberCard";

export default function EvidenceModule() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center">
          <Shield className="mr-3 w-8 h-8 text-blue-500" />
          Physical Evidence & Custody
        </h1>
        <p className="text-cyber-muted mt-2">Manage weapon tracking, physical items, and maintain strict chain of custody.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Evidence List */}
        <CyberCard className="flex-1 overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white border-b border-cyber-border pb-2 inline-block">Inventory</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-cyber-muted" />
              <input type="text" placeholder="Search by ID or Case..." className="pl-9 pr-4 py-2 bg-cyber-dark border border-cyber-border rounded text-sm text-white focus:border-cyber-accent focus:outline-none" />
            </div>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-cyber-border text-cyber-muted text-xs uppercase tracking-wider">
                <th className="p-3">ID</th>
                <th className="p-3">Type</th>
                <th className="p-3">Case ID</th>
                <th className="p-3">Location</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <EvidenceRow id="EV-1042" type="Firearm (9mm)" caseId="CAS-409" loc="Locker 4A" status="Secured" />
              <EvidenceRow id="EV-1043" type="Mobile Device" caseId="CAS-409" loc="Cyber Lab" status="Under Analysis" />
              <EvidenceRow id="EV-1001" type="Clothing" caseId="CAS-399" loc="Storage B" status="Secured" />
            </tbody>
          </table>
        </CyberCard>

        {/* Action Panel */}
        <div className="w-full lg:w-80 space-y-6">
          <CyberCard>
            <h3 className="font-bold text-white mb-4 flex items-center"><Box className="w-5 h-5 mr-2 text-cyber-accent"/> New Evidence Log</h3>
            <button className="w-full bg-cyber-accent text-cyber-dark font-bold py-2 rounded hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all">
              LOG ITEM
            </button>
          </CyberCard>

          <CyberCard className="flex flex-col items-center text-center">
            <QrCode className="w-16 h-16 text-white mb-2" />
            <h3 className="font-bold text-white mb-1">Quick Scan</h3>
            <p className="text-xs text-cyber-muted mb-4">Scan physical QR code to update custody instantly.</p>
            <button className="w-full border border-cyber-border text-cyber-muted py-2 rounded hover:text-white hover:border-white transition-all text-sm font-bold">
              ACTIVATE CAMERA
            </button>
          </CyberCard>
        </div>
      </div>
    </div>
  );
}

function EvidenceRow({ id, type, caseId, loc, status }: any) {
  const isSecured = status === 'Secured';
  return (
    <tr className="border-b border-cyber-border/50 hover:bg-cyber-dark/50 transition-colors">
      <td className="p-3 font-mono text-sm text-cyber-accent">{id}</td>
      <td className="p-3 text-sm text-white">{type}</td>
      <td className="p-3 text-sm text-cyber-muted">{caseId}</td>
      <td className="p-3 text-sm text-white">{loc}</td>
      <td className="p-3">
        <span className={`text-xs px-2 py-1 rounded ${isSecured ? 'bg-green-400/10 text-green-400' : 'bg-yellow-400/10 text-yellow-400'}`}>
          {status}
        </span>
      </td>
      <td className="p-3">
        <button className="text-xs font-bold text-cyber-muted hover:text-white transition-colors">VIEW</button>
      </td>
    </tr>
  );
}
