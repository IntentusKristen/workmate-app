import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
