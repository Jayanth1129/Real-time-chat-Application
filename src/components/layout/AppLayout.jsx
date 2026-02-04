import { useState } from "react";
import TopBar from "./TopBar";
import SideDrawer from "./SideDrawer";

export default function AppLayout({ children }) {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <TopBar onMenu={() => setDrawer(true)} />
      <SideDrawer open={drawer} onClose={() => setDrawer(false)} />

      <main className="flex-1 bg-slate-100 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
