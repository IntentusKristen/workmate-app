import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import home from '../../assets/small-logo.png';
import friends from '../../assets/friends.png';
import messages from '../../assets/chat.png';
import profile from '../../assets/profile.png';

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Image
            source={home}
            style={{width: 40, height: 34, opacity: 0.8}}
        />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Friends')}>
        <Image
            source={friends}
            style={{width: 38, height: 28, marginBottom: 3, opacity: 0.8}}
        />
        <Text style={styles.text}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Messages')}>
        <Image
            source={messages}
            style={{width: 30, height: 30, opacity: 0.8}}
        />
        <Text style={styles.text}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Image
            source={profile}
            style={{width: 30, height: 30, opacity: 0.8}}
        />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1.5,
    borderColor: '#2E2E2E',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  text: {
    color: '#2E2E2E',
    marginVertical: 4,
    fontFamily: 'Montserrat-Medium',
  },
});

export default NavBar;
