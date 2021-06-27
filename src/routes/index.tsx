import React from 'react';
import { View } from 'react-native';
import { Background } from '../components/Background';
import { Home } from '../screens/Home';

export const Routes = () => {
  return (
    <Background>
      <Home />
    </Background>
  );
}
