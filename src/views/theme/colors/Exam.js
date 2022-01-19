import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import './Exam.scss'
// import { useRecordWebcam } from 'react-record-webcam/dist/hook'
// import { useRecordWebcam } from 'react-record-webcam/dist/hook/index'
import { useRecordWebcam } from 'react-record-webcam'
import Paginator from './paginator/Paginator'
import { AppHeader, AppSidebar } from 'src/components'

const Exam = () => {
  // const assign = []
  const [video, setVideo] = useState(false)
  const [name, setName] = useState('Vivek')
  const [active, setActive] = useState({
    activeObject: null,
    objects: [
      {
        id: '1',
        Question: 'What is your name?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '2',
        Question: "What is your father's name?",
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '3',
        Question: "What is your mother's name?",
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '4',
        Question: 'What is your family background?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '5',
        Question: 'What do you do for a living?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '6',
        Question: 'What is your aim of life?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '7',
        Question: 'Where do you see yourself in five years?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '8',
        Question: 'What do you live?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '9',
        Question: 'What kind of festivals do yo like?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '10',
        Question: 'What are your strengths and weaknesses?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
      {
        id: '11',
        Question: 'What is your name?',
        desc: 'Please proceed by clicking the Start recording Button ',
      },
    ],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [recbtn, setRecbtn] = useState(true)
  const [assign, setAssign] = useState([])
  const [disable, setDisable] = useState()
  const recordWebcam = useRecordWebcam()

  const pages = []
  for (let i = 1; i < Math.ceil(active.objects.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  // 1
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = active.objects.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (event, number, checked) => {
    if (Number(event.target.id) === currentPage + 1) {
      event.preventDefault()
      setCurrentPage(Number(event.target.id))
      setAssign((prevState) => [...prevState, event.target.id])
    }
  }
  const renderPageNumbers = pages.map((number) => {
    return (

      <button
        key={number}
        className={
          number < currentPage
            ? 'horizontal_list li completed'
            : currentPage === number
            ? 'horizontal_list li activee'
            : 'horizontal_list li inactivee'
        }
        id={number}
        disabled={number < currentPage ? true : false}
        onClick={handleClick}
      >
        {number}
      </button>
    )
  })

  const saveFile = async (video) => {
    const blob = await recordWebcam.getRecording()
    recordWebcam.download()
  }

  const functionToggle = () => {
    setRecbtn(false)
    recordWebcam.open()
    setVideo(true)
    console.log('camera open')
  }

  const functionToggle2 = () => {
    setRecbtn(true)
    saveFile()
    recordWebcam.close()
    setVideo(true)
    console.log('ca,mera close')
  }

  return (
    <>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3"></div>
          <div className="main_list">
            <h1>Welcome {name}</h1>
            <div className="user">
              <ul className="horizontal_list ">{renderPageNumbers}</ul>
            </div>
          </div>
          <div className="last_div">
            <h4>
              <Paginator currentItems={currentItems} />
            </h4>
            <div className="recording">
              <video ref={recordWebcam.webcamRef} height={220} width={219} autoPlay muted />
            </div>
          </div>
          <div className="btns">
            {recbtn ? (
              <CButton
                color="primary"
                onClick={() => {
                  functionToggle()
                }}
              >
                Start Recording
              </CButton>
            ) : (
              <CButton
                color="secondary"
                onClick={() => {
                  functionToggle2()
                }}
              >
                Stop Recording
              </CButton>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Exam
