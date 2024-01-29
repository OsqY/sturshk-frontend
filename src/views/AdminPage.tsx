import { useAuth0 } from "@auth0/auth0-react"

const AdminPage = () => {
  const { getAccessTokenSilently } = useAuth0()

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE
        }
      })

      const response = await fetch(
        `${import.meta.env.VITE_API_SERVER_URL}/api/admin`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      const responseData = await response.json()

      alert(responseData.message)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mx-96">
      <h1 className="mb-4 text-2xl font-bold">ADMIN.</h1>
      <div className="px-6 mb-4 text-justify">
        Admin View
      </div>
      <button
        onClick={callApi}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Call Admin API
      </button>
    </div>
  )
}

export default AdminPage
