import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
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
  transition: .3s;
  visibility: hidden;
  opacity: 0;
  &.active {
    visibility: visible;
    opacity: 1;
  }
  &.completed {
    .heading {
      color: #ffffff;
      background-color: #3A1298;
    }
    .content {
      color: #00C0BB;
    }
    .actions {
      color: #000;
      background-color: #ffffff;
      border-top: 1px solid #E0DBEE;
      border-radius: 0;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: #fff;
  margin: 0 20px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  transition: .3s;
  transform: translateY(50px);
  &.active {
    transform: translateY(0);
  }
  &.danger {
    color: #F83561;
  }
`

export const Heading = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(41,0,136,.14);
  padding: 15px 0 12px;
`

export const Content = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 30px 15px;
`

export const Button = styled.button`
  text-transform: uppercase;
  background-color: #E0DBEE;
  width: 100%;
  border: 0;
  padding: 15px;
  transition: .3s;
  cursor: pointer;
  &:hover {
    color: #ffffff !important;
    background-color: #3A1298 !important;
  }
`
