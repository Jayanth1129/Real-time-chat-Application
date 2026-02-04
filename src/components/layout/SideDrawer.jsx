import { X, User, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../state/AuthContext";

export default function SideDrawer({ open, onClose }) {
  const { logout } = useAuth();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex">
      <div
        className="flex-1 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside className="w-64 bg-white shadow-xl p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <nav className="space-y-3">
          <MenuItem icon={<User />} label="Profile" />
          <MenuItem icon={<Settings />} label="Settings" />
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-red-50 text-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </aside>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-slate-100">
      {icon}
      <span>{label}</span>
    </button>
  );
}
