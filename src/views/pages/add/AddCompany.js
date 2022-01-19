import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './Add.scss'
import {
  CButton,
  CCard,
  CCardBody,
  CFormLabel,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CFormTextarea,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'

const AddCompany = () => {
  const history = useHistory()
  const [added, setAdded] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const dispatch = useDispatch()

  const onChangeName = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }
  const onChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
    console.log(email)
  }
  const onChangeAddress = (e) => {
    e.preventDefault()
    setAddress(e.target.value)
    console.log(address)
  }
  const onChangeContact = (e) => {
    e.preventDefault()
    setContact(e.target.value)
    console.log(contact)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    setAdded(true)
    // await axios.post('http://127.0.0.1:8000/api/', userData)
    history.push('/company')
    // console.log(userData)
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="bg-light  d-flex flex-row ">
          <CContainer className="info-container-1">
            <CRow className="justify-content-center">
              <CCol md={12}>
                <CCard className="mx-0">
                  <h4 className="text-center  details-heading">Personal Details</h4>
                  <CCardBody className="p-4">
                    <CForm onSubmit={onSubmit}>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                          Name
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput
                            onChange={(e) => onChangeName(e)}
                            type="name"
                            id="inputEmail3"
                          />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="form" className="col-sm-2 col-form-label">
                          Email
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput onChange={onChangeEmail} type="Email" id="form" />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="contact" className="col-sm-2 col-form-label">
                          Phone
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="number" id="contact" onChange={onChangeContact} />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">
                          Address
                        </CFormLabel>
                        <CCol sm={10}>
                        <CFormTextarea type="Address" id="input" onChange={onChangeAddress}/>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={12}>
                <CCard className="mx-0">
                  <h4 className="text-center details-heading">Company Details</h4>
                  <CCardBody className="p-4">
                    <CForm onSubmit={onSubmit}>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                          Name
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput
                            onChange={(e) => onChangeName(e)}
                            type="name"
                            id="inputEmail3"
                          />
                        </CCol>
                      </CRow>
                      <br />
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="form" className="col-sm-2 col-form-label">
                          Email
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput onChange={onChangeEmail} type="Email" id="form" />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="contact" className="col-sm-2 col-form-label">
                          Contact
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="number" id="contact" onChange={onChangeContact} />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="contact" className="col-sm-2 col-form-label">
                          Website
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="number" id="contact" onChange={onChangeContact} />
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
                          Address
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormTextarea type="Address" id="input" onChange={onChangeAddress}/>
                        </CCol>
                      </CRow>
                      <br />
                      <div className="text-center add-button">
                        <Link to={'/company'}>
                          <CButton className="btn-dark" style={{ width: '30%' }} type="submit">
                            Add
                          </CButton>
                        </Link>
                        <Link className='mx-4' to={'/company'}>
                          <CButton className="btn-dark" style={{ width: '30%' }} type="submit">
                            Cancel
                          </CButton>
                        </Link>
                      </div>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </div>
    </div>
  )
}

export default AddCompany
