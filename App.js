import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProvider} from './src/screen/AuthContext';
import AppNavigator from './src/screen/AppNavigator';

const App = () => {
  useEffect(() => {
    const setDummyCredentials = async () => {
      await AsyncStorage.setItem('username', 'admin');
      await AsyncStorage.setItem('password', 'password123');
    };
    setDummyCredentials();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
