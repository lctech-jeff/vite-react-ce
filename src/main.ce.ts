import r2wc from '@r2wc/react-to-web-component'

import Btn from '@/components/Btn'
// import CheckoutBtn from '@/components/CheckoutBtn'
// import CheckoutPanel from '@/components/CheckoutPanel'
// import ProductList from '@/components/ProductList'

const JBtn = r2wc(Btn, {
  props: {
    children: 'string',
    className: 'string',
    onClick: () => {},
  },
})

// const JCheckoutBtn = r2wc(CheckoutBtn, {
//   props: {},
// })
// const JCheckoutPanel = r2wc(CheckoutPanel, {
//   props: {},
// })
// const JProductList = r2wc(ProductList, {
//   props: {},
// })

customElements.define('j-btn', JBtn)
// customElements.define('j-checkout-btn', JCheckoutBtn)
// customElements.define('j-checkout-panel', JCheckoutPanel)
// customElements.define('j-product-list', JProductList)
