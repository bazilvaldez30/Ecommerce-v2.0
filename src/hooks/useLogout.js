import { RESET_CART } from "@/redux/cart";
import { LOGOUT_USER } from "@/redux/user";
import { useDispatch, useSelector } from "react-redux"

export const useLogout = () => {
  const { user } = useSelector(state => state.user)
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(LOGOUT_USER(), RESET_CART())
    console.log(user)
    console.log(cart)
  }

  return { logout };
}


