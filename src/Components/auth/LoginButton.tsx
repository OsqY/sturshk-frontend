import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="inline-block px-4 py-3 text-sm font-semibold text-center text-white transition duration-300 bg-black rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-900 md:text-base"
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo: window.location.pathname,
          }
        },
        )
      }
    >
      Login
    </button>
  )
}

export default LoginButton
