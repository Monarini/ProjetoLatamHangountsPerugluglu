import styled from 'styled-components'

export const Container = styled.div`
  min-height: 64px;
  max-height: 160px;
  box-sizing: border-box;
  .swiper-pagination {
    display: none;
    position: static;
    margin-bottom: 3px;
  }
  &.hasAnswer {
    .swiper-pagination {
      display: block;
    }
  }
  .image {
    max-height: 110px;
  }
`
export const Item = styled.div`
  height: auto !important;
  padding: 7px 7px 3px 7px;
`
export const Message = styled.div`
  color: #263238;
  font-size: 13px;
  word-wrap: anywhere;
  background-color: #cfd8dc;
  width: 100%;
  height: 100%;
  border: 1px solid #cfd8dc;
  border-radius: 4px;
  padding: 9px;
  display: block;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  transition: .3s;
  &:hover {
    border-color: #5890fe;
  }
  p:not(:last-child) {
    margin-bottom: 15px;
  }
  &:not(:nth-child(1)):not(:nth-child(2)) {
    margin: 10px 0;
  }
`
