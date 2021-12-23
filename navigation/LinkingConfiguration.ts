import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Camera: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Chats: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Status: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Calls: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
