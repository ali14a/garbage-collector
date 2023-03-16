import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {styles} from './Login.styles';

const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={styles.container}> */}
          <Image source={IMAGE.logo} style={styles.logo} />
          <Text style={styles.welcome}>
            {STRING.WELCOME_TO}{' '}
            <Text style={styles.citygen}>{STRING.CITYGEN}</Text>
          </Text>
          <View style={styles.numberContainer}>
            <Text style={styles.mobile}>{STRING.ENTER_MOBILE_NUMBER}</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.code}>+91</Text>
              <TextInput
                value={mobile}
                onChangeText={mobile => setMobile(mobile)}
                style={styles.input}
                keyboardType={'numeric'}
              />
            </View>
          </View>
          {/* <View style={{bottom:20,width:'100%',position:'absolute'}}> */}
          {/* </View> */}
        </KeyboardAwareScrollView>
      </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate('OTP')}>
          <Text style={styles.nextText}>{STRING.NEXT}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
