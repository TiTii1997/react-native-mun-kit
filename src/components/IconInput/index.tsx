import React from 'react';
import type { PropsWithChildren, ReactElement } from 'react';
import nameof from 'ts-nameof.macro';
import type {
  TextInputProps,
  TextInputIOSProps,
  TextInputAndroidProps,
  AccessibilityProps,
} from 'react-native';
import { Input } from '@rneui/themed';

export function IconInput(
  props: PropsWithChildren<IconInputProps>
): ReactElement {
  const { leftIcon, rightIcon, placeholder, ...restProps } = props;

  return (
    <Input
      placeholder={placeholder}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...restProps}
    />
  );
}

export interface IconInputProps
  extends TextInputProps,
    TextInputIOSProps,
    TextInputAndroidProps,
    AccessibilityProps {
  rightIcon?: any;
  leftIcon?: any;
}

IconInput.defaultProps = {
  placeholder: 'Nhập thông tin',
  leftIcon: { type: 'font-awesome', name: 'chevron-left' },
};

IconInput.displayName = nameof(IconInput);

export default IconInput;
