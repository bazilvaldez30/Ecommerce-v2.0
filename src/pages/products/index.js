import { SET_PRODUCTS } from "@/redux/products"
import { formatCurrency } from "@/utilities/formatCurrency"
import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const getServerSideProps = async () => {
  const response = await fetch('https://backendvaldez.onrender.com/products/allActiveProducts')
  const data = await response.json()
  return {
    props: { productsFetched: data }
  }
}


const Products = ({ productsFetched }) => {

  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SET_PRODUCTS(productsFetched))
    console.log(productsFetched)
  }, [])

  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <div className="">
        <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-8xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-300">Customers also purchased</h2>
          {/* <button class="px-4 py-1 rounded-3xl transition ease-in delay-150 bg-blue-500 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 duration-300">
            Save Changes
          </button> */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products && products.map(product => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="group relative">

                  <div className="shadow-2xl shadow-cyan-500/50 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-96">
                    <img src={`/${product.path}`} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>

                  <div className="mt-4 flex">
                    <div className="basis-8/12">
                      <h3 className="text-sm text-gray-300">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">stocks: {product.stocks}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-400 text-right basis-4/12">{formatCurrency(product.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;