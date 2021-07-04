import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

type Props = {
  isGuest: boolean;
}

import EventIndicator from '../../assets/EventIndicator.png';
import EventIndicatorRight from '../../assets/EventIndicatorRight.png';
import HomeTeam from '../../assets/homeTeam.png';

export const EventBox = ({ isGuest = false }: Props) => {
  return (
    <View style={styles.container}>
      {
        isGuest && <Image source={EventIndicatorRight} style={styles.indicatorRight} />
      }
      <View style={styles.content}>
        <View style={styles.clubImage}>
          <Image style={styles.teamLogo} source={HomeTeam} />
        </View>
        <View style={styles.eventContent}>
          <Text style={styles.eventTitle}>Goooooooooool!!</Text>
          <Text style={styles.eventText}>Gabigol abre o placar para o mengão com um lindo chute no angulo do gol!</Text>
        </View>
      </View>
      {
        !isGuest && <Image source={EventIndicator} style={styles.indicator} />
      }
    </View>
  );
}