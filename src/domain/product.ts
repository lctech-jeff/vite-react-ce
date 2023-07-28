export type ProductTitle = string

export type Product = {
  id: UniqueId
  title: ProductTitle
  price: PriceCents
  toppings: Ingredient[]
}

export const ingredients: Record<Ingredient, string> = {
  chocolate: 'Chocolate',
  cocoa: 'Cocoa Powder',
  cherry: 'Cherry',
  marshmallow: 'Marshmallow',
  peanuts: 'Peanut Butter',
}

export function totalPrice(products: Product[]): PriceCents {
  if (!products || products.length === 0) {
    return 0
  }
  return products.reduce((total, { price }) => total + price, 0)
}
