import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Card, CardContent} from '../ui/card';
import {AlertTriangle} from '../../lib/icons/AlertTriangle';
import {AlertCircle} from '../../lib/icons/Alert';
import {Info} from '../../lib/icons/Info';
import {MoreVertical} from '../../lib/icons/MoreVertical';
import {Text} from '../ui/text';
import {AppScreenNavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../navigation/router';

export interface NotificationItem {
  title: string;
  description: string;
  time: string;
  severity: 'danger' | 'warning' | 'info';
  status: 'odebrano' | 'oczekuje' | 'wygasło';
}

interface NotificationInfoCardProps {
  notification: NotificationItem;
}

const NotificationInfoCard = ({notification}: NotificationInfoCardProps) => {
  const navigation = useNavigation<AppScreenNavigationProp>();
  const getBackgroundColor = (severity: string) => {
    switch (severity) {
      case 'danger':
        return 'bg-red-100 border-red-500';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500';
      case 'info':
        return 'bg-blue-100 border-blue-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'odebrano':
        return 'bg-green-100 text-green-800';
      case 'oczekuje':
        return 'bg-yellow-100 text-yellow-800';
      case 'wygasło':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = (severity: string) => {
    switch (severity) {
      case 'danger':
        return (
          <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
        );
      case 'warning':
        return (
          <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
        );
      case 'info':
        return <Info className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />;
      default:
        return (
          <AlertTriangle className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
        );
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(AppRoutes.NotificationDetail, {id: '1234'})
      }>
      <Card
        className={`${getBackgroundColor(
          notification.severity,
        )} border-l-4 shadow-lg`}>
        <CardContent className="p-2">
          <View className="flex flex-row items-start justify-between">
            <View className="flex flex-row items-center gap-2 space-x-2">
              {getIcon(notification.severity)}
              <View className="flex-1">
                <Text className="font-bold text-lg">{notification.title}</Text>
                <Text className="text-sm text-gray-700 mt-1 flex-w">
                  {notification.description}
                </Text>
                <Text className="text-xs text-gray-500 mt-2">
                  {notification.time}
                </Text>
              </View>
              <View
                className={`mt-2 px-2 py-1 rounded-full border-hairline ${getStatusBadgeColor(
                  notification.status,
                )}`}>
                <Text className="text-xs font-semibold ">
                  {notification.status}
                </Text>
              </View>
            </View>
          </View>
        </CardContent>
      </Card>
    </TouchableOpacity>
  );
};

export default NotificationInfoCard;
