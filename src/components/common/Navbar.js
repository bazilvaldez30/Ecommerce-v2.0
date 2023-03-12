import Link from 'next/link'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '@/hooks/useLogout';
import ShoppingCart from '../ShoppingCart';


const Navbar = () => {
  const [openUser, setOpenUser] = useState(false)
  const [openMainMenu, setOpenMainMenu] = useState(false)
  const { logout } = useLogout();
  const { user } = useSelector(state => state.user)
  const { cart } = useSelector(state => state.cart)

  const handleOpenMainMenu = () => {
    setOpenMainMenu(!openMainMenu)
  };

  const handleOpenUserMenu = () => {
    setOpenUser(!openUser)
  };

  const handleBlurUserMenu = (event) => {
    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setOpenUser(false);
      }
    }, 0);
  };


  const handleLogout = () => {

    logout();
  }

  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-800 bg-gradient-to-tl">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 container">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleOpenMainMenu} onBlur={(e) => { setOpenMainMenu(false) }}>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/"><img className="block h-12 w-auto lg:hidden" src="/images/trendyrtw.png" alt="Your Company" /></Link>
              <Link href="/"><img className="hidden h-12 w-auto lg:block" src="/images/trendyrtw.png" alt="Your Company" /></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block self-center">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="/ninjas" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Ninja List</Link>

                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            {user && <ShoppingCart />}
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-5" onClick={handleOpenUserMenu} onBlur={handleBlurUserMenu}>
              {user ?
                (
                  <div>
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={openUser}
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                )
                :
                (
                  <>
                    <Link href="/user/signin" className='text-gray-200 p-2 px-3 rounded-md hover:bg-slate-900'>Sign in</Link>
                    <Link href="/user/signup" className='text-gray-200 p-2 px-3 rounded-md hover:bg-slate-900'>Register</Link>
                  </>
                )
              }
              {openUser && user && (
                <>
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-600 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <span className="block px-4 py-2 text-sm text-gray-300 border-b border-gray-500 min-w-full">{user.email}</span>
                    <Link href="" className="block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-0">My Profile</Link>
                    <Link href="" className="block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</Link>
                    <Link href="" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {
        openMainMenu && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link href="/ninjas" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Ninja List</Link>

              <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
          </div>
        )
      }
    </nav>

  );
};

export default Navbar;