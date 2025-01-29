import React from 'react';
import {AppStackParamList} from './types';
import {AppRoutes} from './router';
import HomeScreen from '../pages/home/index';
import {UserCircle2} from '../lib/icons/User';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import ComponentsPreview from '../pages/components/ComponentsPreview';
import UserMenuButton from '../components/molecules/user-menu-button';
import ProfilePage from '../pages/profile/ProfilePage';
import NotificationDetailPage from '../pages/notification/NotificationDetailPage';
import AlarmPage from '../pages/notification/NotificationAlertPage';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerRight: () => <UserMenuButton />,
      }}>
      <AppStack.Screen
        name={AppRoutes.Home}
        component={HomeScreen}
        options={{title: 'Hermes 2.0'}}
      />
      <AppStack.Screen
        name={AppRoutes.Profile}
        component={ProfilePage}
        options={{title: 'Profil'}}
      />
      <AppStack.Screen
        name={AppRoutes.NotificationDetail}
        component={NotificationDetailPage}
        options={{title: 'Szczegóły'}}
      />
      <AppStack.Screen
        name={AppRoutes.Alarm}
        component={AlarmPage}
        options={{title: 'Alarm'}}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
