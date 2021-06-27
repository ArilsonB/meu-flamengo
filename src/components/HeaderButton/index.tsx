import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Pressable,
  PressableProps,
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';

type Props = PressableProps & {
  title?: string;
  icon: string,
}

export function HeaderButton({ title, icon, ...rest }: Props) {
  return (
    <Pressable
      style={styles.container}
      {...rest}>
      <Ionicons
        name={icon}
        size={24}
        color={theme.colors.white} />
    </Pressable>
  );
}