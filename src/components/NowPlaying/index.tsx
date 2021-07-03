import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from './styles';

import HomeTeam from '../../assets/homeTeam.png';
import GuestTeam from '../../assets/guestTeam.png';

export function NowPlaying() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.matchImg}>

        </View>
        <View style={styles.matchInfo}>
          <View style={styles.champBack}>
            <Text style={styles.champTitle}>Campeonato Brasileiro  -  Serie A 2021</Text>
          </View>
          <View style={styles.teams}>
            <View style={styles.team}>
              <Text style={styles.teamName}>Flamengo</Text>
              <Image style={styles.teamLogo} source={HomeTeam} />
            </View>
            <View style={styles.scoreBoard}>
              <Text style={styles.scoreText}>2</Text>
              <Text style={styles.scoreTextDivider}>x</Text>
              <Text style={styles.scoreText}>2</Text>
            </View>
            <View style={styles.team}>
              <Text style={styles.teamName}>Corinthians</Text>
              <Image style={styles.teamLogo} source={GuestTeam} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}