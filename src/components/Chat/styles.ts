import styled from 'styled-components'

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
export const Messages = styled.div`
  padding-bottom: 44px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ul {
    margin: 0;
    padding: 5px 0 0 12px;
    li {
      margin-top: 5px;
    }
  }
  h4 {
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
  }
`
export const Responses = styled.div`
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.12),0 4px 4px 0 rgba(0,0,0,0.24);
  border-top: 1px solid rgba(0,0,0,.1);
`
