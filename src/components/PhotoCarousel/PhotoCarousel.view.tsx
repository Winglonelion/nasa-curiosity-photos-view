import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PhotoCarousel = () => {
  return (
    <View style={styles.container}>
      <Text>PhotoCarousel.view</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    heiht: 100,
    width: '100%',
    flexDirection: 'row',
  },
});

export default PhotoCarousel;
