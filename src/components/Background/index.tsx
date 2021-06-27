import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = {
  children?: ReactNode;
}

export function Background({ children = "" }: Props) {
  const { bgPrimary, bgSecondary } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[bgPrimary, bgSecondary]}>
      {children}
    </LinearGradient>
  );
}