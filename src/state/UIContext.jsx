import { createContext, useContext, useEffect, useState } from "react";

const UIContext = createContext(null);
const UI_KEY = "chatx_ui";

export function UIProvider({ children }) {
  const [ui, setUI] = useState({
    theme: "dark", // dark | light
    fontSize: "medium", // small | medium | large
    wallpaper: "default",
    notifications: {
      messages: true,
      groups: true,
      vibration: true,
    },
    accessibility: {
      highContrast: false,
      screenReader: false,
    },
    autoDownload: "wifi", // wifi | mobile | never
  });

  useEffect(() => {
    const saved = localStorage.getItem(UI_KEY);
    if (saved) setUI(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(UI_KEY, JSON.stringify(ui));
  }, [ui]);

  const updateUI = (data) => setUI((prev) => ({ ...prev, ...data }));

  return (
    <UIContext.Provider value={{ ui, updateUI }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
