import { useState } from "react";
import AccountSettings from "./settings/AccountSettings";
import StorageSettings from "./settings/StorageSettings";
import SecuritySettings from "./settings/SecuritySettings";
import LanguageSettings from "./settings/LanguageSettings";
import HelpSettings from "./settings/HelpSettings";

const sections = [
  "Account",
  "Data & Storage",
  "Security & Privacy",
  "Language & Accessibility",
  "Help & About",
];

export default function Settings() {
  const [active, setActive] = useState(null);

  if (active) {
    const map = {
      Account: <AccountSettings back={() => setActive(null)} />,
      "Data & Storage": (
        <StorageSettings back={() => setActive(null)} />
      ),
      "Security & Privacy": (
        <SecuritySettings back={() => setActive(null)} />
      ),
      "Language & Accessibility": (
        <LanguageSettings back={() => setActive(null)} />
      ),
      "Help & About": <HelpSettings back={() => setActive(null)} />,
    };

    return map[active];
  }

  return (
    <div className="h-full w-full bg-[#0e1424] text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="space-y-3">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className="w-full text-left px-4 py-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
