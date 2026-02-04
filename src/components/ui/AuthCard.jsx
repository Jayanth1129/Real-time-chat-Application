export default function AuthCard({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
      {children}
    </div>
  );
}
