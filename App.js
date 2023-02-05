import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ConfirmEmailScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
