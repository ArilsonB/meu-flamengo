import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  ScrollView,
  View,
  Text
} from 'react-native';
import { BackgroundDark } from '../../components/BackgroundDark';
import { FlaTvHeader } from '../../components/FlaTvHeader';
import { FlaTvSlider } from '../../components/FlaTvSlider';
import { NowPlaying } from '../../components/NowPlaying';
import { SectionTitle } from '../../components/SectionTitle';
import { VideoBox } from '../../components/VideoBox';

import { styles } from './styles';

export const FlaTvHome: React.FC = () => {

  const navigation = useNavigation();

  function openPlayer() {
    navigation.navigate('FlaTvPlayer');
  }

  return (
    <BackgroundDark>
      <View style={styles.container}>
        <FlaTvHeader />
        <ScrollView style={styles.content}>
          <View>
            <FlaTvSlider />
          </View>
          <View>
            <SectionTitle title="Agora" />
            <NowPlaying onPress={openPlayer} />
          </View>
          <View>
            <SectionTitle title="Mais Conteúdos" />
            <View>
              <VideoBox />
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundDark>
  );
}