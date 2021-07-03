import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = {
  children?: ReactNode;
}

export function BackgroundDark({ children = "" }: Props) {
  const { bgPrimary, bgSecondary } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={['#1a1a1a', '#000000']}>
      {children}
    </LinearGradient>
  );
}