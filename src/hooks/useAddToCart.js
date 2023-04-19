import { SET_CART } from "@/redux/cart"
import { useDispatch, useSelector } from "react-redux"


export const useAddToCart = () => {
   const { user } = useSelector(state => state.user);
   const { cart } = useSelector(state => state.cart);
   const dispatch = useDispatch()

   const addToCart = async (productId) => {
      const quantity = 1;
      const response = await fetch('https://backendvaldez.onrender.com/cart/addToCart', {
         method: 'POST',
         body: JSON.stringify({ productId, quantity }),
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
         }
      })
      const json = await response.json()

      if (!response.ok) {
         console.log(json.error)
      }
      if (response.ok) {
         dispatch(SET_CART(json))
         console.log(json)
      }
   }

   return { addToCart };
}