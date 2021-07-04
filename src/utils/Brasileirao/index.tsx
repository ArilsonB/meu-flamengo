import React from 'react';
import {
  View
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';
import { styles } from './styles';

export const Brasileirao: React.FC = () => {
  return (
    <View
      style={styles.container}>
      <Svg width="420" height="812">
        <Defs>
          <RadialGradient
            id="grad"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(187.5 406) rotate(90) scale(406 187.5)">
            <Stop offset="0" stopColor="#06620F" />
            <Stop offset="1" stopColor="#F9E110" />
          </RadialGradient>
        </Defs>
        <Rect width="420" height="812" fill="url(#grad)" />
      </Svg>
    </View>
  );
}