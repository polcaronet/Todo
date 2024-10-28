import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/Screens/Home';
import { useFonts, Lemon_400Regular } from '@expo-google-fonts/lemon';
import { DancingScript_400Regular, DancingScript_500Medium, DancingScript_600SemiBold, DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
export default function App() {

  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Lemon_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
      <StatusBar 
       barStyle="light-content"
       backgroundColor="transparent"
       translucent 
      />
      <Home/>
    </>
  );
}

