/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import Webcam from 'react-webcam'
import '../../../../../../coreui-free-react-admin-template-main/node_modules/video-react/dist/video-react.full'

const Recording = (video, capture) => {
  const webcamRef = React.useRef(null)

  const WebcamComponent = () => <Webcam />

  const videoConstraints = {
    width: 255,
    height: 265,
    facingMode: 'user',
  }

  return (
    <>
      {video ? (
        <>
          <Webcam
            audio={false}
            height={217}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            width={220}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              console.log(e.preventDefault)
            }}
          >
            Capture
          </button>
        </>
      ) : (
        <p>s</p>
      )}
    </>
  )
}

export default Recording
