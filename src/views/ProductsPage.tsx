import { useEffect, useState } from "react"
import ProductCard from "../Components/products/ProductCard"

const ProductsPage = ({ match }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      if (match) {
        const res = await fetch(`http://localhost:8080/api/public/products?search=${match.params.query}`)
        if (res.ok) {
          const data = await res.json()
          setProducts(data)
        }
      }
      const res = await fetch(`http://localhost:8080/api/public/products?search=${match.params.query}`)
      if (res.ok) {
        const data = await res.json()
        setProducts(data)
      }
    }
    fetchProducts
  }, [match.params.query])
  return (
    <div>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductsPage
