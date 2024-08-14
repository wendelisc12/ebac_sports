import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { adicionarAoCarrinho, favoritar } from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootState) => state.Carrinho.produtos)
  const favoritos = useSelector((state: RootState) => state.Carrinho.favoritos)

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={produtos} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(favoritar(produto))}
          adicionarAoCarrinho={(produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
        />
      </div>
    </>
  )
}

export default App
