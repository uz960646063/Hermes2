import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NotificationInfoCard, {
  NotificationItem,
} from '../../components/molecules/notification-info-card';
import {FlatList} from 'react-native-gesture-handler';

const mockNotifications: NotificationItem[] = [
  {
    title: 'System Alert',
    description: 'There is a critical system alert that needs your attention.',
    time: '10 minutes ago',
    severity: 'danger',
    status: 'odebrano',
  },
  {
    title: 'Warning Notification',
    description: 'This is a warning notification.',
    time: '20 minutes ago',
    severity: 'warning',
    status: 'oczekuje',
  },
  {
    title: 'Information Message',
    description: 'This is an informational message.',
    time: '30 minutes ago',
    severity: 'info',
    status: 'wygasło',
  },
  {
    title: 'Another Info',
    description: 'Another informational message.',
    time: '40 minutes ago',
    severity: 'info',
    status: 'odebrano',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="items-center">
      <FlatList
        contentContainerClassName="gap-4 p-1"
        data={mockNotifications}
        renderItem={({item}) => (
          <View className="w-full">
            <NotificationInfoCard notification={item} />
          </View>
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default HomeScreen;
