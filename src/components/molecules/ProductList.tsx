import { getAllProducts } from "@/mock/products";
import Link from "next/link";

const ProductList = () => {
  const products = getAllProducts();
  return (
    <div className="flex flex-col justify-center items-center p-8">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="text-2xl">
            <p>{product.image} - {product.name}</p>
          </div>
          
        </Link>
      ))}
    </div>
  )
}

export default ProductList