import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react";
import CategoryCard from "../Components/category/CategoryCard";

const AdminPage = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [categories, setCategories] = useState([])
  const getToken = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE
        }
      })
      return token
    }
    catch (e) {
      console.error(e)
      return null
    }
  }
  const token = getToken()
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/category`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    },).then(res => res.json()).then(data => setCategories(data))
  })
  return (
    <div className="flex flex-col items-center justify-center mx-96">
      <h1 className="mb-4 text-2xl font-bold">ADMIN.</h1>
      {categories ?
        categories.map(category => <CategoryCard key={category?.id} category={category} />) : (<h2> No categories </h2>)
      }
    </div >
  )
}

export default AdminPage
