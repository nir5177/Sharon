import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import type { DropZone } from '../components/CoinButton';
import CoinButton from '../components/CoinButton';
import Pushke from '../components/Pushke';
import { COINS } from '../data/coinImages';
import { preloadSounds, playRandomCoinSound } from '../components/AudioEngine';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const EMPTY_ZONE: DropZone = { x: 0, y: 0, width: 0, height: 0 };

export default function HomeScreen({ navigation }: Props) {
  const [total, setTotal] = useState(0);
  const [dropZone, setDropZone] = useState<DropZone>(EMPTY_ZONE);

  useEffect(() => {
    preloadSounds();
  }, []);

  const handleCoinDropped = useCallback((denomination: number) => {
    playRandomCoinSound();
    setTotal((prev) => Math.round((prev + denomination) * 100) / 100);
  }, []);

  const handleEmptyPushka = () => {
    if (total === 0) return;
    navigation.navigate('Payment', { total });
  };

  const formattedTotal = total.toLocaleString('he-IL', {
    style: 'currency',
    currency: 'ILS',
    minimumFractionDigits: total % 1 === 0 ? 0 : 2,
  });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>פושקוין</Text>
          <Text style={styles.subtitle}>חב"ד ק.בורוכוב ותל גנים</Text>
        </View>

        {/* Total */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>סכום לתרומה</Text>
          <Text style={styles.totalAmount}>{formattedTotal}</Text>
        </View>

        {/* Pushka drop target */}
        <View style={styles.pushkaContainer}>
          <Pushke onLayout={setDropZone} />
        </View>

        {/* Coin tray */}
        <View style={styles.coinTray}>
          {COINS.map((coin) => (
            <CoinButton
              key={coin.id}
              denomination={coin.denomination}
              image={coin.image}
              size={coin.size}
              dropZone={dropZone}
              onDropped={handleCoinDropped}
            />
          ))}
        </View>

        {/* Empty Pushka button */}
        <TouchableOpacity
          style={[styles.emptyButton, total === 0 && styles.emptyButtonDisabled]}
          onPress={handleEmptyPushka}
          disabled={total === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.emptyButtonText}>רוקן את הפושקה 🪙</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const GOLD = '#C5A028';
const DARK = '#1a1a1a';
const BG = '#f5f0e8';

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: BG,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? 24 : 0,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    paddingTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: DARK,
    textAlign: 'center',
    writingDirection: 'rtl',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
    writingDirection: 'rtl',
  },
  totalContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  totalLabel: {
    fontSize: 13,
    color: '#888',
    writingDirection: 'rtl',
  },
  totalAmount: {
    fontSize: 42,
    fontWeight: '800',
    color: GOLD,
    marginTop: 2,
  },
  pushkaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinTray: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  emptyButton: {
    backgroundColor: GOLD,
    borderRadius: 16,
    paddingHorizontal: 40,
    paddingVertical: 16,
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  emptyButtonDisabled: {
    backgroundColor: '#ccc',
    shadowOpacity: 0,
    elevation: 0,
  },
  emptyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    writingDirection: 'rtl',
  },
});
