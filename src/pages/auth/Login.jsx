import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../state/AuthContext";
import AuthShell from "../../components/ui/AuthShell";
import AuthCard from "../../components/ui/AuthCard";
import AuthInput from "../../components/ui/AuthInput";

export default function Login() {
  const { login } = useAuth();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (!form.id || !form.password) return;
    await login(form);
  };

  return (
    <AuthShell>
      <AuthCard>
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" className="w-16 mb-3" />
          <h1 className="text-2xl font-semibold text-white">ChatX</h1>
          <p className="text-slate-400 text-sm">Sign in to continue</p>
        </div>

        <div className="space-y-4">
          {/* EMAIL / PHONE */}
          <AuthInput
            ref={emailRef}
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
                handleSubmit();
              }
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="
            w-full mt-6 py-3 rounded-xl
            bg-indigo-600 text-white font-medium
            hover:scale-[1.02]
            active:scale-[0.98]
            transition
          "
        >
          Login
        </button>

        <div className="flex justify-between text-sm mt-6 text-slate-400">
          <Link to="/register" className="hover:text-white">
            Create account
          </Link>
          <Link to="/forgot" className="hover:text-white">
            Forgot password?
          </Link>
        </div>
      </AuthCard>
    </AuthShell>
  );
}
