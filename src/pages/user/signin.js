import { SET_USER } from "@/redux/user";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useGetUserCart } from "@/hooks/useGetUserCart";

// export const getServerSideProps = async () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setIsLoading] = useState(null);
//   const dispatch = useDispatch();

//   const response = await fetch(`https://backendvaldez.onrender.com/users/login`, {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   const json = response.json();
//   if (!response.ok) {
//     setIsLoading(false)
//     setError(json.error)
//   }
//   if (response.ok) {
//     localStorage.setItem('user', JSON.stringify(json))
//     dispatch(SET_USER(json))
//     setIsLoading(false)
//   }

//   return {
//     props: {
//       email,
//       password,
//       error,
//       loading
//     }
//   }
// }

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(null);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { getUserCart } = useGetUserCart();

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://backendvaldez.onrender.com/users/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const json = await response.json();
    const token = json.token
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      console.log(json.error)
    }
    if (response.ok) {
      console.log(json)
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update the auth context
      dispatch(SET_USER(json))
      // await getItemCart()
      getUserCart(token);
      setIsLoading(false)
    }
  }

  return (

    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form onSubmit={(e) => handleLogin(e)} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-blue-500">Forgot password?</a>
              </div>
              {error && (<div className="bg-red-100 border border-red-600 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>)}
              <button disabled={loading} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link href="/user/signup" className="font-medium text-primary-600 hover:underline dark:text-blue-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SignIn;