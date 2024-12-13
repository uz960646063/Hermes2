import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import BoardingNavigator from './BoardingNavigator';

type RootNavigatorProps = {
  isLoggedIn: boolean;
};

const RootNavigator = ({isLoggedIn}: RootNavigatorProps) => {
  return isLoggedIn ? <AppNavigator /> : <BoardingNavigator />;
};

export default RootNavigator;
