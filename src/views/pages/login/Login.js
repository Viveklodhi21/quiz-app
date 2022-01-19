import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {
  CFormCheck,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormLabel,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.stating.username)
  const onSubmit = async (e) => {
    e.preventDefault()

    dispatch({
      type: 'LOGIN',
      user: {
        name: username,
        email: email,
        password: password,
        isSignedIn: true,
      },
    })
  }
  const onChangeEmail = (e) => {
    console.log(e.target.value)
  }
  const onChangePassword = (e) => {
    console.log(e.target.value)
  }
  const radioCheck = (e) => {
    dispatch({ type: 'ADMIN', admin: e.target.value })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody width="50%">
                  <div>
                    <CForm onSubmit={onSubmit}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          name="name"
                          // value={username}
                          autoComplete="username"
                          onChange={onChangeEmail}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          name="password"
                          // value={password}
                          placeholder="Password"
                          onChange={onChangePassword}
                        />
                      </CInputGroup>
                      <div className="form-check" onChange={radioCheck}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="SuperAdmin"
                          id="exampleRadios1"
                          value="SuperAdmin"
                          onChange={radioCheck}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                          Super Admin
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="CompanyAdmin"
                          id="exampleRadios2"
                          value="CompanyAdmin"
                          onChange={radioCheck}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                          Company Admin
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="HrAdmin"
                          id="exampleRadios3"
                          value="HrAdmin"
                          onChange={radioCheck}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                          HR Admin
                        </label>
                      </div>
                      <br />
                      <CRow>
                        <CCol xs={6}>
                          <Link to={'/dashboard'} type="submit">
                            <CButton color="secondary" className="px-4">
                              Login
                            </CButton>
                          </Link>
                        </CCol>
                      </CRow>
                    </CForm>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
