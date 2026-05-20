import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

export interface DropZone {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  denomination: number;
  image: ReturnType<typeof require>;
  size: number;
  dropZone: DropZone;
  onDropped: (denomination: number) => void;
}

const SPRING_CONFIG = { damping: 15, stiffness: 200 };

export default function CoinButton({ denomination, image, size, dropZone, onDropped }: Props) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const zIndex = useSharedValue(1);

  const handleDropped = (amount: number) => {
    onDropped(amount);
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      scale.value = withSpring(1.25, SPRING_CONFIG);
      zIndex.value = 100;
    })
    .onUpdate((e) => {
      translateX.value = e.translationX;
      translateY.value = e.translationY;
    })
    .onEnd((e) => {
      const inZone =
        e.absoluteX >= dropZone.x &&
        e.absoluteX <= dropZone.x + dropZone.width &&
        e.absoluteY >= dropZone.y &&
        e.absoluteY <= dropZone.y + dropZone.height;

      if (inZone) {
        scale.value = withTiming(0, { duration: 200 });
        opacity.value = withTiming(0, { duration: 200 }, () => {
          runOnJS(handleDropped)(denomination);
          translateX.value = 0;
          translateY.value = 0;
          scale.value = 1;
          opacity.value = 1;
          zIndex.value = 1;
        });
      } else {
        translateX.value = withSpring(0, SPRING_CONFIG);
        translateY.value = withSpring(0, SPRING_CONFIG);
        scale.value = withSpring(1, SPRING_CONFIG);
        zIndex.value = 1;
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
    zIndex: zIndex.value,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image source={image} style={{ width: size, height: size }} resizeMode="contain" />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});
