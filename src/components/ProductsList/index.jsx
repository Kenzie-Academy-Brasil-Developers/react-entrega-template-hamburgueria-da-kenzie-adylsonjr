import React from 'react'
import { toast } from 'react-toastify'
import { CardProduct } from './CardProduct'
import { UlProducts } from './ProductsListStyle'

export const ProductsList = ({ productsList, addProductToCartList, searchProductsList }) => {


  return (
    <>
      <UlProducts>
        {searchProductsList.map((product) => (<CardProduct key={product.id} product={product} addProductToCartList={addProductToCartList} />))}
      </UlProducts>
    </>
  )
}
