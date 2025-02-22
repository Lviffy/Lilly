import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: boolean;
  userName: string | null;
  avatarUrl: string | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: false,
  userName: null,
  avatarUrl: null,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // You can add your authentication logic here
  // For example, checking if the user is logged in on component mount
  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        // Add your authentication check logic here
        // For example:
        // const session = await getSession();
        // if (session) {
        //   setUser(true);
        //   setUserName(session.user.name);
        //   setAvatarUrl(session.user.avatar);
        // }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  const signOut = async () => {
    try {
      // Add your sign out logic here
      // For example:
      // await signOutFromBackend();
      setUser(false);
      setUserName(null);
      setAvatarUrl(null);
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userName, avatarUrl, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
