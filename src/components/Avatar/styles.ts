import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid transparent;
  border-radius: 50%;
  margin: -2px;
  transition: 0.5s;
  cursor: pointer;
  &.active {
    border-color: #3a1298;
  }
`
export const Image = styled.img`
  border-radius: 50%;
  &.sm {
    width: 32px;
    height: 32px;
  }
  &.ms {
    width: 40px;
    height: 40px;
  }
  &.md {
    width: 44px;
    height: 44px;
  }
  &.lg {
    width: 55px;
    height: 55px;
  }
`
