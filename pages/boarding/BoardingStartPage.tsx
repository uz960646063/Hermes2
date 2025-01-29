import {View} from 'react-native';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {Button} from '../../components/ui/button';
import {Text} from '../../components/ui/text';
import {H1, H3, H4, P} from '../../components/ui/typography';
import {useNavigation} from '@react-navigation/native';
import {BoardingScreenNavigationProp} from '../../navigation/types';
import {BoardingRoutes} from '../../navigation/router';

const BoardingStartPage = () => {
  const navigation = useNavigation<BoardingScreenNavigationProp>();
  return (
    <View className="p-2 items-center justify-center flex-1">
      <Card>
        <CardHeader>
          <CardTitle>
            <H1 className="text-center">Witamy w Hermes 2.0</H1>
          </CardTitle>
          <CardDescription>
            <H4 className="text-center">Aplikacja do powiadamiania w RON</H4>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <P className="text-center text-gray-600">
            Jesteśmy szczęśliwi, że do nas dołączyłeś! Przed rozpoczęciem pracy
            z aplikacją Hermes 2.0, zapoznaj się z poniższymi informacjami.
          </P>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onPress={() => {
              navigation.navigate(BoardingRoutes.NumberInputPage);
            }}
            variant={'outline'}>
            <Text>Rozpocznij!</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
};

export default BoardingStartPage;
