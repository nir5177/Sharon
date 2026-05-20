import { Audio } from 'expo-av';

const SOUND_FILES = [
  require('../../assets/coin.mp3'),
  require('../../assets/coin2.mp3'),
  require('../../assets/coin3.mp3'),
  require('../../assets/coin4.mp3'),
];

let soundObjects: Audio.Sound[] = [];
let loaded = false;

export async function preloadSounds(): Promise<void> {
  if (loaded) return;
  await Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    staysActiveInBackground: false,
    shouldDuckAndroid: false,
  });
  soundObjects = await Promise.all(
    SOUND_FILES.map(async (file) => {
      const { sound } = await Audio.Sound.createAsync(file, { volume: 1.0 });
      return sound;
    })
  );
  loaded = true;
}

export async function playRandomCoinSound(): Promise<void> {
  if (!loaded || soundObjects.length === 0) return;
  const sound = soundObjects[Math.floor(Math.random() * soundObjects.length)];
  try {
    await sound.stopAsync();
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch {
    // Audio errors are non-fatal — coin drop still registers
  }
}

export async function unloadSounds(): Promise<void> {
  await Promise.all(soundObjects.map((s) => s.unloadAsync()));
  soundObjects = [];
  loaded = false;
}
