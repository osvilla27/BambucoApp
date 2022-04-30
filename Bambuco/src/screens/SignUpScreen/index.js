import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextHuge, TextMedium } from '../../components/MyText';
import { MyInput } from '../../components/MyInput';
import { Button } from '../../components/MyButton';
import { Logo } from '../../components/Logo';
import { ContainerAlign, ContainerJustify } from '../../library/utils/styledGlobal';
import { Backdrop, Container } from './styled';
import { colors } from '../../library/utils/theme';



export const SignUpScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [isLoginScreen, setIsLoginScreen] = useState(false)
  
  return (
    <Container source={require('../../assets/img/imagen1.jpg')} style={{flex:1}}> 
      <Logo color={colors.primary} size={'140px'}/>
      <ContainerAlign align={'flex-start'} >
        <TextHuge color={colors.white} shadow>
          {isLoginScreen?'Sign In':'Sign Up'}
        </TextHuge>
      </ContainerAlign >
      <Backdrop>
        <MyInput text={'Email'} placeholder={'Your email address'} 
          onChangeText={value => setEmail(value)}
          value={email} disabled={email?true:false}
        />
        <MyInput text={'Password'}
          onChangeText={value => setPassword(value)}
          value={password} disabled={password?true:false}
        />
          {/* {!isLoginScreen&&<Check value={terms}  onValueChange={value => setTerms(value)} />}  */}
      </Backdrop>
      <Button color={colors.primary} text={isLoginScreen?'Sign In':'Sign Up'} onPress={()=> {navigation.navigate('Home')}}/>
      <TextMedium bold color={colors.white} shadow>Or</TextMedium>
      <Button color={colors.primary} icon text={'Sign In with Google'}/>
      <ContainerJustify justify={'flex-end'} p={'10px 0px'}>
        {!isLoginScreen&&<TextMedium bold color={colors.white}>Have an Account? </TextMedium>}
        <TouchableOpacity  onPress={() => setIsLoginScreen(!isLoginScreen)}>
          <TextMedium bold shadow color={'#f75f6a'} >
           {isLoginScreen?'Sign Up': 'Sign In'}
          </TextMedium>
        </TouchableOpacity>
      </ContainerJustify>
    </Container>
  )
}
