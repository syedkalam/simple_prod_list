import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type PropsType = {
  children: ReactNode;
  style?: ViewStyle;
  spacing?: number;
  align?: 'flex-start' | 'center' | 'flex-end';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
};

export default function VStack(props: PropsType) {
  const { children, style, spacing = 0, align = 'flex-start', justify = 'center' } = props;
  return (
    <View style={[{ alignItems: align, justifyContent: justify, gap: spacing }, style]}>
      {children}
    </View>
  );
}
