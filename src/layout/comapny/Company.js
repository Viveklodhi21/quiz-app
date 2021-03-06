/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { CButton } from '@coreui/react'
import { Link } from 'react-router-dom'
import { CCardGroup, CContainer } from '@coreui/react'
import { cilDelete, cilPencil, cilUser } from '@coreui/icons'
import './Company.scss'
import { CButtonGroup } from '@coreui/react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'

import { CAvatar } from '@coreui/react'
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
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import CIcon from '@coreui/icons-react'
import { Title } from 'chart.js'
// import { Popovers } from 'src/views/base'

const CompanyInfo = () => {
  const [popUpButton, setPopUpButton] = useState(false)
  const [assign, setAssign] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const dispatch = useDispatch()

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

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
      user: { name: 'En??as Kwadwo', new: true, registered: 'Jan 1, 2021' },
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
        name: 'Agapetus Tade????',
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
        name: 'Friderik D??vid',
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
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = tableExample.slice(indexOfFirstItem, indexOfLastItem)

  const handleClick = (event) => {
    // if (Number(event.target.id) === currentPage + 1) {
    event.preventDefault()
    console.log(event.target.id)
    setCurrentPage(Number(event.target.id))
    setAssign((prevState) => [...prevState, event.target.id])
    console.log('alldone bro')
    // }
  }

  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }
  const handleDelete = () => {
    confirm('Press OK to delete!')
  }

  // const url = `http://localhost:3000/users/`

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       // dispatch(setCompanyData(res.data))
  //       setCompanyData(res.data)
  //       console.log(res.data)
  //       console.log(companyData)
  //       // setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  // const loadUsers = (id) => {
  //   const result = axios.get(`http://127.0.0.1:8000/api/${id}`)
  //   setDeleteData(result.data)
  //   console.log('hiiiiiiiiiiiiii')
  // }

  // const handleDelete = (id) => {
  //   // console.log(id)
  //   // const deletedItem = companyData.filter()
  //   const result = axios.delete(`http://127.0.0.1:8000/api/${id}`)
  //   // loadUsers()
  //   dispatch({ type: 'DELETE' })

  //   // setLogo(e.target.value)
  // }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 ">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={12}>
                <CCardGroup>
                  <CCard className="p-4">
                    <div className="addbtn">
                      <Link className="btn-dark" to="/add">
                        <CButton>Add Company</CButton>
                      </Link>
                    </div>

                    <CCardBody>
                      <CTable align="middle" className="mb-0 border" hover responsive>
                        <CTableHead color="light">
                          <CTableRow>
                            <CTableHeaderCell className="text-center">ID</CTableHeaderCell>
                            <CTableHeaderCell className="text-center"> Name</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Address</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Contact</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Website</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Logo</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Created At</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Edit</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Delete </CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {currentItems.map((item, index) => (
                            <CTableRow v-for="item in tableItems" key={index}>
                              <CTableDataCell className="text-center">2</CTableDataCell>
                              <CTableDataCell className="text-center">
                                <div>{item.user.name}</div>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                <div>jhondavid221@gmail.com</div>
                              </CTableDataCell>
                              <CTableDataCell className="text-center" size="sm">
                                MONKEY MAN ENTERPRISES SUITE 109 FLOOR 5, AUSTRALIA
                              </CTableDataCell>
                              <CTableDataCell>+62 567942742</CTableDataCell>
                              <CTableDataCell className="text-center">
                                http://localhost:3000/#/company
                              </CTableDataCell>

                              <CTableDataCell className="text-center">
                                <CAvatar size="sm" src={item.avatar.src} />
                              </CTableDataCell>
                              <CTableDataCell className="text-center">2 jan 2018</CTableDataCell>

                              <CTableDataCell className="text-center">
                                <div
                                  className="statusclass"
                                  onClick={() => {
                                    setPopUpButton(true)
                                  }}
                                >
                                  <CAvatar size="lg" status={item.avatar.status} />
                                </div>
                                {/* <Popovers>
                                  <h4>Select Activity</h4>
                                  {!popUpButton ? (
                                    <CButton>Active</CButton>
                                  ) : (
                                    <CButton>UnActive</CButton>
                                  )}
                                </Popovers> */}
                              </CTableDataCell>

                              <CTableDataCell className="text-center">
                                <CButtonGroup>
                                  <Link to={'/editcompany'}>
                                    <CButton size="sm" className="btn btn-dark">
                                      <CIcon icon={cilPencil} />
                                    </CButton>
                                  </Link>
                                </CButtonGroup>
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                <CButtonGroup>
                                  <CButton
                                    size="sm"
                                    className="btn btn-dark"
                                    onClick={handleDelete}
                                  >
                                    <CIcon icon={cilDelete} />
                                  </CButton>
                                </CButtonGroup>
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

export default CompanyInfo
