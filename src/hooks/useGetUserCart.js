import { SET_CART } from "@/redux/cart"
import { useDispatch, useSelector } from "react-redux"



// export const getServerSideProps = async () => {
//   const response = await fetch('https://backendvaldez.onrender.com/cart/checkYourCart', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${user.token}`
//     }
//   })
//   const data = await response.json()
//   console.log(response)
//   return {
//     props: { userCartFetched: data }
//   }
// }

export const useGetUserCart = () => {
  const { user } = useSelector(state => state.user);
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const getUserCart = async (token) => {
    const response = await fetch('https://backendvaldez.onrender.com/cart/checkYourCart', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      console.log(data)
    }
    if (response.ok) {
      dispatch(SET_CART(data))
    }
  }

  return { getUserCart };
}