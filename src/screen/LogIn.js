import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {useAuth} from './AuthContext';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Username and Password are required.');
      return;
    }

    try {
      await login(username, password);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LogIn;
