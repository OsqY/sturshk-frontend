import { useAuth0 } from "@auth0/auth0-react"

const Home = () => {
  const { user, isAuthenticated } = useAuth0()

  const callApi = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/public`, {
        method: 'GET',
      })

      const responseData = response.data
      alert(responseData.message)
    } catch (error) {
      alert(error)
    }

  }
  return (
    <div className="flex flex-col items-center justify-center mx-96">
      <h1 className="mb-4 text-2xl font-bold">HOME.</h1>
      <div className="px-6 mb-4 text-justify">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
        culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
        excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
        voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
        elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
        cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem
        sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
      </div>
      {isAuthenticated ? (
        <div className="font-semibold text-green-500">
          Welcome {user?.name}{" "}
        </div>
      ) : (
        <div className="font-semibold text-red-500">
          You haven't logged in
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={callApi}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Call Public API
        </button>
      </div>
    </div>
  );
}

export default Home
