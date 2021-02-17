import styled from 'styled-components'

import background from '../../assets/bg.jpg'

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  min-height: 100%;
  &:before {
    content: '';
    background-color: rgba(0,0,0,.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const Content = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  left: 80px;
  top: 80px;
  bottom: 0;
  z-index: 9;
  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    top: 60px;
    left: 0;
  }
`
