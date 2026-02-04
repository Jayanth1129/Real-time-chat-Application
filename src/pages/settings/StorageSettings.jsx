export default function StorageSettings({ back }) {
  return (
    <div className="h-full bg-[#0e1424] text-white p-6">
      <button onClick={back} className="mb-4 text-indigo-400">
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-6">
        Data & Storage
      </h2>

      <button className="w-full py-3 bg-white/10 rounded mb-3">
        Clear Cache
      </button>

      <button className="w-full py-3 bg-white/10 rounded">
        Storage Usage
      </button>
    </div>
  );
}
