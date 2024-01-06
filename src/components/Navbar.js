

 import { getCartTotal } from "../features/cartSlice";


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line
  }, [cart]);

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-500">
            Navbar
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              All Product
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-500">
              Cart ({totalQuantity})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

