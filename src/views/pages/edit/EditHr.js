/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { AppHeader, AppSidebar } from 'src/components'

const EditHr = () => {
  // const history = useHistory()
  // const { id } = useParams()
  // const [added, setAdded] = useState(false)
  // const [currentFile, setCurrentFile] = useState(undefined)
  // const [userData, setUserData] = useState({
  //   name: '',
  //   email: '',
  //   address: '',
  //   phone: '',
  //   logo: '',
  //   website: '',
  // })
  // // const user = useSelector((state) => state.user)
  // const dispatch = useDispatch()

  // const { name, email, address, phone, website } = userData
  // const onChangeData = (e) => {
  //   e.preventDefault()
  //   let files = e.target.file
  //   console.log(files)
  //      setUserData({ ...userData, [e.target.name]: e.target.value })
  //   console.log(userData)
  // }

  // useEffect(() => {
  //   loadUser()
  // }, [])

  // const onSubmit = async (e) => {
  //   e.preventDefault()
  //   await axios.put(`http://127.0.0.1:8000/api/${id}`, userData)
  //   setAdded(true)
  //   history.push('/companyinformation')
  // }

  // const loadUser = async () => {
  //   const result = await axios.get(`http://127.0.0.1:8000/api/${id}`)
  //   setUserData(result.data)
  //   console.log('hiiiiiiiiiiiiii')
  // }

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   setUserData({ ...userData, [e.target.name]: e.target.file })
  //   history.push('/company')
  //   dispatch()
  // }
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
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center">
          <CContainer>
            <CRow className="justify-content-flexStart">
              <CCol md={12}>
                <CCard className="mx-0">
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
                        <CFormLabel htmlFor="input" className="col-sm-2 col-form-label">
                           Address
                        </CFormLabel>
                        <CCol sm={10}>
                          <CFormInput type="Address" id="input" onChange={onChangeAddress} />
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
                      <br />
                     <div className='text-center'>
                     <Link to={'/hr'}>
                        <CButton className="btn-dark" type="submit">
                          Update
                        </CButton>
                      </Link> <Link className='mx-4' to={'/hr'}>
                        <CButton className="btn-dark" type="submit">
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

export default EditHr
