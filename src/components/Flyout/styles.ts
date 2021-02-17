import styled from 'styled-components'

import split from '../../assets/split.png'

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  position: fixed;
  right: 20px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 9;
  pointer-events: auto;
  &.minimized {
    pointer-events: none;
  }
  &.chat {
    top: 76px;
  }
  &.video {
    max-width: 595px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100% !important;
    left: 0;
    right: 0;
    top: 59px;
  }
`
export const Heading = styled.div`
  height: 36px;
  color: #fff;
  font-size: 13px;
  padding: 5px;
  background-color: #404040;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  pointer-events: auto;
  @media only screen and (max-width: 768px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`
export const Content = styled.div`
  background-color: #eceff1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 0px;
  overflow: hidden;
  &.active {
    max-height: 100%;
  }
`
export const IconChat = styled.div`
  background: no-repeat url(${split}) -754px -182px;
  height: 14px;
  width: 14px;
  margin: 0 5px;
  &.phone {
    background-position: -542px -173px;
    height: 14px;
    width: 14px;
  }
  &.video {
    background-position: -315px -218px;
    height: 9px;
    width: 19px;
  }
`
export const Close = styled.button`
  border: 0 solid transparent;
  padding: 0;
  background: no-repeat url(${split}) -159px -92px;
  height: 24px;
  width: 24px;
  opacity: .4;
  outline: 0;
  transition: .3s;
  z-index: 2;
  &:hover {
    background-color: rgba(255,255,255,.25);
    opacity: 1;
  }
`
export const Minimize = styled.button`
  border: 0 solid transparent;
  padding: 0;
  background: no-repeat url(${split}) -217px -21px;
  height: 24px;
  width: 24px;
  opacity: .4;
  outline: 0;
  transition: .3s;
  z-index: 2;
  &:hover {
    background-color: rgba(255,255,255,.25);
    opacity: 1;
  }
`
export const Maximize = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  &.active {
    display: none;
  }
`
