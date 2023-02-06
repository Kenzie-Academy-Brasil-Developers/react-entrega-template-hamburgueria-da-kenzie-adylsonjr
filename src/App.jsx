import { useState } from 'react'
import { useEffect } from 'react'
import { api } from './services/api'
import { DivApp, SectionCart, SectionProducts } from './Styles/app'
import {ProductsList} from './components/ProductsList/'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {CartTotal} from './components/CartTotal/';
import { v4 as uuidv4 } from 'uuid';
import {CartList} from './components/CartList/'
import { Header } from './components/Header/'
import { SearchResult } from './components/Header/SearchForm/SearchResult/'
import { Container } from './Styles/global'





function App() {

  const localCartList = localStorage.getItem("@KenzieBurguerCartList")
  const [loading, setLoading] = useState(false)
  const [productsList, setProductsList] = useState([])
  const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
  const [countProduct, setCountProduct] = useState(1)
  const [search, setSearch] = useState("")
  
  const searchProductsList = productsList.filter((product) => {
    return search === "" ? true : (product.name.toLocaleLowerCase()).includes(search.toLocaleLowerCase()) ||
      (product.category.toLocaleLowerCase()).includes(search.toLocaleLowerCase())
    })
   
  useEffect(() => {

    async function loadingProductsData() {

      try {
        setLoading(true)
        const response = await api.get("products")
        setProductsList(response.data)
      } catch (error) {
        console.log(error)

      }
      finally {
        setLoading(false)
      }

    }
    loadingProductsData()

  }, [])

  useEffect(() => {
    localStorage.setItem("@KenzieBurguerCartList", JSON.stringify(cartList));
  }, [cartList])


  const addProductToCartList = (product) => {


    if (!cartList.includes(product)) {

      setCartList([...cartList, product])
      toast.success("Produto adicionado com sucesso")
      product.amount = 1
      product.uuid = uuidv4()
    } else {

      setCountProduct(product.amount + 1)
      product.amount += 1
      toast.success(`Adicionado mais um ${product.name}`)
    }
  }

  const removeProductFromCartList = (productId) => {



    const newCartList = cartList.filter(product => product.uuid !== productId)
    setCartList(newCartList)
    toast.success("Produto Removido")

  }

  const removeAllProductsFromCartList = ()=>{

    setCartList([])

  }


  return (
    <DivApp className="App">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>

          <Header setSearch={setSearch} search={search} />
          <Container>
            <SectionProducts className='products'>
              <SearchResult setSearch={setSearch} search={search} />
              <ProductsList searchProductsList={searchProductsList} addProductToCartList={addProductToCartList} />
            </SectionProducts>
            <SectionCart className='cart'>
              <CartList cartList={cartList} removeProductFromCartList={removeProductFromCartList} />
              <CartTotal cartList={cartList} removeAllProductsFromCartList={removeAllProductsFromCartList}/>
            </SectionCart>
          </Container>

        </>

      )}
      <ToastContainer position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </DivApp>
  )
}

export default App
