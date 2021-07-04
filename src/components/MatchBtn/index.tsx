import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = RectButtonProps & {
  title?: string;
  icon: string;
  isActive?: boolean;
  isPremium?: boolean;
}

export const MatchBtn = ({ title, icon, isActive = false, isPremium = false, ...rest }: Props) => {
  return (
    <RectButton
      style={styles.rect}
      {...rest}>
      <View style={isActive ? styles.containerActive : styles.container}>
        <Ionicons
          style={styles.icon}
          name={!icon ? 'home' : icon}
          size={24}
          color={isActive ? theme.colors.bgPrimary : theme.colors.white} />
        {title && <Text style={isActive ? styles.titleActive : styles.title}>{title}</Text>}
      </View>
    </RectButton>
  );
}