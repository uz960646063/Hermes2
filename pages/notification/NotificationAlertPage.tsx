'use client';

import {useState} from 'react';
import {Button} from '../../components/ui/button';
import {Input} from '../../components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {AlertTriangle, Lock, CheckCircle} from 'lucide-react-native';
import {KeyboardAvoidingView, View} from 'react-native';
import {P} from '../../components/ui/typography';
import {Text} from '../../components/ui/text';

const INITIAL_CODE = '1234';
const CONFIRMATION_CODE = '5678';

export default function AlarmPage() {
  const [stage, setStage] = useState<
    'initial' | 'alarm' | 'confirmation' | 'completed'
  >('initial');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const onChangeText = (text: string) => {
    setCode(text);
  };

  const handleSubmit = () => {
    setError('');

    if (stage === 'initial' && code === INITIAL_CODE) {
      setStage('alarm');
      setCode('');
    } else if (stage === 'confirmation' && code === CONFIRMATION_CODE) {
      setStage('completed');
    } else {
      setError('Incorrect code. Please try again.');
    }
  };

  const handleConfirmation = () => {
    setStage('confirmation');
    setCode('');
  };

  return (
    <KeyboardAvoidingView>
      <View className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {stage === 'initial' && 'Secret Alarm'}
              {stage === 'alarm' && 'Alarm Message'}
              {stage === 'confirmation' && 'Confirm Understanding'}
              {stage === 'completed' && 'Alarm Acknowledged'}
            </CardTitle>
            <CardDescription className="text-center">
              {stage === 'initial' && 'Enter the code to read the secret alarm'}
              {stage === 'alarm' && 'Read the alarm message carefully'}
              {stage === 'confirmation' && 'Enter the confirmation code'}
              {stage === 'completed' && 'Thank you for acknowledging the alarm'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {stage === 'initial' && (
              <View className="gap-2">
                <View className="flex items-center gap-2">
                  <Lock className="text-gray-500" />
                  <Input
                    keyboardType="visible-password"
                    placeholder="Enter access code"
                    value={code}
                    onChangeText={onChangeText}
                    className="w-full"
                  />
                </View>
                {error && <P className="text-red-500 text-sm">{error}</P>}
                <Button
                  variant={'default'}
                  onPress={() => handleSubmit()}
                  className="w-full">
                  <Text>Access Alarm</Text>
                </Button>
              </View>
            )}
            {stage === 'alarm' && (
              <View className="gap-4">
                <View className="flex items-center gap-2 text-red-500">
                  <AlertTriangle size={70} color={'red'} />
                  <P className="font-bold text-xl">Urgent Alarm Message</P>
                </View>
                <P className="text-center">
                  This is a secret alarm message. There is an urgent situation
                  that requires your immediate attention. Please follow the
                  emergency protocols and contact your supervisor as soon as
                  possible.
                </P>
                <Button onPress={handleConfirmation} className="w-full">
                  <Text>I Understand</Text>
                </Button>
              </View>
            )}
            {stage === 'confirmation' && (
              <View className="gap-4">
                <View className="flex items-center gap-4">
                  <Lock className="text-gray-500" size={50} />
                  <Input
                    keyboardType="visible-password"
                    placeholder="Enter confirmation code"
                    value={code}
                    onChangeText={onChangeText}
                    className="w-full"
                  />
                </View>
                {error && <P className="text-red-500 text-sm">{error}</P>}
                <Button variant="default" className="w-full">
                  <Text>Confirm Understanding</Text>
                </Button>
              </View>
            )}
            {stage === 'completed' && (
              <View className="flex flex-col items-center space-y-4">
                <CheckCircle className="text-green-500 w-16 h-16" />
                <P className="text-center">
                  You have successfully acknowledged the alarm. Please take
                  necessary actions as instructed.
                </P>
              </View>
            )}
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            <P>For emergencies, contact your supervisor immediately.</P>
          </CardFooter>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
}
