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
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {data} = useQuery('curiosityPhotos', () => fetchCuriosityPhotos(5));
  console.log('🚀 ~ file: App.tsx ~ line 27 ~ App ~ data', data);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        style={styles.flex1}
        contentInsetAdjustmentBehavior="automatic">
        <View />
      </ScrollView>
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
