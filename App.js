import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import logo from './assets/favicon.png';
import bgimage from './assets/background.jpeg';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo'
import PhoneInput from 'react-native-phone-input'
const { width: WIDTH } = Dimensions.get('window')


const Stack =createStackNavigator();

function phone_number_screen({navigation})
{
  return (
    <ImageBackground source={bgimage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}> React Native With Expo </Text>
      </View>

      <View>
        <Icon name={'old-phone'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon} />
        <PhoneInput
          style={styles.input}
          placeholder={"Phone Number"}
          secureTextEntry={'true'}
          placeholderTextColor={'rbga(255,255,255,0.7)'}
          underlineColorAndroid='transparent'

        />

      </View>
      <TouchableOpacity style={styles.sendOTP} onPress={()=>console.log("pressed")}>
        <Text style={styles.text} >Send OTP</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('phone_number_screen')}
      />
    </View>
  );
}

function App() {
  
    return(
<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        />
        <Stack.Screen
        name="Login"
        component={phone_number_screen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
    

  
}



export default App;




















const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50
  },
  logoContainer:
  {
    alignItems: 'center'
  },
  logoText:
  {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 1

  },
  input:
  {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 60,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    

  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37
  },
  sendOTP:{
    width :WIDTH-55,
    height:45,
    borderRadius:25,
    backgroundColor:'#808080',
    fontSize:20,
    marginTop:20,
    alignItems:'center'

  },
  text:{
    color: 'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'


  }
});
