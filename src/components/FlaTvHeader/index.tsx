import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/FlaTVLogo.png';
import Badge from '../../assets/FlaTVBadge.png';

export function FlaTvHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} />
      </View>
      <View>
        <Image source={Badge} />
      </View>
    </View>
  );
}