import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <Image
          style={styles.rounded}
          source={{ uri: 'https://github.com/arilsonb.png' }} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userType}>Sócio Urubu-Rei</Text>
        <Text style={styles.userName}>Arilson Bolivar Ferreira</Text>
      </View>
    </View>
  );
}