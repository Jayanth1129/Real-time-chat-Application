import { useState } from "react";
import { useUI } from "../../state/UIContext";

export default function AppLock() {
  const { ui, unlockApp } = useUI();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  if (!ui.security.appLockEnabled || !ui.security.isLocked) {
    return null;
  }

  const submit = () => {
    if (pin === ui.security.appPin) {
      unlockApp(pin);
      setPin("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="bg-[#0e1424] p-6 rounded-xl w-80 text-center">
        <h2 className="text-xl text-white mb-4">
          ChatX Locked 🔒
        </h2>

        <input
          type="password"
          value={pin}
          maxLength={4}
          onChange={(e) => setPin(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Enter PIN"
          className="w-full mb-3 px-4 py-2 bg-white/10 rounded text-white"
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">
            Incorrect PIN
          </p>
        )}

        <button
          onClick={submit}
          className="w-full py-2 bg-indigo-600 rounded"
        >
          Unlock
        </button>
      </div>
    </div>
  );
}
