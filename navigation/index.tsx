import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { MaterialCommunityIcons, Octicons, Fontisto } from '@expo/vector-icons';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint
      },
    }}>
      <Stack.Screen name="Root" 
        component={MainTabNavigator} 
        options={{
          title: 'My Video Call App',
          headerTintColor: 'white',
          headerRight: () => (
            <View style={{flexDirection: 'row', width:80 , justifyContent: 'space-between'}}>
                <Octicons name="search" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" style={{marginRight: 10}}/>
            </View>
          ),
        }}
        />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Camera"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        tabBarIndicatorStyle:{
          backgroundColor: 'white'
        },
        tabBarLabelStyle: {
          fontWeight: 'bold'
        },
        tabBarShowIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon:() => <Fontisto name="camera" size={20} color="white"/>,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={TabTwoScreen}
        options={{
          title: 'Chats',
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabThreeScreen}
        options={{
          title: 'Status',
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabThreeScreen}
        options={{
          title: 'Calls',
        }}
      />
    </MainTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
