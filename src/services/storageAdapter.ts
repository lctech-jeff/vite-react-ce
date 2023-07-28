import {
  UserStorageService,
  CartStorageService,
  OrdersStorageService,
  ProductStorageService,
} from '@/application/ports'
import { useUserStore, useCartStore, useOrderStore, useProductStore } from '@/services/storeAdapter'

export function useUserStorage(): UserStorageService {
  return useUserStore()
}

export function useCartStorage(): CartStorageService {
  return useCartStore()
}

export function useOrdersStorage(): OrdersStorageService {
  return useOrderStore()
}

export function useProductStorage(): ProductStorageService {
  return useProductStore()
}
