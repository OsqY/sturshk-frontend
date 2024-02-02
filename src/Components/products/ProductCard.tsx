
const ProductCard = ({ product }) => {

  return (
    <div className="p-4 m-2 border rounded shadow-lg">
      <img src={product.urlImages[0]} alt={product.name} className="w-full h-64 object-cover" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
    </div>
  )
}

export default ProductCard;
