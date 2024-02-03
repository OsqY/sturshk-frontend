import { useState } from "react"
import { addProduct, getCategories } from "../../../utils/api"

const ProductForm = () => {
  const categories = getCategories()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: '',
  })

  function handleProductNameChange(e) {
    setProduct({
      ...product,
      name: e.target.value
    })
  }

  function handleProductDescriptionChange(e) {
    setProduct({
      ...product,
      description: e.target.value
    })
  }

  function handleProductPriceChange(e) {
    setProduct({
      ...product,
      price: e.target.value
    })
  }

  function handleImageUrlChange(e) {
    setProduct({
      ...product,
      imageUrl: e.target.value
    })
  }

  function handleCategoryChange(e) {
    setProduct({
      ...product,
      category: e.target.value
    })
  }

  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
            Product name
          </label>
          <input value={product.name} onChange={handleProductNameChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" placeholder="White T-Shirt." />
          <p className="text-red-500 text-xs italic">Product name</p>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
            Product description
          </label>
          <input value={product.description} onChange={handleProductDescriptionChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description" type="text" placeholder="White T-Shirt made of cotton." />
          <p className="text-red-500 text-xs italic">Product description</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
            Product Price
          </label>
          <input onChange={handleProductPriceChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="product-price" type="number" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="url-image">
            Product image URL
          </label>
          <input onChange={handleImageUrlChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="https:/example.com" />
          <p className="text-gray-600 text-xs italic">URL</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="relative">
            <select onChange={handleCategoryChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              {categories ? categories.map((category) => (
                <option key={category.id}> category </option>
              ))
                : (
                  <h2> No categories... </h2>)
              }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <button onClick={addProduct(product)}> Submit </button>
    </form>
  )
}

export default ProductForm
