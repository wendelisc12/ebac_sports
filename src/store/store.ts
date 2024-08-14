import { configureStore } from '@reduxjs/toolkit'
import CarrinhoSlice from './reducers/carrinho'
import api from '../service/Api'

const store = configureStore({
  reducer: {
    Carrinho: CarrinhoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
