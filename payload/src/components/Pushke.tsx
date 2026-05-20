import React, { useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { DropZone } from './CoinButton';

interface Props {
  onLayout: (zone: DropZone) => void;
}

export default function Pushke({ onLayout }: Props) {
  const ref = useRef<View>(null);

  const handleLayout = () => {
    ref.current?.measure((_x, _y, width, height, pageX, pageY) => {
      onLayout({ x: pageX, y: pageY, width, height });
    });
  };

  return (
    <View ref={ref} onLayout={handleLayout} style={styles.container}>
      <Image
        source={require('../../assets/pushka.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
