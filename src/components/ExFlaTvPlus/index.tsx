import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export function ExFlaTvPlus() {
  return (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#FC8902', '#E79F4C', '#EB850E', '#FFA439']}
      style={styles.container}>
      <Text style={styles.title}>Exclusivo FlaTV+</Text>
    </LinearGradient>
  );
}