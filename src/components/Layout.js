import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { SET_USER } from '@/redux/user';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";

const Layout = ({ children }) => {

  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    const currenttUser = JSON.parse(localStorage.getItem("user"))
    if (currenttUser)
      dispatch(SET_USER(currenttUser))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;