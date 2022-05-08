import styled from 'styled-components/native';

export const ContainerLogo = styled.View`
  background-color: ${props => props.color || '#0000'};
  padding: 2px;
  border-radius:  ${props => props.size};
`
export const ImageLogo = styled.Image`
  height: ${props => props.size};
  width: ${props => props.size};
`