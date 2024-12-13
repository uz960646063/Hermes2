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

const BoardingStartPage = () => {
  return (
    <View className="p-4 items-center justify-center flex-1">
      <Card>
        <CardHeader>
          <CardTitle>
            <Text>Welcome to Our Service</Text>
          </CardTitle>
          <CardDescription>
            <Text>Let's get you set up in just a few steps</Text>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="text-center text-gray-600">
            We're excited to have you on board. Click the button below to start
            the process.
          </Text>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onPress={() => {}} variant={'outline'}>
            <Text>Start Boarding</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
};

export default BoardingStartPage;
