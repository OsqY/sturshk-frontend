import { useAuth0 } from "@auth0/auth0-react"
import girlImage from "../assets/balenciaga-model-with-a-german-style.jpg"
import manImage from "../assets/image-of-a-black-model-showing-its-outfit-based-in.jpg"
import womanImage from "../assets/image-of-a-asian-model-showing-its-outfit-based-in (1).jpg"
import SearchBar from "../Components/SearchBar"

const Home = () => {
  const { user, isAuthenticated } = useAuth0()

  const callApi = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/public/products`, {
        method: 'GET',
      })

      const responseData = await response.json()
      alert(responseData.message)
    } catch (error) {
      alert(error)
    }

  }
  return (
    <>
      <SearchBar />
      <div className="relative">
        <img src={girlImage} className="w-full max-h-screen object-cover filter brightness-50" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mx-auto py-2">
          <div className="px-6 mb-4 text-justify text-white font-bold text-sm sm:text-lg md:text-xl">
            Welcome to a realm of sartorial excellence.
          </div>
        </div>
        <img src={manImage} className="w-full max-h-screen object-cover filter brightness-50" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mx-auto py-2">
          <div className="px-6 mb-4 text-justify text-white font-bold text-sm sm:text-lg md:text-xl">
            Welcome to a realm of sartorial excellence.
          </div>
        </div>
        <img src={womanImage} className="w-full max-h-screen object-cover filter brightness-50" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mx-auto py-2">
          <div className="px-6 mb-4 text-justify text-white font-bold text-sm sm:text-lg md:text-xl">
            Welcome to a realm of sartorial excellence.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
