import React from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {Button} from '../../components/ui/button';
import {Card} from '../../components/ui/card';
import {Checkbox} from '../../components/ui/checkbox';
import {Input} from '../../components/ui/input';
import {Text} from '../../components/ui/text';
import MainInfoCard, {
  BreakingNews,
} from '../../components/molecules/main-info-card';
import AlertInfoCard from '../../components/molecules/alert-info-card';
import StandardInfoCard, {
  Article,
} from '../../components/molecules/standard-info-card';

const ComponentsPreview = () => {
  const news: BreakingNews = {
    title: 'Alarm przeciwlotniczy w województwie podkarpackim',
    description:
      'Ogłoszono alarm przeciwlotniczy w związku z niezidentyfikowanym obiektem latającym. Prosimy o zachowanie spokoju i stosowanie się do poleceń służb.',
    image:
      'https://www.wojsko-polskie.pl/8fow/u/filer_public_thumbnails/54/a5/54a56b21-8128-4daf-8beb-f221e0298a62/gopr0249.jpg__965x451_q85_crop_subsampling-2_upscale.jpg',
    publishedAt: '10 min temu',
    category: 'Bezpieczeństwo',
  };

  const breakingNews = [
    {
      title: 'Alarm przeciwlotniczy w województwie podkarpackim',
      description:
        'Ogłoszono alarm przeciwlotniczy w związku z niezidentyfikowanym obiektem latającym. Prosimy o zachowanie spokoju i stosowanie się do poleceń służb.',
      time: '10 min temu',
    },
    {
      title: 'Rozpoczęcie ćwiczeń NATO na Bałtyku',
      description:
        "Dziś o świcie rozpoczęły się wielonarodowe ćwiczenia morskie NATO 'Baltic Guardian'. Polskie siły morskie biorą aktywny udział.",
      time: '1h temu',
    },
  ];

  const articles: Article[] = [
    {
      title: 'Alarm przeciwlotniczy w województwie podkarpackim',
      category: 'Bezpieczeństwi',
      image:
        'https://www.wojsko-polskie.pl/8fow/u/filer_public_thumbnails/54/a5/54a56b21-8128-4daf-8beb-f221e0298a62/gopr0249.jpg__965x451_q85_crop_subsampling-2_upscale.jpg',
      publishedAt: '5 hours ago',
      unread: true,
    },
  ];
  return (
    <ScrollView className="flex-1 bg-background p-4">
      <Text className="text-2xl font-bold mb-4">Components Preview</Text>
      <View className="flex flex-col gap-6 pb-20">
        {/* Buttons Section */}
        <Card className="p-4">
          <Text className="text-xl font-semibold mb-3">Buttons</Text>
          <View className="flex flex-row gap-2">
            <Button>
              <Text>Primary</Text>
            </Button>
            <Button variant="outline">
              <Text>Outline</Text>
            </Button>
            <Button variant="ghost">
              <Text>Ghost</Text>
            </Button>
          </View>
        </Card>

        {/* Inputs Section */}
        <Card className="p-4">
          <Text className="text-xl font-semibold mb-3">Inputs</Text>
          <View className="flex flex-col gap-3">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" editable={false} />
            <Input placeholder="With label" />
          </View>
        </Card>

        {/* Checkboxes Section */}
        <Card className="p-4">
          <Text className="text-xl font-semibold mb-3">Checkboxes</Text>
          <View className="flex flex-col gap-2">
            <View className="flex flex-row items-center gap-2">
              <Checkbox
                id="terms"
                checked={false}
                onCheckedChange={function (checked: boolean): void {
                  throw new Error('Function not implemented.');
                }}
              />
              <Text className="text-sm">Accept terms and conditions</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Checkbox
                id="disabled"
                disabled
                checked={false}
                onCheckedChange={function (checked: boolean): void {
                  throw new Error('Function not implemented.');
                }}
              />
              <Text className="text-sm text-gray-400">Disabled checkbox</Text>
            </View>
          </View>
        </Card>

        {/* Typography Section */}
        <Card className="p-4">
          <Text className="text-xl font-semibold mb-3">Typography</Text>
          <View className="flex flex-col gap-2">
            <Text className="text-4xl font-bold">Heading 1</Text>
            <Text className="text-3xl font-bold">Heading 2</Text>
            <Text className="text-2xl font-bold">Heading 3</Text>
            <Text className="text-base">
              Body text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>
            <Text className="text-sm text-gray-500">
              Small text. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </Text>
          </View>
        </Card>

        <MainInfoCard breakingNews={news} />
        <AlertInfoCard news={breakingNews[0]} />
        <StandardInfoCard article={articles[0]} />
      </View>
    </ScrollView>
  );
};

export default ComponentsPreview;
