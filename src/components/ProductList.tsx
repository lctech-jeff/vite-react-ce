import ProductCard from '@/components/ProductCard'
import { useProductStorage } from '@/services/storageAdapter'

function ProductList({ className }: { className: string }) {
  const { cookies } = useProductStorage()
  const cardList = cookies.map(item => <ProductCard key={item.id} product={item} />)

  return (
    <div>
      <div className={`grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>{cardList}</div>
    </div>
  )
}

export default ProductList
