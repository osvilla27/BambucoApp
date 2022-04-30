import styled from 'styled-components/native';

export const ContainerAlign = styled.View`
  width: ${props=>props.width||'100%'};
  background-color: ${props=>props.color};
  padding: ${props=>props.p||'0px 0px'};
  justify-content: ${props=>props.justify||'center'};
  align-items: ${props=>props.align||'center'};
  ${props=>props.f&&`
    flex: 1;`
  }
`
export const ContainerJustify = styled.View`
  flex-direction: row;
  width: ${props=>props.width||'100%'};
  padding: ${props=>props.p||'0px 0px'};
  justify-content: ${props=>props.justify||'center'};
  align-items: ${props=>props.align||'center'};
`



