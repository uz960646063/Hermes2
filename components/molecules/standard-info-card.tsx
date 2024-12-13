import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../ui/text';
import {ChevronRight} from '../../lib/icons/ChevronRight';
import {Card} from '../ui/card';

export interface Article {
	title: string;
	category: string;
	image: string;
	publishedAt: string;
	unread: boolean;
}

interface StandardInfoCardProps {
	article: Article;
}

const StandardInfoCard = ({article}: StandardInfoCardProps) => {
	return (
		<TouchableOpacity>
			<Card className={`flex-row border border-gray-200 shadow-lg mb-4 `}>
				<Image
					source={{uri: article.image}}
					className="w-24 h-full "
					resizeMode="cover"
				/>
				<View className="flex flex-1 flex-col justify-between p-4">
					<View className="flex flex-row items-center gap-2">
						<Text className="text-sm font-semibold text-gray-500">
							{article.category} • {article.publishedAt}
						</Text>
						{article.unread && (
							<View className="rounded-full bg-red-500 ">
								<Text className="text-xs text-white p-1 font-bold">
									NOWY
								</Text>
							</View>
						)}
					</View>
					<Text className="text-lg font-bold text-gray-900 mb-1">
						{article.title}
					</Text>
				</View>
				<View className="justify-center pr-4">
					<ChevronRight className="h-5 w-5 text-gray-500" />
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default StandardInfoCard;
