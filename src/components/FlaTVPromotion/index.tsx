import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';

export function FlaTVPromotion({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#FC8902', '#E79F4C', '#EB850E', '#FFA439']}
        style={styles.container}>

        <Text style={styles.promotionText}>Jogos do Mengão{'\n'}Ao Vivo e Exclusivo{'\n'}na FlaTV+</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}