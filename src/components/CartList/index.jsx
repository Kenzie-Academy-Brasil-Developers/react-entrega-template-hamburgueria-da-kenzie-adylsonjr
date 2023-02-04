import React from 'react'
import { ParagrCartListEmpty, TitleCartList, TitleCartListEmpty } from '../../Styles/typography'
// import { CartList } from './CartList'
import { CardCartList } from './CardCartList'
import { DivTitleCart, UlCartList } from './cartListStyle'

export const CartList = ({ cartList, removeProductFromCartList }) => {

  return (
    <>
      <DivTitleCart>
        <TitleCartList>Carrinho de compras</TitleCartList>
      </DivTitleCart>
      {cartList.length > 0 ? (
        <UlCartList>
          {cartList.map(product => (
            <CardCartList key={product.id} product={product} removeProductFromCartList={removeProductFromCartList} />
          ))}
        </UlCartList>
      ) : (
        <>
          <TitleCartListEmpty>Sua sacola está vázia</TitleCartListEmpty>
          <ParagrCartListEmpty>Adicione itens</ParagrCartListEmpty>
        </>
      )}
    </>
  )
}
