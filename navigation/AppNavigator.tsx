import React from 'react';
import {AppStackParamList} from './types';
import {AppRoutes} from './router';
import HomeScreen from '../pages/home/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComponentsPreview from '../pages/components/ComponentsPreview';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={AppRoutes.Home}
        component={ComponentsPreview}
        options={{title: 'Home'}}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
