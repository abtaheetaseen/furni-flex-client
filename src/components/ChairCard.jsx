import React, { useContext } from 'react'
import { CartContext } from '../cartfeature/ContextProvider'
import toast from 'react-hot-toast';

const ChairCard = ({item}) => {

    const {dispatch} = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({type: "ADD_TO_CART", item: item})
        toast.success("Added to cart")
    }

  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-gray-900">€{item.after_discount_price}</span>
          <span className="text-xl line-through text-gray-500">€{item.price}</span>
          <span className="text-sm text-red-500 font-semibold">{item.discount_percentage}% OFF</span>
        </div>
        <button onClick={handleAddToCart} className="w-full mt-4 py-2 px-4 bg-black text-white text-center font-semibold rounded-lg hover:bg-gray-900">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ChairCard
