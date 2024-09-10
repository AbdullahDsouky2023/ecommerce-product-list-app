import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

interface TextProps {
  children: React.ReactNode;
  style?: object;
}

export const Text: React.FC<TextProps> = React.memo(({ children, style }) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
));

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
