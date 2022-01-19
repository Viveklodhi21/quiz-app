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
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const EditUser = () => {
  const history = useHistory()
  const { id } = useParams()
  const [added, setAdded] = useState(false)
  const [currentFile, setCurrentFile] = useState(undefined)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    logo: '',
    website: '',
  })
  // const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const { name, email, address, phone, logo, website } = userData
  const onChangeData = (e) => {
    e.preventDefault()
    let files = e.target.file
    console.log(files)
       setUserData({ ...userData, [e.target.name]: e.target.value })
    console.log(userData)
  }

  useEffect(() => {
    loadUser()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://127.0.0.1:8000/api/${id}`, userData)
    setAdded(true)
    history.push('/company')
  }

  const loadUser = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/${id}`)
    setUserData(result.data)
    console.log('hiiiiiiiiiiiiii')
  }

  const handleClick = (e) => {
    e.preventDefault()
    setUserData({ ...userData, [e.name.target]: e.target.file })

    // dispatch()
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <div className="card">
                  <div className="card-header">User ID</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{userData.name}</li>
                    <li className="list-group-item">{userData.email}</li>
                    <li className="list-group-item">{userData.address}</li>
                    <li className="list-group-item">{userData.phone}</li>
                    <li className="list-group-item">{userData.logo}</li>
                  </ul>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={(e) => onSubmit(e)}>
                  <h1>Welcome</h1>
                  <p className="text-medium-emphasis">EDIT USER</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Username"
                      onChange={(e) => onChangeData(e)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      autoComplete="email"
                      onChange={(e) => onChangeData(e)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      name="address"
                      value={address}
                      placeholder="Address"
                      autoComplete="Address"
                      onChange={(e) => onChangeData(e)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="text"
                      name="phone"
                      value={phone}
                      placeholder="Phone"
                      autoComplete="phone"
                      onChange={(e) => onChangeData(e)}
                    />
                  </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        name="website"
                        value={website}
                        placeholder="Company"
                        autoComplete="company"
                        onChange={(e) => onChangeData(e)}
                      />
                    </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      name="logo"
                      type="file"
                      accept="image/*"
                      // value={logo}
                      placeholder="Logo"
                      onChange={(e) => onChangeData(e)}
                    />
                    <button onClick={handleClick}
                      className="btn btn-success btn-sm"
                      // disabled={currentFile}
                    >
                      Upload
                    </button>
                  </CInputGroup>
                  <div className="d-grid">
                    {added ? (
                      <CButton onClick={onSubmit} color="success">
                        Done
                      </CButton>
                    ) : (
                      <CButton onClick={onSubmit} color="info">
                        Update
                      </CButton>
                    )}
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default EditUser
