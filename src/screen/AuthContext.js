import React, {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const storedUsername = await AsyncStorage.getItem('username');
    const storedPassword = await AsyncStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      setUser({username});
      await AsyncStorage.setItem('isAuthenticated', 'true');
    } else {
      throw new Error('Invalid username or password');
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('isAuthenticated');
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');

  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
