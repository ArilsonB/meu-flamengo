import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { FlaTvHome } from '../screens/FlaTvHome';
import { BackgroundDark } from '../components/BackgroundDark';
import { FlaTvPlayer } from '../screens/FlaTvPlayer';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <BackgroundDark>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FlaTvHome" component={FlaTvHome} />
        <Stack.Screen name="FlaTvPlayer" component={FlaTvPlayer} />
      </Stack.Navigator>
    </BackgroundDark>
  );
}
