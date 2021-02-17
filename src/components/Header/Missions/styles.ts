import styled from 'styled-components'

export const Container = styled.div`
  margin-right: 20px;
  cursor: pointer;
  .dropdown-menu {
    width: 356px;
    padding: 20px 20px 15px;
    transform: translate3d(-322px, 40px, 0px) !important;
    @media only screen and (max-width: 576px) {
      width: auto;
      position: fixed !important;
      top: 67px !important;
      left: 19px !important;
      right: 19px;
      transform: unset !important;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-right: 10px;
  }
  .badge-missions {
    position: relative;
    &:before {
      content: '';
      background-color: #ea1d2c;
      width: 10px;
      height: 10px;
      position: absolute;
      right: -2px;
      bottom: -7px;
      border-radius: 50%;
      box-sizing: content-box;
      transition: .3s;
      opacity: 0;
    }
    &.active:before {
      opacity: 1;
    }
  }
`

export const Heading = styled.div`
  font-size: 17px;
  border-bottom: 1px solid rgba(0,0,0,.125);
  padding: 5px 0 19px;
`

export const Content = styled.div`
  position: relative;
`

export const Icon = styled.img``
