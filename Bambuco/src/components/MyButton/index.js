
import React from 'react';
import { Image } from 'react-native';
import { Container, styles } from './styled';
import { TextMedium } from '../MyText';
import { colors, shadow } from '../../library/utils/theme';

export const Button = ({ onPress, text, icon, color}) => {
  return (
    <Container style={[shadow.dark]} color={color} onPress={onPress}>
      {icon&&<Image 
        style={styles.logo} 
          source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png',
        }}
      />}
      <TextMedium color={colors.white} bold>{text}</TextMedium>
    </Container>
  )
}
