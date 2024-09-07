import React, { useState } from 'react'
import useProducts from '../hooks/useProducts'
import ChairCard from '../components/ChairCard';

const Store = () => {

    const [products, refetch] = useProducts();

    const [chairCategory, setChairCategory] = useState("all");

    const filteredChair = chairCategory === "all"
    ? products
    : products.filter(item => item.category === chairCategory);

  return (
    <div className='my-[100px] w-11/12 md:w-10/12 mx-auto gap-10'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>

            <div className='col-span-1'>

            <button onClick={() => setChairCategory("all")}
          className={`px-4 py-2 rounded w-full mb-5 ${
            chairCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-700`}>
                All Chair
            </button>

                <button onClick={() => setChairCategory("rocking chair")}
          className={`px-4 py-2 rounded w-full mb-5 ${
            chairCategory === "rocking chair"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-700`}>
                    Rocking Chair
                </button>

                <button onClick={() => setChairCategory("side chair")}
          className={`px-4 py-2 rounded w-full mb-5 ${
            chairCategory === "side chair"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-700`}>
                    Side Chair
                </button>

                <button onClick={() => setChairCategory("lounge chair")}
          className={`px-4 py-2 rounded w-full mb-5 ${
            chairCategory === "lounge chair"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-700`}>
                    lounge chair
                </button>
                
            </div>

            <div className='col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                
                {
                    filteredChair.map(item => <ChairCard key={item._id} item={item} />)
                }

            </div>

        </div>
    </div>
  )
}

export default Store
