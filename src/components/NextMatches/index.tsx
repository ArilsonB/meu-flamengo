import React, { useState } from 'react';

import {
  FlatList,
  View
} from 'react-native';

import { nextGames } from '../../services/nextGames';
import { NextMatch, nextGameProps } from '../NextMatch';

import { styles } from './styles';

export function NextMatches() {
  const [gamesList, setGamesList] = useState<nextGameProps[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={nextGames}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <NextMatch data={item} />}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => <View style={{ height: 10, backgroundColor: 'transparent' }} />}
      />
    </View>
  );
}