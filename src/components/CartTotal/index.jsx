import React from 'react'
import { ButtonGreyDefault } from '../../Styles/buttons'
import { ParagrTotalCart, ParagrTotalCartValue } from '../../Styles/typography'
import { DivCartTotal, DivContainerCartTotal } from './cartTotalstyle'

export const CartTotal = ({ cartList, removeAllProductsFromCartList }) => {

    const totalValue = cartList.reduce((acum, currt)=>{
        let value = 0
        value = currt.price * currt.amount

        return acum + value
    }, 0)

    return (
        <>
        {cartList.length > 0 && (
            <DivContainerCartTotal>
            <DivCartTotal>
                <ParagrTotalCart>Valor total</ParagrTotalCart>
                <ParagrTotalCartValue>{totalValue.toFixed(2)}</ParagrTotalCartValue>
            </DivCartTotal>
            <ButtonGreyDefault onClick={()=>{removeAllProductsFromCartList()}}>Remover todos</ButtonGreyDefault>
            </DivContainerCartTotal>
        )}

        </>
    )
}
