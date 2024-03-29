import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import LoginButton from "../auth/LoginButton"
import RegisterButton from "../auth/RegisterButton"
import LogoutButton from "../auth/LogoutButton"
import ProfileButton from "./ProfileButton"
import logo from "../../assets/Logo_Sturshk-removebg-preview.png"
import { useState } from "react"

const Header = () => {
  const { isAuthenticated } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="flex items-center justify-between px-2 bg-black text-white">
        <Link
          to="/"
          className="text-2xl font-bold md:text-3xl inline-flex items-center gap-2.5"
          aria-label="logo"
        >
          <img src={logo} className="h-32 w-32" />
        </Link>
        <div className="flex justify-end items-center lg:hidden">
          <button className="navbar-burger" onClick={toggleMenu}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </span>
          </button>
        </div>
        <nav className={`gap-12 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
          <Link
            to="/"
            className="text-lg font-semibold transition duration-100 hover:text-gray-500 active:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-lg font-semibold transition duration-100 hover:text-gray-500 active:text-gray-700"
          >
            Products
          </Link>
          <Link
            to="/client"
            className="text-lg font-semibold transition duration-100 hover:text-gray-500 active:text-gray-700"
          >
            Cliente View
          </Link>
          <Link
            to="/admin"
            className="text-lg font-semibold transition duration-100 hover:text-gray-500 active:text-gray-700"
          >
            Admin View
          </Link>
        </nav>
        <div className="-ml-8 flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          {isAuthenticated ? (
            <>
              <LogoutButton />
              <ProfileButton />
            </>
          ) : (
            <>
              <LoginButton />
              <RegisterButton />
            </>
          )}
          <Link to="/cart">
            <div className="px-4 py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
