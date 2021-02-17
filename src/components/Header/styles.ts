import styled from 'styled-components'

export const Container = styled.header`
  min-height: 60px;
  padding: 0 30px 0 72px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  .navbar-brand {
    z-index: 1;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 20px 0 60px;
    position: relative;
    z-index: unset;
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`
