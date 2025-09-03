import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LocationSelect from "./pages/LocationSelect";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const savedLocation = localStorage.getItem("userLocation");
  if (!savedLocation) {
    return <Navigate to="/select-location" />;
  }
  return <>{children}</>;
};

export const CustomRoutes = () => {

  const handleOpenAuth = (mode: "login" | "signup") => {
    window.location.href = mode === "login" ? "/login" : "/register";
  };

  return <Routes>
    <Route path="/select-location" element={<LocationSelect />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <>
            <Navbar onOpenAuth={handleOpenAuth} />
            <HomePage />
          </>
        </ProtectedRoute>
      }
    />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route
      path="/business/:id"
      element={
        <ProtectedRoute>
          <>
            <Navbar onOpenAuth={handleOpenAuth} />
            <BusinessDetailsPage />
          </>
        </ProtectedRoute>
      }
    />
  </Routes>
};
