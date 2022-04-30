import styled from 'styled-components/native'

export const StyledView = styled.View`
    height: 200px;
    margin: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.color||'pink'}
`