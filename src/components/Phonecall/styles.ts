import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  position: fixed;
  right: 20px;
  bottom: 0;
  top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 9;
  pointer-events: none;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    left: 0;
    right: 0;
    top: 59px;
  }
`
export const Settings = styled.div`
  background-color: #eceff1;
  height: 32px;
  border-bottom: 1px solid rgba(0,0,0,.1);
`
export const Content = styled.div`
  min-height: 400px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    color: #fff;
    background-color: #0f9d58;
    height: 45px;
    border: 0;
    border-radius: 5rem;
    padding: 0 31px;
    margin-top: 90px;
    display: block;
    transition: .3s;
    &:hover, &:active {
      background-color: ${darken(0.05, '#0f9d58')};
    }
  }
  audio {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`
export const Icon = styled.svg`
  fill: #404040;
  transform: scale(5);
`
