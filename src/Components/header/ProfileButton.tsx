import { useNavigate } from "react-router-dom"

const ProfileButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/client/profile")}
      className="inline-block px-8 py-3 transition duration-300 rounded-lg outline-none hover:bg-gray-700 focus-visible:ring active:bg-gray-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
      </svg>
    </button>
  )
}

export default ProfileButton
