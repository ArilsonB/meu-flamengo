import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Background } from '../../components/Background';
import { Brasileirao } from '../../utils/Brasileirao';

import { styles } from './styles';

export const Championship: React.FC = () => {
  return (
    <Background>
      <Brasileirao />
      <Text>Olá mundo!</Text>
    </Background>
  );
}