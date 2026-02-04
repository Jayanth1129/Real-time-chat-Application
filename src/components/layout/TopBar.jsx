import { Link, useLocation } from "react-router-dom";
import { Settings, User, LogOut } from "lucide-react";
import { useAuth } from "../../state/AuthContext";

export default function TopBar() {
  const { logout } = useAuth();
  const location = useLocation();

  return (
    <header
      className="h-20 px-6 flex items-center justify-between
                 bg-[#0b0f1a] border-b border-white/10"
    >
      {/* LOGO ONLY – CLICK TO CHAT */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <img
            src="/logo.png"
            alt="ChatX"
            className="w-8 h-8"
          />
        </div>
        <span className="text-2xl font-bold text-white">
          ChatX
        </span>
      </Link>

      {/* ACTIONS */}
      <div className="flex items-center gap-6 text-white">
        <Link
          to="/profile"
          className={
            location.pathname === "/profile"
              ? "text-indigo-400"
              : "text-white/70 hover:text-white"
          }
        >
          <User size={22} />
        </Link>

        <Link
          to="/settings"
          className={
            location.pathname === "/settings"
              ? "text-indigo-400"
              : "text-white/70 hover:text-white"
          }
        >
          <Settings size={22} />
        </Link>

        <button
          onClick={logout}
          className="text-white/60 hover:text-red-400"
        >
          <LogOut size={22} />
        </button>
      </div>
    </header>
  );
}
