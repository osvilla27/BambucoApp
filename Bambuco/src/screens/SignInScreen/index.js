import {  TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContainerAlign, ContainerImage, ContainerJustify } from '../../library/utils/styledGlobal'
import { Logo } from '../../components/Logo'
import { colors } from '../../library/utils/theme'
import { TextHuge, TextMedium } from '../../components/MyText'
import { MyInput } from '../../components/MyInput'
import { Button } from '../../components/MyButton'
import { AuthContext } from '../../context/AuthContext'

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const val = useContext(AuthContext)

  return (
    <ContainerImage source={require('../../assets/img/imagen1.jpg')}>
      <Logo color={colors.primary} size={'150px'}/>
      <TextHuge>{val}</TextHuge>
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
      
      <Button color={colors.primary} text={'Sign In'} onPress={()=> {navigation.navigate('Home')}}/>
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