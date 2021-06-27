import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { HeaderButton } from '../HeaderButton';
import { Profile } from '../Profile';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Profile />
        <View>
          <Image source={Logo} />
        </View>
      </View>
      <ScrollView
        style={styles.buttons}
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 19, alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
        horizontal>
        <HeaderButton icon="home-outline" />
        <HeaderButton icon="calendar-outline" />
        <HeaderButton icon="football-outline" />
        <HeaderButton icon="tv-outline" />
        <HeaderButton icon="ios-card-outline" />
        <HeaderButton icon="menu-outline" />
      </ScrollView>
    </View >
  );
}

export { Header };