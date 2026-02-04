import { useState } from "react";
import { useAuth } from "../state/AuthContext";

export default function Profile() {
  const { user, updateProfile, changeContact } = useAuth();

  const [mode, setMode] = useState(null); // "email" | "phone"
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  if (!user) return null;

  /* ---------- Avatar ---------- */
  const uploadAvatar = (file) => {
    const reader = new FileReader();
    reader.onload = () => updateProfile({ avatar: reader.result });
    reader.readAsDataURL(file);
  };

  /* ---------- Change Email / Phone ---------- */
  const submitChange = async () => {
    try {
      await changeContact({
        type: mode,
        value,
        password,
      });
      setFeedback(`${mode} updated successfully`);
      setMode(null);
      setValue("");
      setPassword("");
    } catch (e) {
      setFeedback(e.message);
    }
  };

  return (
    <div className="h-full bg-[#0e1424] text-white overflow-y-auto">
      <div className="max-w-2xl mx-auto p-6">

        {/* HEADER */}
        <h1 className="text-2xl font-semibold mb-6">Profile</h1>

        {/* AVATAR */}
        <div className="flex justify-center mb-8">
          <label className="cursor-pointer">
            <img
              src={user.avatar || "/avatars/male.png"}
              className="w-28 h-28 rounded-full object-cover border border-white/10"
            />
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => uploadAvatar(e.target.files[0])}
            />
          </label>
        </div>

        {/* DISPLAY NAME */}
        <div className="mb-4">
          <label className="text-sm text-white/60">
            Display name
          </label>
          <input
            value={user.displayName}
            onChange={(e) =>
              updateProfile({ displayName: e.target.value })
            }
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* BIO */}
        <div className="mb-4">
          <label className="text-sm text-white/60">
            Bio
          </label>
          <textarea
            value={user.bio || ""}
            onChange={(e) =>
              updateProfile({ bio: e.target.value })
            }
            rows={3}
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell something about yourself"
          />
        </div>

        {/* STATUS */}
        <div className="mb-4">
          <label className="text-sm text-white/60">
            Status
          </label>
          <input
            value={user.status || ""}
            onChange={(e) =>
              updateProfile({ status: e.target.value })
            }
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Busy, Available, At work…"
          />
        </div>

        {/* DOB */}
        <div className="mb-8">
          <label className="text-sm text-white/60">
            Date of birth
          </label>
          <input
            type="date"
            value={user.dob || ""}
            onChange={(e) =>
              updateProfile({ dob: e.target.value })
            }
            className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* CHANGE EMAIL / PHONE */}
        <div className="mb-4 flex gap-3">
          <button
            onClick={() => {
              setMode("email");
              setFeedback("");
            }}
            className="flex-1 py-2 bg-white/10 rounded-lg hover:bg-white/20"
          >
            Change Email
          </button>
          <button
            onClick={() => {
              setMode("phone");
              setFeedback("");
            }}
            className="flex-1 py-2 bg-white/10 rounded-lg hover:bg-white/20"
          >
            Change Phone
          </button>
        </div>

        {mode && (
          <div className="bg-white/5 p-4 rounded-lg mb-4">
            <h2 className="font-medium mb-3 capitalize">
              Change {mode}
            </h2>

            <input
              placeholder={`New ${mode}`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && submitChange()
              }
              className="w-full mb-3 px-4 py-2 rounded bg-white/10 outline-none"
            />

            <input
              type="password"
              placeholder="Current password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && submitChange()
              }
              className="w-full mb-3 px-4 py-2 rounded bg-white/10 outline-none"
            />

            <button
              onClick={submitChange}
              className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Save
            </button>
          </div>
        )}

        {feedback && (
          <div className="text-center text-sm text-indigo-400">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
