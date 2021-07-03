import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { BackgroundDark } from '../../components/BackgroundDark';
import { FlaTvHeader } from '../../components/FlaTvHeader';
import { FlaTvSlider } from '../../components/FlaTvSlider';
import { NowPlaying } from '../../components/NowPlaying';
import { SectionTitle } from '../../components/SectionTitle';

import { styles } from './styles';

export function FlaTvHome() {
  return (
    <BackgroundDark>
      <View style={styles.container}>
        <FlaTvHeader />

        <View style={styles.content}>
          <View>
            <FlaTvSlider />
          </View>
          <View>
            <SectionTitle title="Agora" />
            <NowPlaying />
          </View>
        </View>

      </View>
    </BackgroundDark>
  );
}