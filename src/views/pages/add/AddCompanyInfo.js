/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './Add.scss'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardGroup,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormTextarea,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'

const AddCompanyInfo = () => {
  const history = useHistory()
  const [added, setAdded] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    logo: '',
    website: '',
  })
  // const user = useSelector((state) => state.nav.user)
  const dispatch = useDispatch()

  const { name, email, address, phone_number, url } = userData
  const onChangeData = (e) => {
    setUserData({ ...userData, userData: e.target.value })
    // console.log(e.target.value)
    // setUserData(e.target.value)
    console.log(userData)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setAdded(true)
    await axios.post('http://127.0.0.1:8000/api/', userData)
    history.push('/company')
    console.log(userData)
  }
  const handleStatus = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center">
          <CContainer>
            <CRow className="justify-content-flexStart">
              <CCol md={12}>
                <CCardGroup>
                  <CCard className="p-3">
                    <CCardBody width="40%">
                      <div>
                        <br />

                        <CForm>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                              Company Name
                            </CFormLabel>

                            <CCol sm={10}>
                              <CFormInput type="name" id="inputEmail3" />
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="form" className="col-sm-2 col-form-label">
                              Company Email
                            </CFormLabel>

                            <CCol sm={10}>
                              <CFormInput type="Email" id="form" />
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="contact" className="col-sm-2 col-form-label">
                              Company Contact
                            </CFormLabel>
                            <CCol sm={10}>
                              <CFormInput type="number" id="contact" />
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="logo" className="col-sm-2 col-form-label">
                              Logo
                            </CFormLabel>
                            <CCol sm={10}>
                              <CFormInput type="file" id="logo" />
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">
                              Company Address
                            </CFormLabel>
                            <CCol sm={10}>
                              <CFormTextarea type="Address" id="input"/>
                            </CCol>
                          </CRow>

                          <br />
                          <div className='text-center'>

                          <Link to={'/Companyinformation'}>
                            <CButton className="btn-dark" style={{width:"10%"}} type="submit">
                              Add
                            </CButton>
                          </Link>
                          <Link className='mx-4' to={'/Companyinformation'}>
                            <CButton className="btn-dark" style={{width:"10%"}} type="submit">
                              Cancel
                            </CButton>
                          </Link>
                          </div>
                        </CForm>
                      </div>
                    </CCardBody>
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

export default AddCompanyInfo
