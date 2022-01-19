/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Company from './layout/comapny/Company'
import ExamType from './layout/examtype/ExamType'
import GenerateLink from './layout/generatelink/GenerateLink'
import HR from './layout/hr/HR'
import Question from './layout/question/Question'
import Result from './layout/results/Result'
import './scss/style.scss'
import AddCompany from './views/pages/add/AddCompany'
import EditUser from './views/pages/edit/EditUser'
import Exam from './views/theme/colors/Exam'
import CompanyInfo from './layout/companyInfo/CompanyInfo'
import AddCompanyInfo from './views/pages/add/AddCompanyInfo'
import AddHr from './views/pages/add/AddHr'
import EditCompany from './views/pages/edit/EditCompany'
import EditHr from './views/pages/edit/EditHr'
import Dashboard from './views/dashboard/Dashboard'
import View from './components/view/View'
import EditCompanyInformation from './views/pages/edit/EditCompanyInformation'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/add/AddCompany'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />} />
            <Route exact path="/add" name="Add Page" render={() => <AddCompany />} />
            <Route
              exact
              path="/edituser"
              name="Edit Page"
              render={(props) => <EditUser {...props} />}
            />
            <Route
              exact
              path="/edituser/:id"
              name="Edit Page"
              render={(props) => <EditUser {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route
              exact
              path="/dashboard"
              name="Default Layout"
              render={(props) => <DefaultLayout {...props} />}
            />
            <Route path="/exam" name="Exam" render={() => <Exam />} />
            <Route
              exact
              path="/company"
              name="Company"
              render={(props) => <Company {...props} />}
            />
            <Route exact path="/view" name="View" render={(props) => <View {...props} />} />
            {/* <Route exact path="/dashboard" name="Companydashboard" render={<Dashboard />} /> */}
            <Route path="/hr" name="HR" render={(props) => <HR {...props} />} />
            <Route path="/examtype" name="ExamType" render={(props) => <ExamType {...props} />} />
            <Route
              path="/generatelink"
              name="GenerateLink"
              render={(props) => <GenerateLink {...props} />}
            />
            <Route path="/question" name="Question" render={(props) => <Question {...props} />} />
            <Route path="/result" name="Result" render={(props) => <Result {...props} />} />
            <Route
              path="/addcompanyinformation"
              name="Add Company Information"
              render={(props) => <AddCompanyInfo {...props} />}
            />
            <Route path="/addhr" name="Add HR" render={(props) => <AddHr {...props} />} />
            <Route
              exact
              path="/editcompany"
              name="Edit Company"
              render={(props) => <EditCompany {...props} />}
            />
            <Route
              exact
              path="/editcompany/:id"
              name="Edit Company Page"
              render={(props) => <EditCompanyInfo {...props} />}
            />
            <Route
              path="/editcompanyinformation"
              name="Edit Company Information"
              render={(props) => <EditCompanyInformation {...props} />}
            />
            <Route
              path="/companyinformation"
              name="Company Information"
              render={() => <CompanyInfo />}
            />
            <Route path="/addhr" name="Add HR" render={(props) => <AddHr {...props} />} />
            <Route exact path="/edithr" name="Edit hr" render={() => <EditHr />} />
            <Route exact path="/edithr/:id" name="Edit hr" render={() => <EditHr />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
