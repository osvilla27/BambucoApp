import React from 'react';
import { ContainerLogo, ImageLogo } from './styled';
import { shadow } from '../../library/utils/theme';

export const Logo = ( {color, size} ) => {
  return (
    <ContainerLogo 
      color={color} 
      style={[shadow.dark]}
    >
      <ImageLogo 
        size={size}
        source={require('../../assets/logo-SignIn.png')}
      />
    </ContainerLogo>
  )
}
