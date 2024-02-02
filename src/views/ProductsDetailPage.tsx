import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductsDetailPage = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:8080/api/public/products/${productId}`)
      .then(res => res.json())
      .then(product => setProduct(product))
  }, [productId])

  return (
    <div>
      {product?.name}
      {product?.description}
      {product?.price}
    </div>
  )
}

export default ProductsDetailPage
