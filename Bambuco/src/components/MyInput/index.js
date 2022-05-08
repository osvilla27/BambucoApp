import React from 'react'
import { colors } from '../../library/utils/theme'
import { TextMedium } from '../MyText'
import { StyledInput, Container } from './styled'

export const MyInput = ({ disabled, placeholder, onChangeText, value}) => {
  return (
    <Container>
      <StyledInput 
        enabled={disabled}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Container>
  )
}

