import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, I18nManager } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import PaymentScreen from './src/screens/PaymentScreen';

I18nManager.forceRTL(true);

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Home: undefined;
  Payment: { total: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ presentation: 'modal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
