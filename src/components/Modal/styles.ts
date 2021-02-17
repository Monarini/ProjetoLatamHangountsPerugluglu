import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 12;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`
