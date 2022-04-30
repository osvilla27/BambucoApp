import styled from 'styled-components/native';
import { font } from '../../library/utils/theme';

export const MyText = styled.Text`
  color: ${props=>props.color||'gray'}
  font-size: ${props=>props.size||'18px'}
  padding: 5px;
  ${props=>props.bold&&`
    font-weight: bold;
  `}
  ${props=>props.shadow&&`
    text-shadow: 1px 1px 1px black;
  `}
`

export const TextHuge = styled.Text`
  color: ${props=>props.color||'gray'};
  font-size: ${font.size.huge};
  font-weight: bold; 
  padding: ${props=>props.padding||'0px'};
  margin: ${props=>props.padding||'0px'};
  ${props=>props.shadow&&`
    text-shadow: 2px 2px 10px black;
  `}
`

export const TextLarge = styled.Text`
  color: ${props=>props.color||'gray'};
  font-size: ${font.size.large};
  font-weight: bold;
  padding: ${props=>props.padding||'0px'};
  margin: ${props=>props.padding||'0px'};
  ${props=>props.shadow&&`
    text-shadow: 2px 2px 10px black;
  `}
`

export const TextMedium = styled.Text`
  color: ${props=>props.color||'gray'};
  font-size: ${font.size.medium};
  ${props=>props.bold&&`
    font-weight: bold;
  `}
  padding: ${props=>props.padding||'0px'};
  margin: ${props=>props.padding||'0px'};
  ${props=>props.shadow&&`
    text-shadow: 2px 2px 10px black;
  `}
`
