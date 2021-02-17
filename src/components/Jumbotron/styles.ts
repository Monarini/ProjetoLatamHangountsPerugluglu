import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin-left: 480px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 96px;
  bottom: 0;
  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 45px;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    margin-top: 12px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  @media only screen and (max-width: 1100px) {
    margin-left: 440px !important;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }

`
export const Actions = styled.div`
  margin-top: 50px;
  margin-left: -28px;
  display: flex;
  align-items: center;
`
export const ActionItem = styled(Link)`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 5px;
    @media only screen and (max-width: 1100px) {
      margin-right: 36px;
    }
  }
`
export const ActionCircle = styled.div`
  border: 2px solid #fff;
  border-radius: 100%;
  display: inline-block;
  margin-bottom: 24px;
  height: 80px;
  width: 80px;
  transition: all .27s ease-in-out;
  background: transparent;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgba(255,255,255,0.12);
    box-shadow: 0 0 16px rgba(0,0,0,0.5);
  }
  svg {
    fill: #fff;
  }
`
export const ActionCaption = styled.div`
  color: #fff;
  font-weight: 600;
  letter-spacing: .1px;
  text-transform: uppercase;
`
