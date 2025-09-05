import { createContext, ReactNode, useContext, useState } from "react";
import { AuthData, AuthResponse } from "../../types/auth";

interface AuthContextType {
  authData: AuthData;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData>({
    accessToken: null,
    user: { name: "", email: "" },
  });

  const login = (data: AuthResponse) => {
    setAuthData({
      accessToken: data.token.access,
      user: data.info,
    });
  };

  const logout = () => {
    setAuthData({ accessToken: null, user: { name: "", email: "" } });
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
