import {Image, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {MapPin, AlertTriangle, Volume2, Phone} from 'lucide-react-native';
import {Badge} from '../../components/ui/badge';
import {Button} from '../../components/ui/button';
import {P} from '../../components/ui/typography';
import {Text} from '../../components/ui/text';
import {AppScreenNavigationProp} from '~/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../navigation/router';
import BombAlarmSkeleton from './NotificationDetailPageSkeleton';

interface AlarmDetails {
  status: string;
  location: string;
  timeRemaining: string;
  affectedRadius: string;
}

const NotificationDetailPage = () => {
  const navigation = useNavigation<AppScreenNavigationProp>();
  const [loading, setLoading] = useState(true);
  const [alarmDetails, setAlarmDetails] = useState<any>(null);

  useEffect(() => {
    // Simulate API call
    const fetchAlarmDetails = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      setAlarmDetails({
        id: '1',
        status: 'Active',
        location: 'Downtown Area',
        timeRemaining: '05:23',
        affectedRadius: '2.5 km',
      });
      setLoading(false);
    };

    fetchAlarmDetails();
  }, []);

  if (loading) {
    return <BombAlarmSkeleton />;
  }
  return (
    <ScrollView className="p-4" contentContainerClassName="pb-8">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-2xl font-bold">Bomb Alarm</CardTitle>
          <Badge
            variant={
              alarmDetails.status === 'Active' ? 'destructive' : 'outline'
            }>
            <Text>{alarmDetails.status}</Text>
          </Badge>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <View className="flex flex-row items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <P>{alarmDetails.location}</P>
            </View>
            <View className="flex flex-row items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
              <P>Time Remaining: {alarmDetails.timeRemaining}</P>
            </View>
            <View className="flex flex-row items-center">
              <Volume2 className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
              <P>Affected Radius: {alarmDetails.affectedRadius}</P>
            </View>
          </View>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant="destructive"
            onPress={() => navigation.navigate(AppRoutes.Alarm)}>
            <Text>Evacuate Now</Text>
          </Button>
        </CardFooter>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Location Map</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="https://staticmapmaker.com/img/google-placeholder.png"
              alt="Map showing bomb alarm location"
              className="w-full h-full object-cover"
            />
            <View className="absolute inset-0 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-3 py-1">
                <Text>Evacuation Zone</Text>
              </Badge>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="gap-2">
            <View>
              <Button
                variant="outline"
                className="flex-row justify-start gap-4">
                <Phone className="w-4 h-4 mr-2" />
                <Text>Emergency Services: 911</Text>
              </Button>
            </View>
            <View>
              <Button
                variant="outline"
                className="justify-start flex-row gap-4">
                <Phone className="w-4 h-4 mr-2" />
                <Text>Fire Department: 555-6789</Text>
              </Button>
            </View>
            <View>
              <Button
                variant="outline"
                className="flex-row justify-start gap-4">
                <Phone className="w-4 h-4 mr-2" />
                <Text>Police Department: 555-1234</Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
};

export default NotificationDetailPage;
