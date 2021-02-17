import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #root {
    color: #5f6368;
    font-size: 14px;
    line-height: 1.2;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }
  .image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    &-full {
      width: 100%;
    }
  }
  .emogi {
    display: inline-block;
    width: 15px;
  }
  .badge-message {
    position: relative;
    &:before {
      content: '';
      background-color: #35ac19;
      width: 11px;
      height: 11px;
      position: absolute;
      right: -1px;
      bottom: -1px;
      border-radius: 50%;
      box-sizing: content-box;
      transition: .3s;
      opacity: 0;
    }
    &.active:before {
      opacity: 1;
    }
  }
  .small, small {
    font-size: 12px;
  }
  /* Headings */
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #202124;
    font-weight: 400;
  }
  .h4, h4 {
    font-size: 24px;
  }
  /* Card */
  .card {
    border-color: #dadce0;
    border-radius: 8px;
  }
  /* Form */
  .form-control {
    background-color: #edeef6;
    min-height: 56px;
    border: 0;
    padding: 15px;
    border-radius: 5px;
    &[readonly] {
      background-color: #edeef6;
    }
  }
  /* Buttons */
  .btn {
    font-weight: bold;
    border-radius: 5px;
    padding: 7px 14px;
  }
  .btn-light {
    background-color: #ffffff;
    border: 1px solid #dadce0;
    transition: .3s;
    &:hover, &:focus {
      color: #3A1298;
      background-color: transparent;
      border-color: #3A1298;
    }
  }
  /* list */
  .list-group-item {
    padding: 15px 0;
  }

  a:hover {
    text-decoration: none;
  }
  .videomodal {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    opacity: 0;
    pointer-events: none;
    transition: .3s;
    &-content {
      width: 100%;
      max-width: 700px;
      position: relative;
      z-index: 1;
      box-sizing: border-box;
      video {
        width: 100%;
        height: 100%;
      }
    }
    &-overlay {
      background-color: rgba(0,0,0,0.7);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &.active {
      opacity: 1;
      pointer-events: initial;
    }
  }
  .modalvideo {
    color: blue !important;
    text-decoration: underline !important;
    cursor: pointer !important;
  }
`
