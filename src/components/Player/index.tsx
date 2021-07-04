import React, { useRef, useState } from 'react';
import {
  View,
  Alert
} from 'react-native';

import { Video } from 'expo-av';

import { styles } from './styles';

export const Player = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

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
      style={styles.container}
      onPlaybackStatusUpdate={status => setStatus(() => status)}>
    </Video>
  );
}