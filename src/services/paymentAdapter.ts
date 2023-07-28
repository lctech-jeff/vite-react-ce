import { PaymentService } from '@/application/ports'
import { fakeApi } from '@/services/api'

export function usePayment(): PaymentService {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(true)
    },
  }
}
