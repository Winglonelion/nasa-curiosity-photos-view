import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {ICarouselPhotos} from './PhotoCarousel.types';

const {
  width: WINDOW_WIDTH,
  // height: WINDOW_HEIGHT
} = Dimensions.get('window');

interface IProps {
  photos: ICarouselPhotos[];
}

const PhotoCarousel: React.FC<IProps> = ({photos}) => {
  const renderItem = useCallback(({item}: {item: ICarouselPhotos}) => {
    console.log('SRC', item.img_src);
    return (
      <View style={styles.photoItem}>
        <FastImage
          style={styles.img}
          resizeMode="contain"
          source={{uri: item.img_src, cache: 'immutable'}}
        />
      </View>
    );
  }, []);

  const keyExtractor = useCallback(
    (item: ICarouselPhotos) => item.id.toString(),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        maxToRenderPerBatch={2}
        pagingEnabled
        style={styles.carousel}
        data={photos}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    height: '100%',
    width: '100%',
    borderWidth: 1,
  },
  carousel: {},
  photoItem: {
    borderWidth: 1,
    heigh: WINDOW_WIDTH,
    width: WINDOW_WIDTH,
  },
  img: {
    heigh: WINDOW_WIDTH,
    width: WINDOW_WIDTH,
  },
});

export default PhotoCarousel;
