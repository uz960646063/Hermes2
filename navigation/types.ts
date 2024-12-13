// types.ts

import {BoardingRoutes, AppRoutes} from './router';

export type BoardingStackParamList = {
    [BoardingRoutes.Boarding]: undefined;
    [BoardingRoutes.NumberInputPage]: undefined;
    [BoardingRoutes.OTPPage]: undefined;
};

export type AppStackParamList = {
    [AppRoutes.Home]: undefined;
    [AppRoutes.Profile]: {userId: string};
    [AppRoutes.Settings]: {theme?: 'light' | 'dark'};
};
