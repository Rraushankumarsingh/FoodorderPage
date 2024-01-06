

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
    //eslint-disable-next-line
  }, [cart]);

  return (
    <div>
    <section className="h-screen gradient-custom ml-3">
      <div className="container mx-auto ml-3">
        <div className="flex justify-center my-4">
          <div className="w-3/4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0 text-black">Cart - {cart.length} items</h5>
              </div>
              <div className="card-body ml-5">
                {cart?.map((data) => (
                  <div key={data.id} className="flex items-start mb-4">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={data.image}
                          className="w-100"
                          alt="Blue Jeans Jacket"
                        />
                      </div>
                    </div>
  
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-4">
                      <p className="text-black mr-10">
                        <strong>{data.name}</strong>
                      </p>
  
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={() => dispatch(removeItem(data.id))}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
  
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button
                          className="btn btn-primary px-3 me-2"
                          onClick={() => dispatch(decreaseItemQuantity(data.id))}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
  
                        <div className="form-outline">
                          <label className="form-label text-black" htmlFor="form1">
                            Quantity
                          </label>
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={data.quantity}
                            type="number"
                            className="form-control"
                            onChange={() => null}
                          />
                        </div>
  
                        <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={() => dispatch(increaseItemQuantity(data.id))}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
  
                      <p className="text-start text-md-center text-black">
                        <strong>{data.price}</strong>
                      </p>
                    </div>
                    <hr className="my-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 mr-3 ">
            <div className="card mb-4 mr-3">
              <div className="card-header py-3 mr-4">
                <h5 className="mb-0 text-black">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-black">
                    Total Quantity
                    <span>{totalQuantity}</span>
                  </li>
  
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 text-black">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>{totalPrice}</strong>
                    </span>
                  </li>
                </ul>
  
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  

  )
};

export default CartPage;
