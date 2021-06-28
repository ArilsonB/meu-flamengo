import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_100Thin, Poppins_200ExtraLight, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent />
      <Routes />
    </>
  );
}

export default App;