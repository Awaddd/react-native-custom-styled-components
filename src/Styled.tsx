import React, { ComponentType } from 'react';
import { StyleProp } from 'react-native';

type StyleableProp = { style?: StyleProp<unknown> };

export default function styled<P extends StyleableProp>(
  Component: ComponentType<P>,
  fn: (props: any) => P['style'],
) {
  return (props: any) => {
    return <Component {...props} style={[fn(props)]} />;
  };
}
