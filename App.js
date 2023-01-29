import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
