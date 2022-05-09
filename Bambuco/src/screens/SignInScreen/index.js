import {  TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { ContainerAlign, ContainerImage, ContainerJustify } from '../../library/utils/styledGlobal'
import { Logo } from '../../components/Logo'
import { colors } from '../../library/utils/theme'
import { TextHuge, TextMedium } from '../../components/MyText'
import { MyInput } from '../../components/MyInput'
import { Button } from '../../components/MyButton'

import { useLoginUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/AsyncStoregeService';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearTextInput = () => {
    setEmail('')
    setPassword('')
  }

  const [loginUser] = useLoginUserMutation();

  const handleFormSubmit = async () => {
    const formData = { email, password }
    const res = await loginUser(formData)
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
        ...(res.error.data.errors.email ? { text1: res.error.data.errors.email[0] } : ''),
        ...(res.error.data.errors.password ? { text1: res.error.data.errors.password[0] } : ''),
        ...(res.error.data.errors.non_field_errors ? { text1: res.error.data.errors.non_field_errors[0] } : '')
      })
    }
  }

  return (
    <ContainerImage source={require('../../assets/img/imagen1.jpg')}>
      <Logo color={colors.primary} size={'150px'}/>
      <ContainerAlign align={'flex-start'} >
        <TextHuge color={colors.white} shadow>
          Sign In
        </TextHuge>
      </ContainerAlign >
      <MyInput placeholder={'Your email address'} 
        onChangeText={value => setEmail(value)}
        value={email} disabled={email?true:false}
      />
      <MyInput placeholder={'Password'} 
        onChangeText={value => setPassword(value)}
        value={password} disabled={password?true:false}
      />
      
      <Button color={colors.primary} text={'Sign In'} onPress={handleFormSubmit}/>
      <TextMedium bold color={colors.white} shadow>Or</TextMedium>
      <Button color={colors.primary} icon text={'Sign In with Google'}/>
      <ContainerJustify justify={'flex-end'} p={'10px 0px'}>
        <TextMedium bold color={colors.white}>Create an Account </TextMedium>
        <TouchableOpacity  onPress={()=> navigation.navigate('SignUp')}>
          <TextMedium bold shadow color={'#f75f6a'}>
            Sign Up
          </TextMedium>
        </TouchableOpacity>
      </ContainerJustify>
    </ContainerImage>
  )
}

export default SignInScreen;