import React from 'react'
import { colors } from '../../library/utils/theme'
import { TextMedium } from '../MyText'
import { StyledInput, Container } from './styled'

export const MyInput = ({ disabled, text, placeholder, onChangeText, value}) => {
  return (
    <Container>
      <TextMedium color={colors.primary} bold>{text}</TextMedium>
      <StyledInput 
        enabled={disabled}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Container>
  )
}

