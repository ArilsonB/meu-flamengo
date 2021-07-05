import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BackgroundDark } from '../../components/BackgroundDark';
import { EventBox } from '../../components/EventBox';
import { FlaTvHeader } from '../../components/FlaTvHeader';
import { MatchBtn } from '../../components/MatchBtn';
import { Player } from '../../components/Player';
import { SectionTitle } from '../../components/SectionTitle';

import { styles } from './styles';

export const FlaTvPlayer: React.FC = () => {

  return (
    <BackgroundDark>
      <View style={styles.container}>
        <FlaTvHeader />
        <View style={styles.player}>
          <Player />
          <LinearGradient
            colors={['transparent', '#333']}
            style={styles.playerInfo}>
            <Text style={styles.title}>Flamengo x Corinthians</Text>
          </LinearGradient>
        </View>
        <View style={styles.content}>
          <View
            style={styles.buttons}>
            <MatchBtn icon="home-outline" title="Eventos" />
            <MatchBtn icon="home-outline" title="Escalação" />
            <MatchBtn icon="home-outline" title="Estatisticas" />
            <MatchBtn icon="home-outline" title="Sobre" />
          </View>
          <SectionTitle
            title="Eventos de Jogo" />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.gameStatsContainer}
            style={styles.gameStats}>
            <EventBox isGuest />
            <EventBox />
            <EventBox isGuest />
            <EventBox />
            <EventBox />
            <EventBox isGuest />
          </ScrollView>
        </View>
      </View>
    </BackgroundDark>
  );
}