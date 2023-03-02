import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";


const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="keywords" content='ninjas' />
      </Head>
      <main class="grid min-h-full place-items-center  py-24 px-6 sm:py-32 lg:px-8:">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-400 sm:text-5xl">Page not found</h1>
          <p class="mt-6 text-base leading-7 text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
            <Link href="/" class="text-sm font-semibold text-gray-500">Contact support <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;