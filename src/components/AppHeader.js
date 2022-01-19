import React from 'react'
import { NavLink, useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = (authorized) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.stating.sidebarShow)
  const isSignedIn = useSelector((state) => state.stating.isSignedIn)
  let history = useHistory()
  const handleLogout = (e) => {
    e.preventDefault()
    // sessionStorage.setItem('userToken', '')
    // sessionStorage.clear()
    history.push('/')
    // whichever component you want it to route to
    dispatch({ type: 'logout' })
  }

  return (
    <CHeader position="sticky" className="mb-2">
      <CContainer fluid>
        <CHeaderToggler
          className=""
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
              Dashboard
            </CNavLink>
          </CNavItem>
  
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          {isSignedIn ? (
            <CButton>Login</CButton>
          ) : (
            // <CButton  onClick={handleLogout}>
            //   Logout
            // </CButton>
            <button className=" btn btn-outline-primary" size="sm" onClick={handleLogout}>
              Logout
            </button>
          )}
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}
// }

export default AppHeader
