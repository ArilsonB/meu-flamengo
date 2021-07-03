import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Text,
  Pressable,
  PressableProps,
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = PressableProps & {
  title?: string;
  icon: string;
  isActive?: boolean;
}

export function HeaderButton({ title, icon, isActive = false, ...rest }: Props) {
  return (
    <Pressable
      style={isActive ? styles.containerActive : styles.container}
      {...rest}>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={24}
        color={isActive ? theme.colors.bgPrimary : theme.colors.white} />
      {title && <Text style={isActive ? styles.titleActive : styles.title}>{title}</Text>}
    </Pressable>
  );
}