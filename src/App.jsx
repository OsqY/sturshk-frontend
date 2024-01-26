import { Route, Routes } from 'react-router-dom'
import Header from "./Components/header/Header"
import AdminPage from "../src/views/AdminPage"
import Home from "../src/views/Home"
import ErrorPage from "../src/views/ErrorPage"
import CallbackPage from "./Components/auth/CallbackPage"
import ClientProfilePage from "../src/views/ClientProfilePage"
import ClientPage from "../src/views/ClientPage"
import { AuthenticationGuard } from "./Components/auth/AuthenticationGuard"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AuthenticationGuard component={AdminPage} />} />
        <Route path='/client' element={<AuthenticationGuard component={ClientPage} />} />
        <Route path='/client/profile' element={<AuthenticationGuard component={ClientProfilePage} />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
