import React from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

export type nextGameProps = {
  id: string;
  championship: string;
  round: string;
  gameDate: string;
  homeTeam: string;
  guestTeam: string;
}

type Props = TouchableOpacityProps & {
  data: nextGameProps;
}


import HomeTeam from '../../assets/homeTeam.png';
import GuestTeam from '../../assets/guestTeam.png';

export function NextMatch({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
      activeOpacity={0.8}>
      <View
        style={styles.content}>
        <View style={styles.teamLogos}>
          <View style={styles.team}>
            <Image style={styles.teamLogo} source={HomeTeam} />
            <Text style={[styles.teamName, { textAlign: 'center' }]}>{data.homeTeam}</Text>
          </View>
          <View>
            <Text style={styles.divider}>x</Text>
          </View>
          <View style={styles.team}>
            <Image style={styles.teamLogo} source={GuestTeam} />
            <Text style={[styles.teamName, { textAlign: 'center' }]}>{data.guestTeam}</Text>
          </View>
        </View>
        <View style={styles.champInfo}>
          <Text style={styles.info}>Brasileirão Serie A 2021</Text>
          <Text style={styles.info}>{data.round} Rodada</Text>
          <Text style={styles.info}>10 de Julho de 2021</Text>
        </View>
        <View style={styles.reserve}>
          <Text style={styles.reserveText}>Reservar Ingresso</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}