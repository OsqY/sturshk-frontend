import { getCategories } from "../utils/api"

const CategoriesPage = () => {
  const categories = getCategories()
  return (
    <div>
      {categories}
    </div>
  )
}

export default CategoriesPage
