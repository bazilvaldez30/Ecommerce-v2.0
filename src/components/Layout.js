import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { SET_USER } from '@/redux/user';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ children }) => {

  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    const currenttUser = JSON.parse(localStorage.getItem("user"))
    if (currenttUser)
      dispatch(SET_USER(currenttUser))
  }, [])

  return (
    <div className="mx-auto min-h-screen">
      <Navbar />
      <div className="mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;