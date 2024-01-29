import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      className="inline-block px-4 py-3 text-sm font-semibold text-center text-white transition duration-300 bg-black rounded-lg outline-none ring-gray-300 hover:bg-red-700 focus-visible:ring active:bg-red-700 md:text-base"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </button>
  )
}

export default LogoutButton
