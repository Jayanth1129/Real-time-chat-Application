import { useRef, useState } from "react";
import { useAuth } from "../../state/AuthContext";
import AuthShell from "../../components/ui/AuthShell";
import AuthCard from "../../components/ui/AuthCard";
import AuthInput from "../../components/ui/AuthInput";

export default function Register() {
  const { register } = useAuth();

  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  const [form, setForm] = useState({
    id: "",
    password: "",
    username: "",
  });

  const submit = async () => {
    if (!form.id || !form.password || !form.username) return;
    await register(form);
  };

  return (
    <AuthShell>
      <AuthCard>
        <h1 className="text-2xl font-semibold text-white mb-6 text-center">
          Create ChatX account
        </h1>

        <div className="space-y-4">
          {/* EMAIL / PHONE */}
          <AuthInput
            ref={idRef}
            placeholder="Email or phone"
            onChange={(e) =>
              setForm({ ...form, id: e.target.value })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                passwordRef.current?.focus();
              }
            }}
          />

          {/* PASSWORD */}
          <AuthInput
            ref={passwordRef}
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                usernameRef.current?.focus();
              }
            }}
          />

          {/* USERNAME */}
          <AuthInput
            ref={usernameRef}
            placeholder="Username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                submit();
              }
            }}
          />
        </div>

        <button
          onClick={submit}
          className="w-full mt-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:scale-[1.02] transition"
        >
          Create account
        </button>
      </AuthCard>
    </AuthShell>
  );
}
