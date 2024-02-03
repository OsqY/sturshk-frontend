import { useAuth0 } from "@auth0/auth0-react"

async function getToken() {
  const { getAccessTokenSilently } = useAuth0()
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
  }
}

export const addProduct = async (product) {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/products`, {
    method: 'POST',
    body: product,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}

export const updateProduct = async (product, id: number) => {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/products/${id}`, {
    method: 'PUT',
    body: product,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}

export const deleteProduct = async (id: number) => {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/products/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}

export const getCategories = async () => {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/category`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}

export const createCategory = async (category) => {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/category`, {
    method: 'POST',
    body: category,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}

export const updateCategory = async (category, id: number) => {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/category/${id}`, {
    method: 'PUT',
    body: category,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}

export const deleteCategory = async (id: number) => {
  const token = await getToken()
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/category/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `bearer ${token}`
    }
  })
  if (res.ok) {
    alert("Action was commited!")
  }
}
