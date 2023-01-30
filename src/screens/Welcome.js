import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../components/WelcomeStyles.js';
import welcome from '../../assets/welcome-image.png';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Workmate</Text>
      <Image
        source={welcome}
        style={styles.image}
      />
      <Text style={styles.text}>Unleash your potential with Workmate. We match you with like-minded partners 
      to keep you motivated, accountable and on track to success.</Text>
        <Text style={styles.buttonText}>Get Started</Text>
    </View>
  );
};
  
  export default WelcomePage;