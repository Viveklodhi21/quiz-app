/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CCardGroup, CContainer } from '@coreui/react'
import { cilUser } from '@coreui/icons'
import './View.scss'
import {
  CProgress,
  CTableDataCell,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CCard,
  CCardBody,
  CTableRow,
  CButtonGroup,
  CButton,
  CCol,
  CRow,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'
// import React, { lazy } from 'react'

// import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  // cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const View = () => {
  const [visible, setVisible] = useState(false)
  const [companyData, setCompanyData] = useState([])
  const [deleteData, setDeleteData] = useState([])
  // const user = useSelector((state) => state.companyData)
  const [assign, setAssign] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const dispatch = useDispatch()

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  const pages = []
  for (let i = 1; i < Math.ceil(tableExample.length / itemsPerPage); i++) {
    pages.push(i)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  // 1
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = tableExample.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (event) => {
    // if (Number(event.target.id) === currentPage + 1) {
    event.preventDefault()
    console.log(event.target.id)
    setCurrentPage(Number(event.target.id))
    setAssign((prevState) => [...prevState, event.target.id])
  
    // }
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                          <CTableRow>
                            <CTableHeaderCell className="text-center">
                              {/* <CIcon icon={cilPeople} /> */}
                              ID
                            </CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Question</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Answer</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Status </CTableHeaderCell>
                     
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {currentItems.map((item, index) => (
                            <CTableRow v-for="item in tableItems" key={index}>
                              <CTableDataCell className="text-center">1</CTableDataCell>

                              <CTableDataCell className="text-center">
                                <p>what is your name</p>
                              </CTableDataCell>

                              <CTableDataCell className="text-center flexing">
                                <div className="answer">tap to see Answer</div>
                              </CTableDataCell>

                              <CTableDataCell className="text-center">
                                <div>
                                  {item.usage.value}
                                  <CProgress
                                    thin
                                    color={item.usage.color}
                                    value={item.usage.value}
                                  />
                                </div>
                              </CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                    </CCardBody>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center  ">
                        <li id="1" className="page-item page-link" onClick={handleClick}>
                          1
                        </li>
                        <li id="2" className="page-item page-link" onClick={handleClick}>
                          2
                        </li>
                        <li id="3" className="page-item page-link" onClick={handleClick}>
                          3
                        </li>

                        <li id="4" className="page-item page-link" onClick={handleClick}>
                          4
                        </li>
                        <li id="5" className="page-item page-link" onClick={handleClick}>
                          5
                        </li>
                        <li id="6" className="page-item page-link" onClick={handleNext}>
                          Next
                        </li>
                      </ul>
                    </nav>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </div>
    </div>
  )
}

export default View
