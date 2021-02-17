import styled from 'styled-components'

export const Container = styled.div`
  color: #263238;
  width: 100%;
  padding: 4px 14px 4px 14px;
  display: flex;
  align-items: flex-start;
  &.default {
    display: flex;
    justify-content: flex-end;
    > div:nth-child(1) {
      display: none; /* CASO DESEJAR QUE O AVATAR APAREÇA NO DEFAULT, FAVOR ATIVAR AQUI (APAGAR ESSA LINHA ) */
      order: 2;
      z-index: 2;
    }
    > div:nth-child(2) {
      order: 1;
    }
    .content, .loading {
      background-color: #cfd8dc;
      border-top-right-radius: 0;
      margin-right: 4px;
      &:before {
        content: "";
        display: block;
        width: 7px;
        height: 8px;
        background: #cfd8dc;
        position: absolute;
        top: 0px;
        right: -1px;
      }
      &:after {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #eceff1;
        position: absolute;
        top: 0px;
        right: -12px;
      }
    }
  }
  &.primary {
    /* SMALL AVATAR
    
    &:not(.active) {
      > div:nth-child(1) {
        width: 28px;
        height: 28px;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }*/

    > div:nth-child(1) {
      order: 1;
      z-index: 2;
    }
    > div:nth-child(2) {
      order: 2;
    }
    .content, .loading {
      background-color: #ffffff;
      border-top-left-radius: 0;
      margin-left: 4px;
      &:before {
        content: "";
        display: block;
        width: 7px;
        height: 8px;
        background: #ffffff;
        position: absolute;
        top: 0px;
        left: -1px;
      }
      &:after {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #eceff1;
        position: absolute;
        top: 0px;
        left: -12px;
      }
    }
  }
  &.default, &.active {
    .loading {
      display: none;
    }
    .content {
      display: block;
    }
  }
`
export const Content = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  p:not(:last-child) {
    margin-bottom: 15px;
  }
  .loading {
    display: block;
    padding: 16px 9px;
    border-radius: 3px;
    .loading-dots {
      display: block;
      border-radius: 50%;
      width: 2px;
      height: 2px;
      background-color: #53a93f;
      box-shadow: 0 0 0 1px rgba(83, 169, 63, 0.5);
      float: left;
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
  .content {
    display: none;
    font-size: 13px;
    word-wrap: anywhere;
    line-height: 1.1;
    padding: 9px;
    border-radius: 7px;
  }
`
