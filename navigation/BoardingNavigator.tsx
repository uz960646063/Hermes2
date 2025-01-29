import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BoardingStackParamList} from './types';
import {BoardingRoutes} from './router';
import BoardingStartPage from '../pages/boarding/BoardingStartPage';
import PhoneInputScreen from '../pages/boarding/PhoneInputScreen';
import OTPInputPage from '../pages/boarding/OTPInputPage';

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
      <BoardingStack.Screen
        name={BoardingRoutes.NumberInputPage}
        component={PhoneInputScreen}
        options={{title: 'PhoneInputScreen', headerShown: false}}
      />
      <BoardingStack.Screen
        name={BoardingRoutes.OTPPage}
        component={OTPInputPage}
        options={{title: 'OTPInputPage', headerShown: false}}
      />
    </BoardingStack.Navigator>
  );
};

export default BoardingNavigator;
