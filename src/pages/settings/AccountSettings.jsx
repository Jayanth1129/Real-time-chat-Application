export default function AccountSettings({ back }) {
  return (
    <div className="h-full bg-[#0e1424] text-white p-6">
      <button onClick={back} className="mb-4 text-indigo-400">
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-6">
        Account Settings
      </h2>

      <div className="space-y-4">
        <button className="w-full py-3 bg-white/10 rounded">
          Change Password
        </button>

        <button className="w-full py-3 bg-white/10 rounded">
          Two-Factor Authentication
        </button>

        <button className="w-full py-3 bg-red-600 rounded">
          Delete Account
        </button>
      </div>
    </div>
  );
}
