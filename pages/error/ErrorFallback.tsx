import React from 'react';
import {View, Text, Button} from 'react-native';
import {FallbackComponentProps} from 'react-native-error-boundary';

const ErrorFallback = ({error, resetError}: FallbackComponentProps) => {
	return (
		<View className="flex-1 items-center justify-center bg-gray-100">
			<Text className="text-red-500 text-lg font-bold">
				Something went wrong:
			</Text>
			<Text>{error.message}</Text>
			<Button title="Spróbuj ponownie" onPress={resetError} />
		</View>
	);
};

export default ErrorFallback;
