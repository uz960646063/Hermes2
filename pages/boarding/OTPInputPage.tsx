import {TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {H3, P} from '../../components/ui/typography';
import {Button} from '../../components/ui/button';
import {Text} from '../../components/ui/text';
import {OtpInput} from 'react-native-otp-entry';
import {signIn} from '../../core';

const OTPInputPage = () => {
  const [timer, setTimer] = useState(25);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResendCode = () => {
    setTimer(25);
    // Add logic to resend the code here
  };

  function onFilled(code: string) {
    console.log(`Code is ${code}`);
    signIn({
      access: 'token',
      refresh: '1234567890',
    });
  }

  return (
    <View className="flex-1 items-center justify-center p-2">
      <Card>
        <CardHeader>
          <CardTitle>
            <H3 className="text-center">Wprowadź kod weryfikacyjny</H3>
          </CardTitle>
          <CardDescription>
            <P className="text-center text-gray-600">
              Podaj kod weryfikacyjny, który otrzymałeś w wiadomości SMS
            </P>
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-2">
          <OtpInput onFilled={onFilled} />
          <View className="flex-row justify-center gap-4">
            <P className="text-gray-600">Nie otrzymałeś kodu?</P>
            <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
              <Text className="font-bold">
                {timer > 0 ? `Wyślij ponownie za ${timer}s` : 'Wyślij ponownie'}
              </Text>
            </TouchableOpacity>
          </View>
        </CardContent>
      </Card>
    </View>
  );
};

export default OTPInputPage;
