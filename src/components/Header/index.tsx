import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { HeaderButton } from '../HeaderButton';
import { Profile } from '../Profile';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

import Logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
  const navigation = useNavigation();

  function handleOpenFlaTv() {
    navigation.navigate('FlaTvHome');
  }

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
        <HeaderButton icon="home-outline" title="Inicio" isActive />
        <HeaderButton icon="calendar-outline" title="Agenda" />
        <HeaderButton icon="football-outline" title="Partidas" />
        <HeaderButton icon="tv-outline" title="FlaTV+" onPress={handleOpenFlaTv} isPremium />
        <HeaderButton icon="ios-card-outline" title="Ingresso" />
        <HeaderButton icon="menu-outline" title="Menu" />
      </ScrollView>
    </View >
  );
}

export { Header };