import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import styled from './Styled';

const App = () => (
  <SafeAreaView>
    <View>
      <Text>Hello WORLD!</Text>
      <Button mode="contained">Click me</Button>
    </View>
    <StyledView color="red">
      <StyledText>Hello WORLD!</StyledText>
      <Button mode="contained">Click me</Button>
    </StyledView>
  </SafeAreaView>
);

const StyledView = styled(View, ({ color }) => ({
  padding: 20,
  // flexDirection: 'column' as const,
  flexDirection: 'column',
  backgroundColor: color,
}));

const StyledText = styled(Text, () => ({
  textAlign: 'center',
}));

export default App;
