import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../../assets/logo.png';
import welcome from '../../assets/welcome-image.png';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
  const navigation = useNavigation();
  // button press navigation
  const onGetStartedPressed = () => {
    navigation.navigate("SignIn")
  }

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
      <View style={styles.buttonStyling}>
      <CustomButton
        onPress={onGetStartedPressed} 
        text="Get Started"></CustomButton>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0D0D3',
  },
  title: {
    fontSize: 38,
    color: '#4D4D4D',
    fontFamily: 'Montserrat-Medium',
    marginBottom: 5,
    alignItems: 'left',
  },
  logo: {
    height: 40, 
    width: 250,
    opacity: 0.7,

  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  buttonContainer: {
    backgroundColor: '#CB8589',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: '#4D4D4D',
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 3, 
  },
  text: {
    fontSize: 18,
    color: '#4D4D4D',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 35,
    marginHorizontal: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonStyling: {
    width: '50%'
  }
});