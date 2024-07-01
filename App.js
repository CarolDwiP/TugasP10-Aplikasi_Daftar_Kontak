import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import About from './components/About';
import Welcome from './components/Welcome';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Beranda' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Daftar Teman' }} />
        <Stack.Screen name="About" component={About} options={{ title: 'Detail Teman' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
