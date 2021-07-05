import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  ScrollView,
  View,
  Text,
  FlatList
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

  const videos = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    }
  ];
  return (
    <BackgroundDark>
      <View style={styles.container}>
        <FlaTvHeader />
        <ScrollView
          contentContainerStyle={styles.contentFooter}
          style={styles.content}>
          <View>
            <FlaTvSlider />
          </View>
          <View>
            <SectionTitle title="Agora" />
            <NowPlaying onPress={openPlayer} />
          </View>
          <View>
            <SectionTitle title="Mais Conteúdos" />
            <FlatList
              data={videos}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.row}
              renderItem={({ item }) => <VideoBox />}
              style={styles.list}
              contentContainerStyle={{ paddingHorizontal: 24 }}
              ItemSeparatorComponent={() => <View style={{ height: 10, backgroundColor: 'transparent' }} />}
            />
          </View>
        </ScrollView>
      </View>
    </BackgroundDark>
  );
}