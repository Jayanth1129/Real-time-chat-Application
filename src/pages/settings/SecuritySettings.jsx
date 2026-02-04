export default function SecuritySettings({ back }) {
  return (
    <div className="h-full bg-[#0e1424] text-white p-6">
      <button onClick={back} className="mb-4 text-indigo-400">
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-6">
        Security & Privacy
      </h2>

      <p className="text-white/70 mb-4">
        Messages are end-to-end encrypted.
      </p>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        App Lock (Fingerprint / Face)
      </label>
    </div>
  );
}
