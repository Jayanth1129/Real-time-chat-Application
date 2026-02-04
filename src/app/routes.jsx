import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../state/AuthContext";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import SetUsername from "../pages/auth/SetUsername";

import AppLayout from "../components/layout/AppLayout";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {/* NOT LOGGED IN */}
      {!user && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

      {/* REGISTER FLOW – SET USERNAME */}
      {user && !user.username && (
        <Routes>
          <Route path="/set-username" element={<SetUsername />} />
          <Route path="*" element={<Navigate to="/set-username" />} />
        </Routes>
      )}

      {/* AUTHENTICATED APP */}
      {user && user.username && (
        <Routes>
          {/* Redirect root "/" to chat */}
          <Route path="/" element={<Navigate to="/chat" />} />

          <Route
            path="/chat"
            element={
              <AppLayout>
                <Chat />
              </AppLayout>
            }
          />

          <Route
            path="/profile"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />

          <Route
            path="/settings"
            element={
              <AppLayout>
                <Settings />
              </AppLayout>
            }
          />

          <Route path="*" element={<Navigate to="/chat" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}