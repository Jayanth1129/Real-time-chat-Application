export default function LanguageSettings({ back }) {
  return (
    <div className="h-full bg-[#0e1424] text-white p-6">
      <button onClick={back} className="mb-4 text-indigo-400">
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-6">
        Language & Accessibility
      </h2>

      <select className="w-full p-3 bg-white/10 rounded mb-4">
        <option>English</option>
        <option>Hindi</option>
        <option>Telugu</option>
      </select>

      <label className="flex items-center gap-3">
        <input type="checkbox" />
        High Contrast Mode
      </label>
    </div>
  );
}
