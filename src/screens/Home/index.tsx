import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Background } from '../../components/Background';
import { FlaTVPromotion } from '../../components/FlaTVPromotion';
import { Header } from '../../components/Header';
import { LastGames } from '../../components/LastGames';
import { NextMatches } from '../../components/NextMatches';
import { SectionTitle } from '../../components/SectionTitle';

import { styles } from './styles';

export const Home: React.FC = () => {

  const navigation = useNavigation();

  function handleOpenFlaTvMais() {
    navigation.navigate('FlaTvHome');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Header />
        <ScrollView
          style={styles.content}
          contentContainerStyle={{ paddingBottom: 24 }}>
          <View>
            <SectionTitle title="Ultimas partidas" />
            <LastGames />
          </View>
          <View>
            <SectionTitle title="Próximas Partidas" />
            <NextMatches />
          </View>
          <View>
            <SectionTitle title="Exclusivo FlaTV+" />
            <FlaTVPromotion onPress={handleOpenFlaTvMais} />
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}
