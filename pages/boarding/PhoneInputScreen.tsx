import {View} from 'react-native';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {Input} from '../../components/ui/input';
import {H1, H3, P} from '../../components/ui/typography';
import {Button} from '../../components/ui/button';
import {Text} from '../../components/ui/text';
import {useNavigation} from '@react-navigation/native';
import {BoardingScreenNavigationProp} from '../../navigation/types';
import {BoardingRoutes} from '../../navigation/router';

const PhoneInputScreen = () => {
  const navigation = useNavigation<BoardingScreenNavigationProp>();
  return (
    <View className="flex-1 items-center justify-center p-2">
      <Card>
        <CardHeader>
          <CardTitle>
            <H3 className="text-center">Wprowadź swój numer telefonu</H3>
          </CardTitle>
          <CardDescription>
            <P className="text-center text-gray-600">
              Podaj swój numer telefonu, abyśmy mogli potwierdzić Twoją
              tożsamość
            </P>
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-2">
          <Input placeholder="Numer telefonu" keyboardType="phone-pad" />
          <Button
            onPress={() => {
              navigation.navigate(BoardingRoutes.OTPPage);
            }}>
            <Text>Wyślij kod weryfikacyjny</Text>
          </Button>
        </CardContent>
      </Card>
    </View>
  );
};

export default PhoneInputScreen;
