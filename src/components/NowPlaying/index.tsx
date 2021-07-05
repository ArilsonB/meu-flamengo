import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';

import HomeTeam from '../../assets/homeTeam.png';
import GuestTeam from '../../assets/guestTeam.png';
import { LinearGradient } from 'expo-linear-gradient';

export function NowPlaying({ ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <View
        style={styles.container}>
        <Image
          style={styles.matchImg}
          source={{
            uri: ''
          }} />
        <View style={styles.matchInfo}>
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={['#FC8902', '#E79F4C', '#EB850E', '#FFA439']}
            style={styles.champBack}>
            <Text style={styles.champTitle}>Campeonato Brasileiro  -  Serie A 2021</Text>
          </LinearGradient>
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