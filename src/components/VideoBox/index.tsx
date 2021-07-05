import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

export const VideoBox = () => {
  return (
    <TouchableOpacity
      style={styles.container}>
      <View style={styles.videoWrapper}>
        <Image
          style={styles.thumb}
          source={{ uri: '' }} />
        <View
          style={styles.info}>
          <Text style={styles.title}>Olá Mundo !</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}