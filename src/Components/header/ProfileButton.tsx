import { useNavigate } from "react-router-dom"

const ProfileButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate("/client/profile")}
      className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
    >
      Profile
    </button>
  )
}

export default ProfileButton
