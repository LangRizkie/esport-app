import { createSlice } from '@reduxjs/toolkit'
import type { userProps } from '@/modules/result/interface'

const initialState: userProps = {
  avatar: '',
  username: '',
  type: '',
  location: '',
  role: '',
  game: '',
  signature: []
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
    getUser: (state, action) => (state = action.payload)
  }
})

export const { reset } = user.actions
export const userReducer = user.reducer

export default userReducer
