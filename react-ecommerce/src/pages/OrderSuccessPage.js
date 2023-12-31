import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { selectUser } from "../features/auth/authSlice";
import { resetCartAsync } from "../features/cart/cartSlice";
import { resetOrder } from "../features/order/orderSlice";

const OrderSuccessPage = () => {
  const params = useParams();
  // const orderId = params.id;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(()=>{
    // reset cart
    dispatch(resetCartAsync(user.id));

    // resent current order -> we can use a normal reducer here kyoki data database me to nahi he that's why
    dispatch(resetOrder())

  }, [dispatch, user])

  return <>
  {/*
    This example requires updating your template:

    ```
    <html class="h-full">
    <body class="h-full">
    ```
  */}
  {!params.id && <Navigate to={"/"} replace={true}></Navigate>}

  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600"></p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Successfully Placed</h1>
      <p className="mt-6 text-base leading-7 text-gray-600"> Order Number #{params.id}</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to={"/orders"}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          You can check your orders in my account - my orders
        </Link>
        
      </div>
    </div>
  </main>
</>;
};

export default OrderSuccessPage;
