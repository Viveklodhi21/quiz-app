/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {
  CButton,
  CCard,
  CFormLabel,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CFormTextarea,
} from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'

const AddHr = () => {
  const history = useHistory()
  const [added, setAdded] = useState(false)
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: '',
  //   address: '',
  //   phone_number: '',
  //   url: '',
  // })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')

  // const userData = useSelector((state) => state.stating.user)
  // const dispatch = useDispatch()

  // const { name, email, address, phone_number, url } = userData
  const onChangeData = (e) => {
    e.preventDefault()
    // setUserData({ ...userData, [e.target.name]: e.target.value })
    console.log(e.target.value)
    // setUserData(e.target.value)
    // console.log(userData)
  }

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
    history.push('/hr')
    // await axios.post('http://127.0.0.1:8000/api/', userData)
    setAdded(true)
    // console.log(userData)
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
                <CCard className="mx-4">
                  <CCardBody className="p-4">
                    <CForm>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                          HR Name
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput
                            type="name"
                            id="inputEmail3"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="form" className="col-sm-2 col-form-label">
                          HR Email
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="Email" id="form" />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="contact" className="col-sm-2 col-form-label">
                          HR Contact
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="number" id="contact" />
                        </CCol>
                      </CRow>
                      <CRow className="mb-3">
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">
                          HR Address
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormTextarea type="Address" id="input" />
                        </CCol>
                      </CRow>
                      <br />
                     
                      <div className='text-center' style={{marginBlock:"10px"}}>
                        <Link to={'/hr'}>
                          <CButton className="btn-dark" style={{ width: '10%' }} type="submit">
                            Add
                          </CButton>
                        </Link>
                        <Link to={'/hr'}>
                          <CButton className="btn-dark mx-4" style={{ width: '10%' }} type="submit">
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

export default AddHr
