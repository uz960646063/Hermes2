import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/ui/button';
import {Text} from '../../components/ui/text';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<View className="items-center">
			<Text className="text-9xl text-black">HomeScreen</Text>
			<Button
				variant={'destructive'}
				onPress={() => navigation.navigate('showcase')}>
				<Text className="text-black">Destructive</Text>
			</Button>
		</View>
	);
};

export default HomeScreen;
