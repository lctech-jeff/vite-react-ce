import type { User } from '@/domain/user'
import { createSlice } from '@reduxjs/toolkit'

const userEmpty: User = {
  id: '',
  name: '',
  email: '',
  preferences: [],
  allergies: [],
}
const STORAGE_KEY = 'my-user'
let initUser: User = { ...userEmpty };
const userInStorage = localStorage.getItem(STORAGE_KEY)
if (userInStorage) initUser = JSON.parse(userInStorage)

const userStore = createSlice({
  name: 'user',
  initialState: { user: <User>{ ...initUser } },
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.user))
    },
    clearUser(state) {
      state.user = { ...userEmpty }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.user))
    }
  },
})

export const { updateUser, clearUser } = userStore.actions

export default userStore.reducer
