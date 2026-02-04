export default function AuthShell({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f1a] relative overflow-hidden">
      {/* soft glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-600/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/20 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
