import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user } = useSelector(state => state.user)
  const router = useRouter();

  useLayoutEffect(() => {
    if (!user) {
      router.push("/user/signin")
    }
  })

  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content='ninjas' />
      </Head>
      <div className="text-zinc-500 text-center">

        <h1 className=' text-emerald-800 pb-5'>Homepage</h1>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ducimus. Ullam eaque eos provident, natus atque sed deserunt, voluptas libero officia porro tempora dolores perferendis laboriosam ut nemo recusandae reprehenderit.</p>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis iste officia vel? Blanditiis fuga suscipit placeat vitae, cumque sapiente aliquam repellat illum ipsum, vel nisi unde, debitis ullam quibusdam. Aliquam?</p>

        <Link href="/products" className='block w-36 py-2 mx-auto my-5 bg-sky-600 rounded text-white text-center'>See Ninja Listing</Link>
        <Link href="/products" className='bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 text-white font-bold py-2 px-4 rounded'>See Ninja Listing</Link>
        <br /><br />
        <button class="bg-gradient-to-r from-purple-900 to-purple-500 hover:to-purple-800 text-white font-bold py-2 px-4 rounded">
          test
        </button>
        <br /><br />
        <button class="bg-gradient-to-r from-447a7a to-f9e866 hover:from-pink-600 hover:to-purple-800 text-white font-bold py-2 px-4 rounded">
          test
        </button>
        <button class="bg-gradient-to-r from-teal-500 to-yellow-300 hover:from-yellow-300 hover:to-teal-500 text-white font-bold py-2 px-4 rounded">
          test
        </button>
      </div>
    </>
  )
}
