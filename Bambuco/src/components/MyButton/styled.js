
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${props => props.color};
  width: 100%;
  height: 45px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    height: 24,
    width: 24,
    position: 'relative',
    top: '0.5%',
    right: '80%',
  },
})