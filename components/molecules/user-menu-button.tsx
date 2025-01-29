import {TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text} from '../ui/text';
import {UserCircle2} from '../../lib/icons/User';
import {useNavigation} from '@react-navigation/native';
import {AppRoutes} from '../../navigation/router';
import {AppScreenNavigationProp} from '../../navigation/types';

const UserMenuButton = () => {
  const navigation = useNavigation<AppScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.Profile)}>
      <UserCircle2 className="text-foreground" size={24} />
    </TouchableOpacity>
  );
};

export default UserMenuButton;
