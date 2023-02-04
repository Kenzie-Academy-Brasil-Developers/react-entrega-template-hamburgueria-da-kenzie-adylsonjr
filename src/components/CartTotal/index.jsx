import React from 'react'
import { ParagrTotalCart, ParagrTotalCartValue } from '../../Styles/typography'
import { DivCartTotal } from './cartTotalstyle'

export const CartTotal = ({ cartList, countProduct }) => {

    const totalValue = cartList.reduce((acum, currt)=>{
        let value = 0
        value = currt.price * currt.amount

        return acum + value
    }, 0)

    return (
        <>
        {cartList.length > 0 && (
            <DivCartTotal>
                <ParagrTotalCart>Valor total</ParagrTotalCart>
                <ParagrTotalCartValue>{totalValue.toFixed(2)}</ParagrTotalCartValue>
            </DivCartTotal>
        )}

        </>
    )
}
