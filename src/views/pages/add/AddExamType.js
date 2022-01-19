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
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'

const AddExamType = () => {
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
    e.preventDefault()
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
            <CRow className="justify-content-center">
              <CCol md={10}>
                <CCardGroup>
                  <CCard className="p-3">
                    <CCardBody width="40%">
                      <div>
                        <br />

                        <CForm>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                              Title
                            </CFormLabel>

                            <CCol sm={10}>
                              <CFormInput type="name" id="inputEmail3" />
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="form" className="col-sm-2 col-form-label">
                              Created By
                            </CFormLabel>

                            <CCol sm={10}>
                              <CFormInput type="Email" id="form" />
                            </CCol>
                          </CRow>
                          <CRow className="mb-3">
                            <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">
                              Created At
                            </CFormLabel>
                            <CCol sm={10}>
                              <CFormInput type="Address" id="input" />
                            </CCol>
                          </CRow>

                          <br />
                          <Link to={'/examtype'}>
                            <CButton className="btn-dark" type="submit">
                              Add
                            </CButton>
                          </Link>
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

export default AddExamType
