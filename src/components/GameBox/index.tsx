import React from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
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

export function GameBox({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text>{data.homeTeam}</Text>
      </View>
    </TouchableOpacity>
  );
}