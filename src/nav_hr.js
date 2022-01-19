/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilExternalLink,
  cilListHighPriority,
  cilListNumbered,
  cilMediaStop,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const nav_hr = [
  {
    component: CNavTitle,
    name: 'HR',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilMediaStop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Exam Type',
    to: '/examtype',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Question',
    to: '/question',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  
  {
    component: CNavItem,
    name: 'Result',
    to: '/result',
    icon: <CIcon icon={cilListHighPriority} customClassName="nav-icon" />,
  },
  {
          component: CNavItem,
          name: 'Generate Exam',
          to: '/generatelink',
    icon: <CIcon icon={cilExternalLink} customClassName="nav-icon" />,

        },
  // {
  //   component: CNavGroup,
  //   name: 'Generate Link',
  //   to: '/generatelink',
  //   icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Select Exam Type',
  //       to: '/examType',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Email address',
  //       to: '/question',
  //     },
  //   
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Result',
  //   to: '/result',
  //   icon: <CIcon icon={cilArrowRight} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'User Id',
  //       to: '/examType',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Status',
  //       to: '/question',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Review',
  //       to: '/examType',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Answer',
  //       to: '/question',
  //     },
  //   ],
  // },
]

export default nav_hr
