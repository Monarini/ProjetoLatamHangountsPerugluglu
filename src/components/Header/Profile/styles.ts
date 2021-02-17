import styled from 'styled-components'

export const Container = styled.div`
  .dropdown-menu {
    width: 356px;
    padding: 20px;
    transform: translate3d(-322px, 46px, 0px) !important;
    @media only screen and (max-width: 576px) {
      width: auto;
      position: fixed !important;
      top: 67px !important;
      left: 19px !important;
      right: 19px;
      transform: unset !important;
    }
  }
`
export const Heading = styled.div`
  font-size: 17px;
  border-bottom: 1px solid rgba(0,0,0,.125);
  padding: 5px 0 19px;
`
export const Content = styled.div`
  padding-bottom: 10px;
  span {
    color: #777;
    margin-bottom: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-size: 14px;
    line-height: 17px;
  }
`
