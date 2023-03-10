import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content='ninjas' />
      </Head>
      <div className="text-zinc-500">

        <h1 className=' text-emerald-800 pb-5 text-center'>Homepage</h1>
        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, ducimus. Ullam eaque eos provident, natus atque sed deserunt, voluptas libero officia porro tempora dolores perferendis laboriosam ut nemo recusandae reprehenderit.</p>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis iste officia vel? Blanditiis fuga suscipit placeat vitae, cumque sapiente aliquam repellat illum ipsum, vel nisi unde, debitis ullam quibusdam. Aliquam?</p>

        <Link href="/ninjas" className='block w-36 py-2 mx-auto my-5 bg-sky-600 rounded text-white text-center'>See Ninja Listing</Link>

      </div>
    </>
  )
}
