import React, { useContext } from 'react'
import { CartContext } from '../cartfeature/ContextProvider'
import CartProduct from '../components/CartProduct';
import { totalPrice } from '../cartfeature/CartReducer';

const Cart = () => {

    const {cart} = useContext(CartContext);
    console.log(cart);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-5 my-[50px]'>

        <div className='col-span-5'>
            <div>
                <h1 className='text-2xl font-bold mb-10 px-10'>An overview of your order</h1>
            </div>
            {
                cart?.map(item => <CartProduct key={item._id} item={item} />)
            }
        </div>

        <div className='col-span-2 p-5'>
            <h1 className='text-2xl font-bold mb-10'>Order Details</h1>

            <div className='shadow-xl p-5'>
                <div className='flex items-center justify-between text-lg mb-3 font-semibold'>
                    <h1>Subtotal</h1>
                    <h1>€ {totalPrice(cart)}</h1>
                </div>

                <div className='flex items-center justify-between text-lg mb-3 font-semibold'>
                    <h1>Shipping</h1>
                    <h1>Free</h1>
                </div>

                <div className='flex items-center justify-between text-lg mb-3 font-semibold'>
                    <h1>Estimated Tax</h1>
                    <h1>0</h1>
                </div>

                <div className='flex items-center justify-between text-lg font-semibold'>
                    <h1>Total</h1>
                    <h1>€ {totalPrice(cart)}</h1>
                </div>
            </div>

            <div>
                <button className='p-3 bg-black mt-5 text-white'>GO TO CHECKOUT</button>
            </div>


        </div>
      
    </div>
  )
}

export default Cart
