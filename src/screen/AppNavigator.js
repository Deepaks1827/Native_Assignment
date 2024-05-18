import { Button, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './AuthContext';
import LogIn from './LogIn';
import MapScreen from './MapScreen';
import Details from './Details';
import MovieScreen from './MovieScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
                  <Button onPress={logoutHandler} title="Logout" />
                  <Button  onPress={() => navigation.navigate('Movie')} title="Movies" />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ navigation }) => ({
              headerRight: () => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
                  <Button onPress={logoutHandler} title="Logout" />
                  <Button onPress={() => navigation.navigate('Movie')} title="Movies" />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Movie"
            component={MovieScreen}
            options={{
              headerRight: () => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
                  <Button onPress={logoutHandler} title="Logout" />
                </View>
              ),
            }}
          />
        </>
      ) : (
        <Stack.Screen name="Login" component={LogIn} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;

