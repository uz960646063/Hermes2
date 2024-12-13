import {
	Facebook,
	Youtube,
	Twitter,
	Instagram,
	Search,
	Menu,
} from 'lucide-react-native';
import {View} from 'react-native';
import {Button} from '../ui/button';

const AppBar = () => {
	return (
		<View className="sticky top-0 z-10 bg-black text-white">
			<View className="flex items-center justify-between px-4 py-2">
				<View className="flex space-x-4">
					<Facebook size={20} />
					<Youtube size={20} />
					<Twitter size={20} />
					<Instagram size={20} />
				</View>
				<View className="flex items-center space-x-2">
					<Button variant="ghost" size="icon" className="text-white">
						<Search className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon" className="text-white">
						<Menu className="h-5 w-5" />
					</Button>
				</View>
			</View>
		</View>
	);
};
export default AppBar;
