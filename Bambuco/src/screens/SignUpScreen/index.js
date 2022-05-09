import { TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { TextHuge, TextMedium } from '../../components/MyText';
import { MyInput } from '../../components/MyInput';
import { Button } from '../../components/MyButton';
import { Logo } from '../../components/Logo';
import { ContainerAlign, ContainerImage, ContainerJustify } from '../../library/utils/styledGlobal';
import { colors } from '../../library/utils/theme';

import { useRegisterUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/AsyncStoregeService';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [tc, setTc] = useState(true);

  const clearTextInput = () => {
    setName('')
    setEmail('')
    setPassword('')
    setPassword2('')
    setTc(true)
  }

  const [registerUser] = useRegisterUserMutation();

  const handleFormSubmit = async () => {
    const formData = { name, email, password, password2, tc }
    const res = await registerUser(formData)
    // console.log("Response", res)
    if (res.data) {
      // console.log("Response Data", res.data)
      await storeToken(res.data.token)  // Store Token in Storage
      clearTextInput()
      navigation.navigate('Root')
    }
    if (res.error) {
      // console.log("Response Error", res.error.data.errors)
      ToastAndroid.show({
        type: 'warning',
        position: 'top',
        topOffset: 0,
        ...(res.error.data.errors.name ? { text1: res.error.data.errors.name[0] } : ''),
        ...(res.error.data.errors.email ? { text1: res.error.data.errors.email[0] } : ''),
        ...(res.error.data.errors.password ? { text1: res.error.data.errors.password[0] } : ''),
        ...(res.error.data.errors.password2 ? { text1: res.error.data.errors.password2[0] } : ''),
        ...(res.error.data.errors.tc ? { text1: res.error.data.errors.tc[0] } : ''),
        ...(res.error.data.errors.non_field_errors ? { text1: res.error.data.errors.non_field_errors[0] } : '')
      })
    }
  }

  return (
    <ContainerImage source={require('../../assets/img/imagen1.jpg')}>
      <Logo color={colors.primary} size={'150px'}/> 
      <ContainerAlign align={'flex-start'} >
        <TextHuge color={colors.white} shadow>
          Sign Up
        </TextHuge>
      </ContainerAlign >
      <MyInput placeholder={'Your name'} 
        onChangeText={value => setName(value)}
        value={name} disabled={name?true:false}
      />
      <MyInput placeholder={'Your email address'} 
        onChangeText={value => setEmail(value)}
        value={email} disabled={email?true:false}
      />
      <MyInput placeholder={'Password'} 
        onChangeText={value => setPassword(value)}
        value={password} disabled={password?true:false}
      />

      <MyInput placeholder={'Password2'} 
        onChangeText={value => setPassword2(value)}
        value={password2} disabled={password2?true:false}
      />
      
      <Button color={colors.primary} text={'Sign Up'} onPress={handleFormSubmit}/>
      <TextMedium bold color={colors.white} shadow>Or</TextMedium>
      <Button color={colors.primary} icon text={'Sign Up with Google'}/>
      <ContainerJustify justify={'flex-end'} p={'10px 0px'}>
        <TextMedium bold color={colors.white}>Have an Account? </TextMedium>
        <TouchableOpacity  onPress={()=> navigation.navigate('SignIn')}>
          <TextMedium bold shadow color={'#f75f6a'}>
            Sign In
          </TextMedium>
        </TouchableOpacity>
      </ContainerJustify>
    </ContainerImage>
  )
}

export default SignUpScreen;
