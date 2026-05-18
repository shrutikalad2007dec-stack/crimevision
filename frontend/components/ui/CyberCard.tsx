export default function CyberCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-panel rounded-xl border border-cyber-border p-6 shadow-lg hover:neon-glow transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
