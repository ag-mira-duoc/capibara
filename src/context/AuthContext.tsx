import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAdmin: () => boolean;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulación de login (reemplazar con API real)
    if (email === 'admin@techstore.cl' && password === 'admin123') {
      setUser({
        id: 1,
        name: 'Administrador',
        email: 'admin@techstore.cl',
        role: 'admin'
      });
      localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
      return true;
    } else if (email && password.length >= 6) {
      setUser({
        id: 2,
        name: email.split('@')[0],
        email,
        role: 'user'
      });
      localStorage.setItem('user', JSON.stringify({ email, role: 'user' }));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulación de registro (reemplazar con API real)
    if (name && email && password.length >= 6) {
      setUser({
        id: Date.now(),
        name,
        email,
        role: 'user'
      });
      localStorage.setItem('user', JSON.stringify({ email, role: 'user' }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAdmin = () => user?.role === 'admin';
  
  const isAuthenticated = () => user !== null;

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
