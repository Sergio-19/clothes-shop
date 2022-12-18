import CartItemWrap from "../components/cart/CartItemWrap"
import Layout from "../components/Layout"


const CartPage = () => {

    return (
        <Layout>
            <div className='cartpage__wrapper' >
                <div className='cartpage__left'>
                    <CartItemWrap>
                        <h2>Корзина</h2>
                    </CartItemWrap>
                    <CartItemWrap>
                        <div className = "cart__good-item">
                            <div className='cart__good-item-img'>
                                <img src = 'https://images.asos-media.com/products/polo-ralph-lauren-slim-fit-shirt-with-pony-logo-in-dark-grey/202841702-1-darkgrey'/>
                            </div>

                        </div>
                    </CartItemWrap>
                    <CartItemWrap>
                        <div className = "cart__delivery">
                        <i className='fa fa-truck' />&nbsp;
                        <span>standard delivery to russia</span>
                        </div>
                    </CartItemWrap>
                </div>
                <div className='cartpage__right'>
                    <CartItemWrap>
                        <h2>Итого:</h2>
                    </CartItemWrap>
                </div>
            </div>
        </Layout>
    )
}


export default CartPage