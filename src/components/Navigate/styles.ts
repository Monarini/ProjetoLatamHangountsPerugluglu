import styled from 'styled-components'

export const Container = styled.div`
  .list-media {
    padding: 10px 20px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    ul {
      list-style: none;
      line-height: 24px;
      padding: 0;
      svg {
        width: 30px !important;
      }
    }
    .media-body > strong {
      margin: 3px 0;
      display: block;
    }
  }
`

export const Nav = styled.nav`
  width: 48px;
  position: absolute;
  top: 0;
  left: 12px;
  .navbar-nav {
    align-items: center;
    .nav-item {
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:first-child {
        height: 60px;
      }
      &.active svg {
        fill: #0f9d58;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    width: 58px;
    left: 0;
  }
`
export const Icon = styled.svg`
  fill: rgba(255,255,255,0.87);
  transition: .5s;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
`
export const Navbar = styled.div`
  background-color: #ffffff;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);
  width: 256px;
  position: fixed;
  top: 0;
  left: -300px;
  bottom: 0;
  z-index: 16;
  transition: 300ms ease-out;
  &.active {
    left: 0;
  }
  svg {
    fill: rgba(0,0,0,0.54);
    width: 45px;
  }
  a.nav-item {
    display: none;
    @media only screen and (max-width: 768px) {
      display: flex;
    }
  }
  .nav-item {
    color: inherit;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    height: 48px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .5s;
    &:hover:not(.nav-brand), &.active {
      background-color: #f5f5f5;
    }
    &.active {
      color: #0f9d58;
      svg {
        fill: #0f9d58;
      }
    }
  }
  .nav-brand {
    padding: 19px 17px 1px;
    display: flex;
    align-items: center;
    box-sizing: content-box;
    cursor: initial;
    .h1 {
      font-size: 20px;
      margin-left: 15px;
    }
  }
`
