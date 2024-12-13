import {View, Image} from 'react-native';
import React from 'react';
import {Text} from '../ui/text';
import {Card, CardContent} from '../ui/card';
import {Button} from '../ui/button';
import {useNavigation} from '@react-navigation/native';

export interface BreakingNews {
	title: string;
	description: string;
	image: string;
	publishedAt: string;
	category: string;
}

interface MainInformationCardProps {
	breakingNews: BreakingNews;
}

const MainInfoCard = ({breakingNews}: MainInformationCardProps) => {
	const navigation = useNavigation();
	return (
		<Card className="overflow-hidden border-none shadow-lg">
			<CardContent className="p-0">
				<View className="flex flex-col md:flex-row">
					<View className="w-full md:w-1/2">
						<Image
							src={breakingNews.image}
							alt={breakingNews.title}
							className="w-full h-48 md:h-full object-cover"
						/>
					</View>
					<View className="w-full md:w-1/2 p-4 flex flex-col justify-between">
						<View>
							<View className="mb-2">
								<Text className="text-sm ">
									{breakingNews.category} •{' '}
									{breakingNews.publishedAt}
								</Text>
							</View>
							<Text className="text-xl font-bold mb-2">
								{breakingNews.title}
							</Text>
							<Text className="text-gray-600 text-sm">
								{breakingNews.description}
							</Text>
						</View>
						<Button
							className="mt-4 bg-red-600 hover:bg-red-700 w-fit"
							onPress={() => navigation.navigate('news-detail')}>
							<Text className="text-4xl font-bold ">
								ZOBACZ WIĘCEJ
							</Text>
						</Button>
					</View>
				</View>
			</CardContent>
		</Card>
	);
};

export default MainInfoCard;
