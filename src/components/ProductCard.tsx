import { useMemo } from 'react'
import Btn from '@/components/Btn'
import { hasAllergy, hasPreference } from '@/domain/user'
import type { Product } from '@/domain/product'
import { useAddToCart } from '@/application/addToCart'
import { useUserStorage } from '@/services/storageAdapter'

function ProductCard(props: any) {
  const { product }: { product: Product } = props

  const { user } = useUserStorage()
  const { addToCart } = useAddToCart()

  const productHasPreference = useMemo(() => product.toppings.some(v => hasPreference(user, v)), [product, user])
  const productHasAllergy = useMemo(() => product.toppings.some(v => hasAllergy(user, v)), [product, user])
  const iconAfterTitle = useMemo(() => {
    if (productHasAllergy) return '⚠️'
    if (productHasPreference) return '👍'
    return ''
  }, [productHasPreference])

  return (
    <div>
      <div className="w-full">
        <img
          className="aspect-video w-full object-cover"
          src={`https://fakeimg.pl/350x200/?text=${product.title}`}
          loading="lazy"
          alt={product.title}
        />
      </div>
      <div className="flex justify-between py-2">
        <div className="text-start">
          <div>
            {product.title}&nbsp;{iconAfterTitle}
          </div>
          <div>{product.price}</div>
        </div>
        <Btn onClick={() => addToCart(user, product)}>加入購物車</Btn>
      </div>
    </div>
  )
}

export default ProductCard
