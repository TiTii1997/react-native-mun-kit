import React from 'react';
import type { PropsWithChildren, ReactElement } from 'react';
import nameof from 'ts-nameof.macro';
import { Input } from '@rneui/themed';
import type {
  TextInputProps,
  TextInputIOSProps,
  TextInputAndroidProps,
  AccessibilityProps,
} from 'react-native';

export function BasicInput(
  props: PropsWithChildren<BasicInputProps>
): ReactElement {
  const { placeholder, ...restProps } = props;

  return <Input {...restProps} placeholder={placeholder} />;
}

export interface BasicInputProps
  extends TextInputProps,
    TextInputIOSProps,
    TextInputAndroidProps,
    AccessibilityProps {
  placeholder?: string | undefined;

  textAlign?: 'left' | 'center' | 'right' | undefined;
}

BasicInput.defaultProps = {
  placeholder: 'Nhập thông tin',
};

BasicInput.displayName = nameof(BasicInput);

export default BasicInput;
