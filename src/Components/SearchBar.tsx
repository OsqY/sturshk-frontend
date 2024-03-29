import { ChangeEvent, useRef, useState } from "react"

const SearchBar = () => {
  const ref = useRef(null)

  const searchProducts = async () => {
    const res = await fetch("http://localhost:8080/api/public/products?sort=price,desc", {
      method: 'GET'
    })
    if (res.ok) {
      console.log(await res.json())
      return await res.json()
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchProducts()
    }
  }
  return (
    <div className="my-2">
      <input className="outline-none w-full pl-2" id="search" name="search" type="text" placeholder="Search..." defaultValue='' ref={ref} onKeyDown={handleKeyDown} />
    </div>
  )
};


export default SearchBar
