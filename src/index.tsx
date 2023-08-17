import { Platform } from 'react-native';

export const IOS = Platform.OS === 'ios';

export const ANDROID = Platform.OS === 'android';

export enum RadiusSize {
  X = 5,
  M = 10,
  L = 12,
  XL = 16,
  XXL = 22,
  XXXL = 40,
}

export enum IconSize {
  SMALL = 16,
  MEDIUM = 24,
  LARGE = 32,
  X_LARGE = 36,
  XXX_LARGE = 40,
}

export * from './components';

export * from './styles';
