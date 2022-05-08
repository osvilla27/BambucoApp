import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 10px 0px;
`

export const StyledInput = styled.TextInput`
  font-size: 18px;
  border-radius: 10px;
  width: 100%;
  padding: 10px 10px;
  background-color: white;
  color: gray;
  border-color: gray;
  ${props=>props.enabled&&`
    border-width: 2px;
    border-color: #f75f6a;
    font-weight: bold
  `}
`