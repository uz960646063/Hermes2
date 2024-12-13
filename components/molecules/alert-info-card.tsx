import {View, Text} from 'react-native';
import React from 'react';
import {Card, CardContent} from '../ui/card';
import {AlertTriangle} from '../../lib/icons/AlertTriangle';

interface AlertNews {
	title: string;
	description: string;
	time: string;
}

interface AlertInfoCardProps {
	news: AlertNews;
}

const AlertInfoCard = ({news}: AlertInfoCardProps) => {
	return (
		<Card className="bg-red-100 border-red-500 border-l-4 shadow-lg">
			<CardContent className="p-4">
				<View className="flex items-start space-x-2">
					<AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
					<View>
						<Text className="font-bold text-lg">{news.title}</Text>
						<Text className="text-sm text-gray-700 mt-1">
							{news.description}
						</Text>
						<Text className="text-xs text-gray-500 mt-2">
							{news.time}
						</Text>
					</View>
				</View>
			</CardContent>
		</Card>
	);
};

export default AlertInfoCard;
