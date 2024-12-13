import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList, BoardingStackParamList} from './types';
import {AppRoutes, BoardingRoutes} from './router';
import HomeScreen from '../pages/home/index';
import ComponentsPreview from '../pages/components/ComponentsPreview';
import BoardingStartPage from '../pages/boarding/BoardingStartPage';

// Importy ekranów

const BoardingStack = createNativeStackNavigator<BoardingStackParamList>();

const BoardingNavigator = () => {
  return (
    <BoardingStack.Navigator>
      <BoardingStack.Screen
        name={BoardingRoutes.Boarding}
        component={BoardingStartPage}
        options={{title: 'Boarding', headerShown: false}}
      />
    </BoardingStack.Navigator>
  );
};

export default BoardingNavigator;
