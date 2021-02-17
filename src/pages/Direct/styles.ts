import styled from 'styled-components'

export const Container = styled.div`

`

export const Button = styled.div`
  color: #404040;
  height: 64px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: .5s;
  &:hover {
    background-color: #f5f5f5;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

export const ButtonCircle = styled.div`
  background-color: #0f9d58;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonIcon = styled.svg`
  fill: #fff;
`
