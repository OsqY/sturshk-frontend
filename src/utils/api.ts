
export const addProduct = async (product, token: string) {
  const res = await fetch("http://localhost:8080/api/admin/products", {
    method: 'POST',
    body: product,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}

export const updateProduct = async (product, token: string, id: number) => {
  const res = await fetch(`http://localhost:8080/api/admin/products/${id}`, {
    method: 'PUT',
    body: product,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}

export const deleteProduct = async (token: string, id: number) => {
  const res = await fetch(`http://localhost:8080/api/admin/products/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}

export const getCategories = async (token: string) => {
  const res = await fetch("http://localhost:8080/api/admin/category", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}

export const createCategory = async (category, token: string) => {
  const res = await fetch("http://localhost:8080/api/admin/category", {
    method: 'POST',
    body: category,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}

export const updateCategory = async (category, token: string, id: number) => {
  const res = await fetch(`http://localhost:8080/api/admin/category/${id}`, {
    method: 'PUT',
    body: category,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}

export const deleteCategory = async (token: string, id: number) => {
  const res = await fetch(`http://localhost:8080/api/admin/category/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `bearer ${token}`
    }
  })
  if (res.ok) {
    return await res.json()
  }
}
