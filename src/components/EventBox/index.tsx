import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

import EventIndicator from '../../assets/EventIndicator.png';
import EventIndicatorRight from '../../assets/EventIndicatorRight.png';
import HomeTeam from '../../assets/homeTeam.png';

type Event = {
  id: string;
  type: string;
  teamId: string;
  isGuest: boolean | false;
  time: string;
  title: string;
  text: string;
}

type Props = {
  isGuest?: boolean;
  data?: Event;
}

export const EventBox = ({ data, isGuest = false }: Props) => {
  //isGuest = data.isGuest ? true : false;
  return (
    <View style={isGuest ? styles.containerRight : styles.container}>
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