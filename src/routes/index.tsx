import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Background } from '../components/Background';
import { Home } from '../screens/Home';
import { FlaTvHome } from '../screens/FlaTvHome';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FlaTvHome" component={FlaTvHome} />
    </Stack.Navigator>
  );
}
