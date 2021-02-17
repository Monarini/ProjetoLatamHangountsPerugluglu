import styled from 'styled-components'

export const Container = styled.div`
  color: #404040;
  position: relative;
  .media {
    height: 72px;
    padding: 0 5px 0 24px;
    cursor: pointer;
    transition: .5s;
    .dropdown {
      display: none;
    }
    &.active {
      background-color: #f5f5f5;
      .dropdown {
        display: block;
      }
    }
    &.hover {
      background-color: #f5f5f5;
      .name {
        display: block;
        font-weight: 800;
      }
      .text {
        display: block;
        font-size: 12px;
        font-weight: 800;
      }
    }
    @media only screen and (max-width: 768px) {
      padding: 0 5px 0 20px;
    }
  }
`
export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const Date = styled.time`
  font-size: 12px;
  margin-right: 24px;
`

export const Icon = styled.svg`
  fill: #b4b4b4;
`
export const ClickOpenFlyout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  &:hover ~ .media {
    background-color: #f5f5f5;
    .dropdown {
      display: block;
    }
  }
`
