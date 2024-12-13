import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../components/ui/card';
import {Badge} from '../../components/ui/badge';
import {Avatar, AvatarFallback, AvatarImage} from '../../components/ui/avatar';
import {Button} from '../../components/ui/button';
import {Text} from '../../components/ui/text';
import {View, Image, ScrollView} from 'react-native';
import {Bookmark} from '../../lib/icons/Bookmark';
import {Share2} from '../../lib/icons/Share';
import {Scroll} from 'lucide-react-native';

export interface NewsDetail {
	title: string;
	description: string;
	category: string;
	time: string;
}

interface DetailInfoPageProps {
	news: NewsDetail;
}

const DetailInfoPage = ({news}: DetailInfoPageProps) => {
	return (
		<ScrollView>
			<Card className="max-w-2xl mx-auto m-4">
				<CardHeader>
					<View className="flex justify-between items-start">
						<Badge variant="secondary" className="mb-2 w-auto">
							<Text>Technology</Text>
						</Badge>
						<View>
							<CardTitle className="text-2xl md:text-3xl mb-2">
								AI Breakthrough: New Model Surpasses Human
								Performance
							</CardTitle>
							<CardDescription className="text-sm text-muted-foreground">
								Published 2 hours ago
							</CardDescription>
						</View>
					</View>
				</CardHeader>
				<CardContent>
					<Image
						src="https://www.wojsko-polskie.pl/8fow/u/filer_public_thumbnails/52/31/5231ff32-9317-4840-84ac-cde36271d90e/3d2a6689.jpg__965x451_q85_crop_subsampling-2_upscale.jpg"
						alt="AI visualization"
						className="w-full h-48 object-cover  mb-4"
					/>
					<Text className="text-base mb-4">
						In a groundbreaking development, researchers at
						TechInnovate Labs have unveiled a new artificial
						intelligence model that has outperformed human experts
						in a series of complex problem-solving tasks. This
						milestone marks a significant leap forward in the field
						of AI and machine learning.
					</Text>
					<Text className="text-base">
						The model, dubbed "CogniSphere," demonstrated
						unprecedented capabilities in areas ranging from natural
						language processing to advanced mathematical
						computations. Experts believe this breakthrough could
						have far-reaching implications across variocecijaw diwj
						wiacj waicj wa dwakdijwiaodj wajdpowajd pwoajdaw
						dawoijdaw dijwaiodj waiofjwa d aowidj awiodj awoidjaw
						daiowjdioawjdoiawjus industries, including healthcare,
						finance, and scientific research.
					</Text>
				</CardContent>
				<CardFooter className="flex justify-between items-center">
					<View className="flex items-center space-x-2">
						<View>
							<Text className="text-sm font-medium">
								Jane Doe
							</Text>
							<Text className="text-xs text-muted-foreground">
								Tech Correspondent
							</Text>
						</View>
					</View>
					<View className="flex flex-row space-x-2 gap-2">
						<Button variant="outline" size="icon">
							<Bookmark className="h-4 w-4 text-primary" />
							<Text className="sr-only">Bookmark</Text>
						</Button>
						<Button variant="outline" size="icon">
							<Share2 className="h-4 w-4 text-primary" />
							<Text className="sr-only">Share</Text>
						</Button>
					</View>
				</CardFooter>
			</Card>
		</ScrollView>
	);
};

export default DetailInfoPage;
