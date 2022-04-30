import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  flex:1;
  padding: 40px 40px;
  justify-content: space-between;
  align-items: center;
`
export const Backdrop = styled.View`
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgba(225, 225, 225, 0.7);
  line-height: 1;
  backdrop-filter: blur(10px);
  webkit-backdrop-filter: blur(10px);
`