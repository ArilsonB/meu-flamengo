import React, { useRef, useState } from 'react';
import {
  View,
  Alert,
  Dimensions
} from 'react-native';

import { Video } from 'expo-av';

import { styles } from './styles';

export const Player = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const playerHeight = Dimensions.get('window').width / (16 / 9);

  function handleError() {
    Alert.alert('Video error', JSON.stringify(status));
  }

  return (
    <Video
      ref={video}
      resizeMode="contain"
      isLooping
      useNativeControls
      onError={handleError}
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      }}
      style={[styles.container, { height: playerHeight }]}
      onPlaybackStatusUpdate={status => setStatus(() => status)}>
    </Video>
  );
}