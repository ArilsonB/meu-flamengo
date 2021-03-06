import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
  title?: string;
  icon: string;
  isActive?: boolean;
  isPremium?: boolean;
}

export function HeaderButton({ title, icon, isActive = false, isPremium = false, ...rest }: Props) {
  return (
    <RectButton
      {...rest}>
      <View style={isActive ? styles.containerActive : styles.container}>
        <Ionicons
          style={styles.icon}
          name={icon}
          size={24}
          color={isActive ? theme.colors.bgPrimary : theme.colors.white} />
        {title && <Text style={isActive ? styles.titleActive : styles.title}>{title}</Text>}
      </View>
    </RectButton>
  );
}