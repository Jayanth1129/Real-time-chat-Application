import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-[360px] bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-xl font-semibold mb-4">Reset password</h1>

        <input
          className="w-full p-3 border rounded-md mb-6"
          placeholder="Email"
        />

        <Link
          to="/login"
          className="block text-center bg-indigo-600 text-white py-3 rounded-md"
        >
          Send reset link
        </Link>
      </div>
    </div>
  );
}
