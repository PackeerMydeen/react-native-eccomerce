import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, SafeAreaView } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Headers from './components/Header'
import Banner from './components/Banner';
import Brands from './components/Brands';

let customFonts = {
  'Product-Sans-Bold': require('./assets/fonts/Product-Sans-Bold.ttf'),
  'Product-Sans-Regular': require('./assets/fonts/Product-Sans-Regular.ttf'),
  'Spectral-Bold': require('./assets/fonts/Spectral-Bold.ttf'),
  'Product-Sans-Regular': require('./assets/fonts/Product-Sans-Regular.ttf'),
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadFontsAsync(customFonts);
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.appWrapper}>
        <Headers />
        <Banner percent='45%' />
        <Brands />
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }

});
