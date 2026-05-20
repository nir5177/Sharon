import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>;

const BIT_PHONE = '0508100010';
const PAYBOX_PHONE = '0508100010';

// Bit: Android Intent URI for the Bit app
const buildBitUrl = (amount: number) =>
  `intent://payment?phone=${BIT_PHONE}&amount=${Math.floor(amount)}` +
  `#Intent;scheme=bit;package=com.bnhp.payments.paymentsapp;` +
  `S.browser_fallback_url=https%3A%2F%2Fwww.bitpay.co.il;end`;

// PayBox: deep link with fallback to browser
const buildPayBoxUrl = (amount: number) =>
  `payboxapp://transfer?phone=${PAYBOX_PHONE}&amount=${Math.floor(amount)}`;

const buildPayBoxFallback = (amount: number) =>
  `https://payboxapp.page.link/?phone=${PAYBOX_PHONE}&amount=${Math.floor(amount)}`;

export default function PaymentScreen({ route, navigation }: Props) {
  const { total } = route.params;
  const [loading, setLoading] = useState<'bit' | 'paybox' | null>(null);

  const formattedTotal = total.toLocaleString('he-IL', {
    style: 'currency',
    currency: 'ILS',
    minimumFractionDigits: total % 1 === 0 ? 0 : 2,
  });

  const openUrl = async (url: string, fallback?: string): Promise<boolean> => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        return true;
      } else if (fallback) {
        await Linking.openURL(fallback);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const handleBit = async () => {
    setLoading('bit');
    const success = await openUrl(buildBitUrl(total));
    setLoading(null);
    if (!success) {
      Alert.alert('אפליקציית ביט לא נמצאה', 'הורד את ביט מחנות האפליקציות ונסה שוב.', [
        { text: 'אישור' },
      ]);
      return;
    }
    navigation.goBack();
  };

  const handlePayBox = async () => {
    setLoading('paybox');
    const success = await openUrl(buildPayBoxUrl(total), buildPayBoxFallback(total));
    setLoading(null);
    if (!success) {
      Alert.alert('אפליקציית פיי-בוקס לא נמצאה', 'הורד את PayBox מחנות האפליקציות ונסה שוב.', [
        { text: 'אישור' },
      ]);
      return;
    }
    navigation.goBack();
  };

  const handleCancel = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>שליחת תרומה</Text>
        <Text style={styles.subtitle}>הפושקה מכילה</Text>
        <Text style={styles.amount}>{formattedTotal}</Text>
        <Text style={styles.destination}>לחב"ד ק.בורוכוב ותל גנים</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.bitButton]}
            onPress={handleBit}
            disabled={loading !== null}
            activeOpacity={0.85}
          >
            {loading === 'bit' ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>שלח דרך ביט 💙</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.payboxButton]}
            onPress={handlePayBox}
            disabled={loading !== null}
            activeOpacity={0.85}
          >
            {loading === 'paybox' ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>שלח דרך PayBox 💚</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelText}>בטל</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f0e8' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
    writingDirection: 'rtl',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    writingDirection: 'rtl',
  },
  amount: {
    fontSize: 52,
    fontWeight: '800',
    color: '#C5A028',
    marginVertical: 8,
  },
  destination: {
    fontSize: 15,
    color: '#444',
    marginBottom: 40,
    writingDirection: 'rtl',
  },
  buttons: {
    width: '100%',
    gap: 14,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  bitButton: {
    backgroundColor: '#0040C0',
    shadowColor: '#0040C0',
  },
  payboxButton: {
    backgroundColor: '#00A651',
    shadowColor: '#00A651',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    writingDirection: 'rtl',
  },
  cancelButton: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  cancelText: {
    color: '#888',
    fontSize: 16,
  },
});
