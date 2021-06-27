import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';

import { styles } from './styles';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
