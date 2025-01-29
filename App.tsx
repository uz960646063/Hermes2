/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';

import React from 'react';
import {StyleSheet} from 'react-native';

import {
  NavigationContainer,
  Theme,
  ThemeProvider,
} from '@react-navigation/native';
import {NAV_THEME} from './lib/constants';
import {hydrateAuth, useAuth} from './core/auth';
import {loadSelectedTheme} from './core/hooks';
import {useThemeConfig} from './core/use-theme-config';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  KeyboardAvoidingView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {APIProvider} from './api/api-provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import ErrorBoundary from 'react-native-error-boundary';
import ErrorFallback from './pages/error/ErrorFallback';
import RootNavigator from './navigation/RootStack';
import {PortalHost} from '@rn-primitives/portal';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

hydrateAuth();
loadSelectedTheme();

export default function App() {
  const {status} = useAuth();

  return (
    <Providers>
      <RootNavigator isLoggedIn={status === 'signIn'} />
    </Providers>
  );
}

function Providers({children}: {children: React.ReactNode}) {
  const theme = useThemeConfig();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <GestureHandlerRootView
          style={styles.container}
          className={theme.dark ? `dark` : undefined}>
          <KeyboardProvider>
            <ThemeProvider value={theme}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <APIProvider>
                  <BottomSheetModalProvider>
                    {children}
                    <FlashMessage position="top" />
                    <PortalHost />
                  </BottomSheetModalProvider>
                </APIProvider>
              </ErrorBoundary>
            </ThemeProvider>
          </KeyboardProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
