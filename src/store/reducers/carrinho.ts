import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: {
    produtos: [] as Produto[],
    favoritos: [] as Produto[]
  },
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (state.produtos.find((p) => p.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.produtos.push(action.payload)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      if (state.favoritos.find((p) => p.id === action.payload.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, favoritar } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
