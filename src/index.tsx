import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.sass'

// import avatar from './assets/avatars/avatar1.png'
import split from './assets/split.png'
import call from './assets/call.svg'
import videocam from './assets/videocam.svg'
import chat from './assets/chat.svg'
import logo from './assets/logo.png'
import bg from './assets/bg.png'

const preloadImgs = (imgSrcs: any, onLoaded: any) => {
  const totalImages = imgSrcs.length
  let imgsLoaded = 0
  imgSrcs.forEach((imgSrc: any) => {
    const img = new Image()
    img.onload = () => {
      imgsLoaded++

      if (imgsLoaded === totalImages) {
        onLoaded()
      }
    }

    img.src = imgSrc
  })
}

preloadImgs([
  split,
  call,
  videocam,
  chat,
  logo,
  bg
], function () {
  ReactDOM.render(<App />, document.getElementById('root'))
})
