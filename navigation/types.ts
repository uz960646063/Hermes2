// types.ts

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BoardingRoutes, AppRoutes} from './router';

export type BoardingStackParamList = {
  [BoardingRoutes.Boarding]: undefined;
  [BoardingRoutes.NumberInputPage]: undefined;
  [BoardingRoutes.OTPPage]: undefined;
};

export type AppStackParamList = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Profile]: undefined;
  [AppRoutes.Settings]: {theme?: 'light' | 'dark'};
  [AppRoutes.NotificationDetail]: {id: string};
  [AppRoutes.Alarm]: undefined;
};

export type AppScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export type BoardingScreenNavigationProp =
  NativeStackNavigationProp<BoardingStackParamList>;
