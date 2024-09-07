import React, { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { CartContext } from '../cartfeature/ContextProvider'

const CartProduct = ({item}) => {

    const {cart, dispatch} = useContext(CartContext);

    const increaseQuantity = (id) => {
        dispatch({type: "INCREASE_QUANTITY", id})
    }

    const decreaseQuantity = (id) => {
        const Index = cart?.findIndex(p => p._id === id);
        if(cart[Index].quantity > 1){
            dispatch({type: "DECREASE_QUANTITY", id})
        }
    }

  return (
    <>
    <div className='flex items-center justify-between my-10 p-10'>

        <div className='flex items-center justify-center gap-3'>

      <div>

        <button className='px-3 text-2xl border-2 border-gray-400' onClick={() => decreaseQuantity(item._id)}>-</button>
        <button className='px-3'>{item.quantity}</button>
        <button className='px-3 text-2xl border-2 border-gray-400' onClick={() => increaseQuantity(item._id)}>+</button>
        
      </div>

      <div className='flex items-center justify-center gap-3'>
        <img className='w-[100px] h-[100px] rounded-xl' src={item.image} alt="" />
        <h1 className='text-lg font-bold'>{item.name}</h1>
      </div>

      </div>

      <div className='flex flex-col items-center justify-between gap-5'>
        <button onClick={() => dispatch({type: "REMOVE_FROM_CART", id: item._id})}>
        <MdDelete className='text-xl' />
        </button>

        <h1 className='text-lg font-semibold'>€{item.after_discount_price * item.quantity}</h1>
      </div>

    </div>

    <hr />
    </>
  )
}

export default CartProduct
