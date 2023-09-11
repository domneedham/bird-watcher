import {useColorScheme} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CamerasScreen, HomeScreen, OnBoardingScreen} from '@screens';

//? Can't figure out how to properly type this
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import {colors, hslFunction} from '../../themeColors.js';

export type MainStackParamList = {
  Tabs: NavigatorScreenParams<TabsStackParamList>;
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export type TabsStackParamList = {
  Home: undefined;
  Cameras: undefined;
};

const TabStack = createBottomTabNavigator<TabsStackParamList>();

const TabNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TabStack.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? hslFunction(colors.dark.background)
            : hslFunction(colors.light.background),
        },
        header: () => null,
      }}>
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Cameras" component={CamerasScreen} />
    </TabStack.Navigator>
  );
};

export const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
