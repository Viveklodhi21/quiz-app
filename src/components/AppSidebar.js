import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import nav_company from 'src/nav_company'
import nav_hr from 'src/nav_hr'
import nav_user from '../nav_user'

const AppSidebar = () => {
  const admin = useSelector((state) => state.stating.admin)
  const isSignedIn = useSelector((state) => state.stating.isSignedIn)
  console.log(isSignedIn);
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.stating.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.stating.sidebarShow)
  return (
    <>
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            {admin === 'SuperAdmin' ? (
              <AppSidebarNav items={navigation} />
            ) : admin === 'CompanyAdmin' ? (
              <AppSidebarNav items={nav_company} />
            ) : admin === 'HrAdmin' ? (
              <AppSidebarNav items={nav_hr} />
            ) : !isSignedIn?(
              <AppSidebarNav items={nav_user} />
            ):(
              <AppSidebarNav items={nav_user} />
            )}
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebar>
    </>
  )
}

export default React.memo(AppSidebar)
