/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {fetchCuriosityPhotos} from '../api/curiosity/endpoint';
import React from 'react';
import {useQuery} from 'react-query';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import PhotoCarousel from '../components/PhotoCarousel';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {data} = useQuery('curiosityPhotos', () => fetchCuriosityPhotos(100));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PhotoCarousel photos={data?.data?.photos ?? []} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex1: {
    flex: 1,
  },
});

export default App;
