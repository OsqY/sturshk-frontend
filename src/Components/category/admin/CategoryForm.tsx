import { useState } from "react"
import { createCategory } from "../../../utils/api"

const CategoryForm = () => {
  const [category, setCategory] = useState({
    name: ''
  })

  function handleCategoryNameChange(e) {
    setCategory({
      name: e.target.value
    })
  }
  return (
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category-name">
            Category name
          </label>
          <input value={category.name} onChange={handleCategoryNameChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" placeholder="Shirts" />
          <p className="text-red-500 text-xs italic">Category name</p>
        </div>
        <button onClick={createCategory(category)}> Submit </button>
      </div>
    </form>
  )
}

export default CategoryForm
