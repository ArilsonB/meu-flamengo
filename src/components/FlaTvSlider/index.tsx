import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';
import { ExFlaTvPlus } from '../ExFlaTvPlus';

import { styles } from './styles';

export function FlaTvSlider() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://pbs.twimg.com/media/E5U8d6pXwAQXTr9?format=jpg&name=large' }} />
      <Text style={styles.title}>Flamengo: Uma Paixão sem fim.</Text>
      <ExFlaTvPlus />
    </View>
  );
}