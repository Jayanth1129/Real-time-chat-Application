import { useState } from "react";
import { useAuth } from "../../state/AuthContext";
import AuthShell from "../../components/ui/AuthShell";
import AuthCard from "../../components/ui/AuthCard";
import AuthInput from "../../components/ui/AuthInput";

export default function SetUsername() {
  const { login } = useAuth();
  const pending = JSON.parse(localStorage.getItem("pending_user"));
  const [username, setUsername] = useState("");

  const submit = async () => {
    if (!username || !pending) return;
    await login({ ...pending, username });
    localStorage.removeItem("pending_user");
  };

  return (
    <AuthShell>
      <AuthCard>
        <h2 className="text-xl font-semibold text-white text-center mb-2">
          Choose your username
        </h2>
        <p className="text-slate-400 text-sm text-center mb-6">
          This cannot be changed later
        </p>

        <AuthInput
          placeholder="@username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full mt-6 py-3 rounded-xl bg-indigo-600 text-white"
        >
          Enter ChatX
        </button>
      </AuthCard>
    </AuthShell>
  );
}
