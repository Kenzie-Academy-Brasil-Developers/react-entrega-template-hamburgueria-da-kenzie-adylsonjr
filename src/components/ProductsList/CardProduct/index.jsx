import React from 'react'
import { ButtonGreenMedium } from '../../../Styles/buttons'
import { ParagrCardCategory, ParagrCardPrice, TitleCard } from '../../../Styles/typography'
import { DivCardProduct, DivImgProduct, ImgProduct, LiProducts } from './CardProductStyle'


export const CardProduct = ({ addProductToCartList, product }) => {

    return (
        <LiProducts>
            <DivImgProduct>
                <ImgProduct src={product.img} alt={product.name} />
            </DivImgProduct>
            <DivCardProduct>
                <TitleCard>{product.name}</TitleCard>
                <ParagrCardCategory>{product.category}</ParagrCardCategory>
                <ParagrCardPrice>{`R$${product.price.toFixed(2)}`}</ParagrCardPrice>
                <ButtonGreenMedium onClick={() => addProductToCartList(product)}>Adiconar</ButtonGreenMedium>
            </DivCardProduct>
        </LiProducts>
    )

}
