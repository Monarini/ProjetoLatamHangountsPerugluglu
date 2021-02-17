import styled from 'styled-components'

import bg from '../../assets/bg.png'

export const Container = styled.div`
  background: url(${bg}) no-repeat left bottom;
  background-size: auto 85%;
  min-height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  text-align: center;
  margin-bottom: 1.5rem;
`

export const ImageEmail = styled.img`
  &.hover {
    cursor: pointer;
  }
`

export const Heading = styled.div`
  text-align: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 448px;
  margin: auto;
  .card-body {
    padding: 48px 40px 36px;
  }
  &.card-lg {
    max-width: 737px;
  }
  /* List */
  .list-group {
    margin: 0 -40px;
  }
  .list-group-item {
    border: 0;
    padding: 13px 40px;
    cursor: pointer;
    transition: .5s;
    &:not(:last-child) {
      margin-bottom: 1px;
      &:after {
        content: '';
        background-color: #e1e1e1;
        height: 1px;
        display: block;
        position: absolute;
        left: 40px;
        right: 40px;
        z-index: 1;
        transform: translateY(13px);
      }
    }
    &:hover {
      background-color: #f7f8f8;
    }
  }
`
