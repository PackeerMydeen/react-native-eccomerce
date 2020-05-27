import React, { useState, useEffect, memo } from 'react';
import { StyleSheet, ScrollView, Platform, SafeAreaView } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header'
import Banner from './components/Banner';
import Brands from './components/Brands';

let customFonts = {
  'Product-Sans-Bold': require('./assets/fonts/Product-Sans-Bold.ttf'),
  'Product-Sans-Regular': require('./assets/fonts/Product-Sans-Regular.ttf'),
  'Spectral-Bold': require('./assets/fonts/Spectral-Bold.ttf'),
  'Product-Sans-Regular': require('./assets/fonts/Product-Sans-Regular.ttf'),
}


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadFontsAsync(customFonts); //loading custom fonts
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.appWrapper}>
        <Header title={'Sweatshirts Store'} />
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

export default memo(App)