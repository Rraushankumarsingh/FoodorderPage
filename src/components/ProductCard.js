import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
 
  

  
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <div className="m-2 sh">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {items.map((item) => (
            <div key={item.id} className="md:w-1/4 px-4 mb-4">
              <div className="flex flex-col h-full">
                <img
                  src={item.images[0]}
                  alt="Product"
                  className="w-full h-40 object-cover mb-4 shadow-md hover:shadow-md rounded-md border-2 border-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{item.brand}</h2>
                  <p className="mb-2">{item.price}</p>
                  <button
                    className="bg-blue-500 text-black px-4 py-2 rounded shadow-md hover:shadow-md hover:scale-105"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
