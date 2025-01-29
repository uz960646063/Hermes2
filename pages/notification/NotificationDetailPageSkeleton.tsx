import {View} from 'react-native';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {Skeleton} from '../../components/ui/skeleton';

export default function BombAlarmSkeleton() {
  return (
    <View className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 pb-8">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-2xl font-bold">
            <Skeleton className="h-8 w-32" />
          </CardTitle>
          <Skeleton className="h-6 w-20" />
        </CardHeader>
        <CardContent>
          <View className="gap-4">
            {[1, 2, 3].map(i => (
              <View key={i} className="flex items-center flex-row">
                <Skeleton className="w-5 h-5 mr-2" />
                <Skeleton className="h-4 w-3/4" />
              </View>
            ))}
          </View>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-32" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <View className="relative h-64 w-full rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full" />
          </View>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <View className="gap-4">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
