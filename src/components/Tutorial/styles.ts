import styled from 'styled-components'

export const Item = styled.div`
  background-color: #ffffff;
  padding: 50px;
  overflow-y: auto;
  box-sizing: border-box;
  h1 {
    color: #000000;
    font-weight: 200;
    margin: 0 0 15px;
  }
  p {
    margin-bottom: 15px;
  }
  picture {
    padding-left: 25px;
    float: right;
  }
  .logo {
    width: 100%;
    max-width: 255px;
    margin-bottom: 25px;
  }
  .swiper-next {
    display: block;
    margin: 20px auto 0;
  }
  &.video {
    padding: 0;
    display: flex;
    video {
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    max-height: 383px;
    padding: 25px;
    h1 {
      font-size: 20px;
      margin: 0;
    }
    .logo {
      max-width: 155px;
    }
  }
`
