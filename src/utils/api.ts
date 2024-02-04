import { useAuth0 } from "@auth0/auth0-react"

export const addProduct = async (product, token: string) => {
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

export const updateProduct = async (product, id: number, token: string) => {
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

export const deleteProduct = async (id: number, token: string) => {
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

export const getCategories = async (token: string | null) => {
  const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/admin/category`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return await res.json()
}

export const createCategory = async (category, token: string) => {
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

export const updateCategory = async (category, id: number, token: string) => {
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

export const deleteCategory = async (id: number, token: string) => {
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
