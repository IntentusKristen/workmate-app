import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../components/WelcomeStyles.js';
import logo from '../../assets/logo.png';
import welcome from '../../assets/welcome-image.png';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to</Text>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      <Image
        source={welcome}
        style={styles.image}
      />
      <Text style={styles.text}>Unleash your potential with Workmate. We match you with like-minded partners 
      to keep you motivated, accountable and on track to success.</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
  
  export default WelcomePage;