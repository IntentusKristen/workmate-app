import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
