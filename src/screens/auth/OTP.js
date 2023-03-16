import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {IMAGE} from '../../utils/constant/images';
import {STRING} from '../../utils/constant/strings';
import {COLORS} from '../../utils/styles/theme';
import {styles} from './Login.styles';

const OTP = () => {
  const navigation = useNavigation();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  const [otpFocus1, setOtpFocus1] = useState(false);
  const [otpFocus2, setOtpFocus2] = useState(false);
  const [otpFocus3, setOtpFocus3] = useState(false);
  const [otpFocus4, setOtpFocus4] = useState(false);
  const [otpFocus5, setOtpFocus5] = useState(false);
  const [otpFocus6, setOtpFocus6] = useState(false);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);

  const onChangeOtp1 = val => {
    setOtp1(val);
    if (val.length == 1) {
      inputRef2.current.focus();
    }
  };
  const onChangeOtp2 = val => {
    setOtp2(val);
    if (val.length == 1) {
      inputRef3.current.focus();
    } else if (val.length == 0) {
      inputRef1.current.focus();
    }
  };

  const onChangeOtp3 = val => {
    setOtp3(val);
    if (val.length == 1) {
      inputRef4.current.focus();
    } else if (val.length == 0) {
      inputRef2.current.focus();
    }
  };

  const onChangeOtp4 = val => {
    setOtp4(val);
    if (val.length == 1) {
      inputRef5.current.focus();
    } else if (val.length == 0) {
      inputRef3.current.focus();
    }
  };

  const onChangeOtp5 = val => {
    setOtp5(val);
    if (val.length == 1) {
      inputRef6.current.focus();
    } else if (val.length == 0) {
      inputRef4.current.focus();
    }
  };

  const onChangeOtp6 = val => {
    setOtp6(val);
    if (val.length == 0) {
      inputRef5.current.focus();
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Image source={IMAGE.logo} style={styles.logo} />
          <Text style={styles.welcome}>
            {STRING.WELCOME_TO}{' '}
            <Text style={styles.citygen}>{STRING.CITYGEN}</Text>
          </Text>
          <View style={styles.numberContainer}>
            <Text style={styles.mobile}>{STRING.ENTER_OTP}</Text>
            <View style={styles.otpContainer}>
              <TextInput
                onChange={e => {
                  onChangeOtp1(e.nativeEvent.text);
                }}
                value={otp1}
                clearTextOnFocus={true}
                selectTextOnFocus={true}
                ref={inputRef1}
                onFocus={() => {
                  setOtpFocus1(true);
                }}
                onBlur={() => {
                  setOtpFocus1(false);
                }}
                placeholder={'0'}
                placeholderTextColor={COLORS.DARK_GREY}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.otpInput}
              />

              <TextInput
                onChange={e => {
                  onChangeOtp2(e.nativeEvent.text);
                }}
                clearTextOnFocus={true}
                selectTextOnFocus={true}
                value={otp2}
                ref={inputRef2}
                onFocus={() => {
                  setOtpFocus2(true);
                }}
                onBlur={() => {
                  setOtpFocus2(false);
                }}
                placeholder={'0'}
                placeholderTextColor={COLORS.DARK_GREY}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.otpInput}
              />
              <TextInput
                onChange={e => {
                  onChangeOtp3(e.nativeEvent.text);
                }}
                value={otp3}
                clearTextOnFocus={true}
                selectTextOnFocus={true}
                ref={inputRef3}
                onFocus={() => {
                  setOtpFocus3(true);
                }}
                onBlur={() => {
                  setOtpFocus3(false);
                }}
                placeholder={'0'}
                placeholderTextColor={COLORS.DARK_GREY}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.otpInput}
              />
              <TextInput
                onChange={e => {
                  onChangeOtp4(e.nativeEvent.text);
                }}
                value={otp4}
                selectTextOnFocus={true}
                clearTextOnFocus={true}
                ref={inputRef4}
                onFocus={() => {
                  setOtpFocus4(true);
                }}
                onBlur={() => {
                  setOtpFocus4(false);
                }}
                placeholder={'0'}
                placeholderTextColor={COLORS.DARK_GREY}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.otpInput}
              />
              <TextInput
                onChange={e => {
                  onChangeOtp5(e.nativeEvent.text);
                }}
                value={otp5}
                clearTextOnFocus={true}
                selectTextOnFocus={true}
                ref={inputRef5}
                onFocus={() => {
                  setOtpFocus5(true);
                }}
                onBlur={() => {
                  setOtpFocus5(false);
                }}
                placeholder={'0'}
                placeholderTextColor={COLORS.DARK_GREY}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.otpInput}
              />
              <TextInput
                onChange={e => {
                  onChangeOtp6(e.nativeEvent.text);
                }}
                value={otp6}
                clearTextOnFocus={true}
                selectTextOnFocus={true}
                ref={inputRef6}
                onFocus={() => {
                  setOtpFocus6(true);
                }}
                onBlur={() => {
                  setOtpFocus6(false);
                }}
                placeholder={'0'}
                placeholderTextColor={COLORS.DARK_GREY}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.otpInput}
              />
            </View>
            <Pressable style={styles.resendButton} onPress={() => {}}>
              <Text style={styles.resend}>{STRING.RESEND}</Text>
            </Pressable>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
        }}>
        <Pressable
          style={styles.nextButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.nextText}>{STRING.SUBMIT}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OTP;
