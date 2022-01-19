/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import { CCardGroup, CContainer } from '@coreui/react'
import './generateLink.scss'
import { CButtonGroup } from '@coreui/react'
import Select from 'react-select'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { AppHeader, AppSidebar } from 'src/components'
import EmailChip from 'src/components/emailChip/EmailChip'
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes'

const GenerateLink = () => {
  const examTypes = [
    {
      value: 1,
      label: 'Interview',
    },
    {
      value: 2,
      label: 'On Boarding',
    },
    {
      value: 3,
      label: 'HighSchool Exams',
    },
    {
      value: 4,
      label: ' Multiple choice exams',
    },
    {
      value: 5,
      label: ' Open-book and take-home exams',
    },
    {
      value: 6,
      label: ' Problem or case-based exams',
    },
    {
      value: 7,
      label: ' Essay exams',
    },
    {
      value: 8,
      label: ' Oral exams',
    },
    {
      value: 9,
      label: 'University exams',
    },
  ]

  const DropdownQuestions = [
    {
      value: 1,
      label: ' what is your name',
    },
    {
      value: 2,
      label: '     What is your fathers name ',
    },
    {
      value: 3,
      label: '     What is your mothers name',
    },
    {
      value: 4,
      label: '   What is your nationality',
    },
    {
      value: 5,
      label: '   Do you want study abroad',
    },
    {
      value: 6,
      label: ' Where do you live',
    },
    {
      value: 7,
      label: ' What is your current salary',
    },
    {
      value: 8,
      label: ' What is you security question',
    },
  ]
  const [visible, setVisible] = useState(false)
  const [companyData, setCompanyData] = useState([])
  const [selected, setSelected] = useState(true)
  const [selectedExam, setSelectedExam] = useState(examTypes.label)

  const checkingDropdown = (e) => {
    // e.preventDefault()
    console.log(e.label)
    setSelectedExam(e.label)
    setSelected(false)
    // console.log(selectedDropdown)
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-1">
          <CContainer>
            <CRow className="justify-content-left ">
              <CCol>
                <CCardGroup>
                  <CCard className="p-1 m-1">
                    <CCardBody className="m-0">
                      <div className="mx-4 selecting">
                        <Select
                          placeholder="Select Exam-Type"
                          options={examTypes}
                          onChange={checkingDropdown}
                        />
                      </div>
                    </CCardBody>
                    <br />
                    <CCardBody className="mx-left">
                      <div className="mx-4">
                        <ReactMultiselectCheckboxes
                          width="62%"
                          options={DropdownQuestions}
                          onChange={checkingDropdown}
                        />
                      </div>
                    </CCardBody>

                    <CCardBody className="mx-0">
                      <div className="mx-4 selecting">
                        <EmailChip />
                      </div>
                    </CCardBody>
                    <CCardBody className="m-0">
                      <div className="mx-4 selecting">
                        <CButtonGroup>
                          <CButton>Generate Exam</CButton>
                        </CButtonGroup>
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

export default GenerateLink
