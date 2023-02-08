import { StyleSheet } from 'react-native';
//import MontserratMedium from '../../assets/fonts/Montserrat-Medium.ttf';

const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#B0D0D3',
    },
    title: {
      fontSize: 40,
      color: '#4D4D4D',
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
      shadowColor: '#4D4D4D',
      shadowOffset: { width: 0, height: 5 }, 
      shadowOpacity: 0.8, 
      shadowRadius: 3, 
    },
    text: {
      fontSize: 19,
      color: '#4D4D4D',
      marginBottom: 35,
      marginHorizontal: 50,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default styles;