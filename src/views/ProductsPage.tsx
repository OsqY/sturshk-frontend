import { useEffect, useState } from "react"
import ProductCard from "../Components/products/ProductCard"

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/api/public/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  const productsContent = products?.content
  return (<div>
    {productsContent && productsContent.map((product) => <ProductCard key={product.id} product={product} />)}
  </div>
  )
}

export default ProductsPage
