import { LOGOUT_USER } from "@/redux/user";
import { useDispatch, useSelector } from "react-redux"

export const useLogout = () => {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(LOGOUT_USER())
    console.log(user)
  }

  return { logout };
}
