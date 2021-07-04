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
          <View style={styles.playerInfo}>
            <Player />
            <View>
              <Text>
                Flamengo x Corinthians
              </Text>
            </View>
          </View>
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
            <View style={styles.homeTeam}>
              <EventBox />
              <EventBox />
              <EventBox />
              <EventBox />
              <EventBox />
              <EventBox />
              <EventBox />
            </View>
            <View style={styles.divider}>

            </View>
            <View style={styles.guestTeam}>
              <EventBox isGuest />
              <EventBox isGuest />
              <EventBox isGuest />
              <EventBox isGuest />
              <EventBox isGuest />
            </View>
          </ScrollView>
        </View>
      </View>
    </BackgroundDark>
  );
}