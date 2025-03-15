// import React from 'react';
// import { PropsWithChildren } from 'react';
// import { Button, ButtonProps, TextProps } from 'react-native-paper';
// import { TCustomColorKey, TCustomTheme } from '../theme';
// import { useAppTheme, useAppThemeColor } from '../hooks/theme.hooks';
// import { addAlphaToRgbOrRgbaString } from '../../utils/styles.util';
// import { TextCmp } from '../typography/text.component';
// import { TextStyle, TouchableOpacity, View } from 'react-native';
// // import {TSvgProps} from '../icons';

// type TButtonProps = PropsWithChildren & {
//   onPress?: () => void;
//   buttonColor?: TCustomColorKey;
//   rippleColor?: TCustomColorKey;
//   textColor?: TCustomColorKey;
//   mode?: ButtonProps['mode'];
//   fontWeight?: TextStyle['fontWeight'];
//   textVariant?: TextProps<string>['variant'];
//   borderRadius?: keyof TCustomTheme['radius'];
//   disabled?: boolean;

// };

// export const ButtonCmp = (props: TButtonProps) => {
//   const theme = useAppTheme();
//   // const buttonColor = useAppThemeColor(props.buttonColor ?? 'primary');
//   const rippleColor = useAppThemeColor(props.rippleColor ?? 'onPrimary');
//   const buttonColor = props.disabled
//     ? useAppThemeColor('handleGray')
//     : useAppThemeColor(props.buttonColor ?? 'primary');
//   const defaultTextColor =  'neutralLight'

//   return (
//     <Button
//       mode='outlined'
//       buttonColor={buttonColor}
//       rippleColor={addAlphaToRgbOrRgbaString(rippleColor, 0.1)}
//       onPress={props.onPress}
//       disabled={props.disabled}
//       style={{ borderRadius: theme.radius[props.borderRadius ?? 'md'], paddingHorizontal: "7%",
//         borderColor: theme.colors.primary,}}
//       // contentStyle={{ borderColor: 'red'}}
//     >
//       {typeof props.children === 'string' ? (
//         <TextCmp
//           color={props.textColor ?? defaultTextColor}
//           fontWeight={props.fontWeight}
//           variant={props.textVariant}>
//           {props.children}
//         </TextCmp>
//       ) : (
//         props.children
//       )}
//     </Button>
//   );
// };

// type TIconButtonProps = {
//   onPress: () => void;
//   spacingHorizontal?: number;
//   icon: (props: TSvgProps) => React.JSX.Element;
//   iconProps?: TSvgProps;
// };

// export const IconButtonCmp = (props: TIconButtonProps) => {
//   const theme = useAppTheme();

//   return (
//     <TouchableOpacity onPress={props.onPress}>
//       <View
//         style={{
//           paddingHorizontal: theme.spacing(props.spacingHorizontal ?? 2),
//         }}>
//         {props.icon({
//           size: 'standard',
//           ...(props.iconProps ? props.iconProps : {}),
//         })}
//       </View>
//     </TouchableOpacity>
//   );
// };


import React from 'react';
import { PropsWithChildren } from 'react';
import { Button, ButtonProps, TextProps } from 'react-native-paper';
import { TCustomColorKey, TCustomTheme } from '../theme';
import { useAppTheme, useAppThemeColor, useAppThemeStyles } from '../../hooks/theme.hooks';
import { addAlphaToRgbOrRgbaString } from '../../utils/styles.util';
import { TextCmp } from '../typography/text.component';
import { TextStyle, TouchableOpacity, View } from 'react-native';
import { TSvgProps } from '../icons';

type TButtonProps = PropsWithChildren & {
  onPress?: () => void;
  buttonColor?: TCustomColorKey;
  rippleColor?: TCustomColorKey;
  textColor?: TCustomColorKey;
  mode?: ButtonProps['mode'];
  fontWeight?: TextStyle['fontWeight'];
  textVariant?: TextProps<string>['variant'];
  borderRadius?: keyof TCustomTheme['radius'];
  disabled?: boolean;

};

export const ButtonCmp = (props: TButtonProps) => {
  const theme = useAppTheme();
  // const buttonColor = useAppThemeColor(props.buttonColor ?? 'primary');
  const rippleColor = useAppThemeColor(props.rippleColor ?? 'primary');
  const buttonColor = props.disabled
    ? useAppThemeColor('handleGray')
    : useAppThemeColor(props.buttonColor ?? 'primary');
  const defaultTextColor = 'neutralLight'
  const defaultTextVarient = 'titleMedium'
  return (
    <Button
      mode={props.mode}
      buttonColor={buttonColor}
      rippleColor={addAlphaToRgbOrRgbaString(rippleColor, 0.1)}
      onPress={props.onPress}
      disabled={props.disabled}
      style={{ borderRadius: theme.radius[props.borderRadius ?? 'md'], paddingHorizontal: "7%", borderColor: theme.colors.primary, }}>
      {typeof props.children === 'string' ? (
        <TextCmp
          color={props.textColor ?? defaultTextColor}
          fontWeight={props.fontWeight}
          variant={props.textVariant ?? defaultTextVarient}>
          {props.children}
        </TextCmp>
      ) : (
        props.children
      )}
    </Button>
  );
};

type TIconButtonProps = {
  onPress: () => void;
  spacingHorizontal?: number;
  icon: (props: TSvgProps) => React.JSX.Element;
  iconProps?: TSvgProps;
};

export const IconButtonCmp = (props: TIconButtonProps) => {
  const theme = useAppTheme();

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          paddingHorizontal: theme.spacing(props.spacingHorizontal ?? 2),
        }}>
        {props.icon({
          size: 'standard',
          ...(props.iconProps ? props.iconProps : {}),
        })}
      </View>
    </TouchableOpacity>
  );
};
