import React from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image
} from 'react-native';

import { styles } from './styles';

export type ScoreBoardProps = {
  home: string;
  guest: string;
}

export type GameProps = {
  id: string;
  championship: string;
  round: string;
  gameDate: string;
  homeTeam: string;
  guestTeam: string;
  scoreBoard: ScoreBoardProps;
}

type Props = TouchableOpacityProps & {
  data: GameProps;
}

import HomeTeam from '../../assets/homeTeam.png';
import GuestTeam from '../../assets/guestTeam.png';

export function GameBox({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={.8}>
      <View style={styles.content}>
        <View style={styles.championshipBg}>
          <Text style={styles.championshipName}>Campeonato Brasileiro Serie A 2021</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.gameInfo}>
            <Text style={styles.round}>10 Rodada  |  10/07</Text>
            <View style={styles.teamLogos}>
              <View>
                <Image style={styles.teamLogo} source={HomeTeam} />
              </View>
              <View style={styles.scoreBoard}>
                <Text style={styles.scoreText}>{data.scoreBoard.home}</Text>
                <Text style={styles.scoreTextDivider}>x</Text>
                <Text style={styles.scoreText}>{data.scoreBoard.guest}</Text>
              </View>
              <View>
                <Image style={styles.teamLogo} source={GuestTeam} />
              </View>
            </View>
          </View>
          <View style={styles.teams}>
            <Text style={[styles.teamName, { textAlign: 'left' }]}>{data.homeTeam}</Text>
            <Text style={[styles.teamName, { textAlign: 'right' }]}>{data.guestTeam}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

