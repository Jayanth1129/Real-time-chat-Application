export default function HelpSettings({ back }) {
  return (
    <div className="h-full bg-[#0e1424] text-white p-6">
      <button onClick={back} className="mb-4 text-indigo-400">
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-6">
        Help & About
      </h2>

      <p className="mb-2">ChatX Version 1.0.0</p>
      <p className="text-white/60">
        Contact support: support@chatx.app
      </p>
    </div>
  );
}
