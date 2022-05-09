import {  TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContainerAlign, ContainerImage, ContainerJustify } from '../../library/utils/styledGlobal'
import { Logo } from '../../components/Logo'
import { colors } from '../../library/utils/theme'
import { TextHuge, TextMedium } from '../../components/MyText'
import { MyInput } from '../../components/MyInput'
import { Button } from '../../components/MyButton'
import { Context } from '../../context/globalContext'

const SignInScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [error, setError] = useState('');

  const globalContext = useContext(Context);
  const {isLoggedIn, setIsLoggedIn, domain, userObj, setUserObj, setToken} = globalContext;

  
  
  function handleSignIn () {
    
    let body = JSON.stringify({
      'email': email.toLowerCase(),
      'password': password
    })

    fetch(`${domain}signin/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:body
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          setError("Invalid Credentials")
          throw res.json()
        }
      })
      .then(json => {
        setToken(json.token)
        setIsLoggedIn(true)
      })
      .catch(error => {
        console.log(error)
      })

  }


  return (
    <ContainerImage source={require('../../assets/img/imagen1.jpg')}>
      <Logo color={colors.primary} size={'150px'}/>
      <ContainerAlign align={'flex-start'} >
        <TextHuge color={colors.white} shadow>
          Sign In {isLoggedIn?'SIIIII':'Nooooooo'}
        </TextHuge>
      </ContainerAlign >
      <MyInput placeholder={'Your email address'} 
        onChangeText={value => setEmail(value)}
        value={email} disabled={email?true:false}
      />
      <MyInput placeholder={'Password'} 
        secureTextEntry={securePassword}
        onChangeText={value => setPassword(value)}
        value={password} disabled={password?true:false}
      />
      
      <Button color={colors.primary} text={'Sign In'} onPress={()=> handleSignIn()}/>
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