import { useOrdersStorage } from '@/services/storageAdapter'

function CheckoutPanel({ title, className }: { title: string; className: string }) {
  const { orders } = useOrdersStorage()

  const orderList = orders.map(item => {
    return (
      <div className="text-start" key={item.created}>
        <div>{new Date(item.created).toLocaleString()}</div>
        <div>{item.cart.products.map(v => v.title).join(', ')}</div>
      </div>
    )
  })

  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="grid gap-6">{orderList}</div>
    </div>
  )
}

export default CheckoutPanel
