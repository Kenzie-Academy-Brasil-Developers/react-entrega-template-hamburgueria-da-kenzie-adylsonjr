import React from 'react'
import { ParagrCardCategory, TitleCartListCard } from '../../../Styles/typography'
import { CardCart, DivRemoveAmountCartList, ImgCartCard } from './cardCartListStyle'

export const CardCartList = ({ product, removeProductFromCartList }) => {
  return (
    <CardCart>
      <ImgCartCard src={product.img} alt={product.name} />
      <div>
        <TitleCartListCard>{product.name}</TitleCartListCard>
        <ParagrCardCategory>{product.category}</ParagrCardCategory>
      </div>
      <DivRemoveAmountCartList>
        <button onClick={() => removeProductFromCartList(product.uuid)}>Remover</button>
        <span>{product.amount}</span>
      </DivRemoveAmountCartList>
    </CardCart>
  )
}
