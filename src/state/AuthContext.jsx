import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const USERS_KEY = "chatx_users";
const AUTH_KEY = "chatx_auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  /* ---------- INIT ---------- */
  useEffect(() => {
    const auth = localStorage.getItem(AUTH_KEY);
    if (auth) setUser(JSON.parse(auth));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    else localStorage.removeItem(AUTH_KEY);
  }, [user]);

  const getUsers = () =>
    JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const saveUsers = (users) =>
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

  /* ---------- REGISTER ---------- */
  const register = ({
  email,
  phone,
  password,
  username,
  displayName,
}) => {
  const users = getUsers();

  if (email && users.some((u) => u.email === email))
    throw new Error("Email already exists");

  if (phone && users.some((u) => u.phone === phone))
    throw new Error("Phone already exists");

  // 👇 derive display name if not provided
  let finalDisplayName = displayName?.trim();

  if (!finalDisplayName) {
    if (email) {
      finalDisplayName = email
        .split("@")[0]
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    } else if (phone) {
      finalDisplayName = `User ${phone.slice(-4)}`;
    } else {
      finalDisplayName = username.replace(/[_\.]/g, " ");
    }
  }

  const newUser = {
    id: Date.now(),
    username,               // 🔒 locked
    displayName: finalDisplayName, // ✅ friendly & editable
    email: email || "",
    phone: phone || "",
    password,
    dob: "",
    status: "",
    avatar: "",
    privacy: {
      profilePhoto: "everyone",
      status: "everyone",
      lastSeen: "everyone",
    },
  };

  users.push(newUser);
  saveUsers(users);

  setUser(strip(newUser));
};

  /* ---------- LOGIN ---------- */
  const login = ({ identifier, password }) => {
    const users = getUsers();
    const found = users.find(
      (u) =>
        (u.email === identifier || u.phone === identifier) &&
        u.password === password
    );
    if (!found) throw new Error("Invalid credentials");

    setUser(strip(found));
  };

  /* ---------- UPDATE BASIC PROFILE ---------- */
  const updateProfile = (data) => {
    const users = getUsers();
    const i = users.findIndex((u) => u.id === user.id);
    if (i === -1) return;

    users[i] = { ...users[i], ...data };
    saveUsers(users);
    setUser(strip(users[i]));
  };

  /* ---------- CHANGE EMAIL / PHONE (PASSWORD REQUIRED) ---------- */
  const changeContact = ({ type, value, password }) => {
    const users = getUsers();
    const i = users.findIndex((u) => u.id === user.id);
    if (i === -1) throw new Error("User not found");

    if (users[i].password !== password)
      throw new Error("Wrong password");

    if (users.some((u) => u[type] === value))
      throw new Error(`${type} already in use`);

    users[i][type] = value;
    saveUsers(users);
    setUser(strip(users[i]));
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        updateProfile,
        changeContact,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const strip = ({ password, ...rest }) => rest;

export function useAuth() {
  return useContext(AuthContext);
}
