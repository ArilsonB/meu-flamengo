import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { LastGames } from '../../components/LastGames';
import { SectionTitle } from '../../components/SectionTitle';

import { styles } from './styles';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <SectionTitle title="Ultimas partidas" />
        <LastGames />
      </View>
    </View>
  );
}
