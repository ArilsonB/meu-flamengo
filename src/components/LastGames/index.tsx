import React, { useEffect, useState } from 'react';

import {
  FlatList,
  View
} from 'react-native';

import { games } from '../../services/games';
import { GameBox, GameProps } from '../GameBox';

import { styles } from './styles';


export function LastGames() {
  const [gamesList, setGamesList] = useState<GameProps[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameBox data={item} />}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}