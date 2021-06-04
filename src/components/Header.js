import React, { useState } from "react"

export const Header = () => {
  const [state, setState] = useState({menuOpen: false})

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Menu */}
        <div className="hidden content-wrapper bg-transparent absolute z-50 pt-10 px-20 pb-6 md:flex md:justify-between md:items-center lg:px-56">
          <div className="flex justify-start cursor-pointer opacity-75 hover:opacity-100 text-gray-800 text-lg uppercase">
            <a href="/#site-footer">Work with me</a>
          </div>
          <div className="flex justify-start cursor-pointer opacity-75 hover:opacity-100 text-gray-800 text-lg uppercase">
            <a href="/blog">Blog</a>
          </div>
          <div className="flex justify-start cursor-pointer opacity-75 hover:opacity-100 text-knewave text-3xl">
            <a href="/">HR</a>
          </div>
          <div className="flex justify-start cursor-pointer opacity-75 hover:opacity-100 text-gray-800 text-lg uppercase">
            <a href="/portfolio"><span>Portfolio</span></a>
          </div>
          <div className="flex justify-start cursor-pointer opacity-75 hover:opacity-100 text-gray-800 text-lg uppercase">
            <a href="/#about-me"><span>My story</span></a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="fixed top-0 inset-x-0 transition transform origin-top-right z-50 border-b md:hidden">
          <div className={"ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50" + (state.menuOpen ? 'rounded-sm shadow-lg' : '')}>
            <div className="pt-5 pb-6 px-8">
              <div className="flex items-center justify-between">
                <div>
                  <div>
                    <a href="/" className="cursor-pointer opacity-75 hover:opacity-100 text-knewave text-3xl">
                      <img src="/images/cartoon.jpg" className="inline pr-3 h-10 align-middle"/>
                      <span className="align-middle">HR</span>
                    </a>
                  </div>
                </div>
                <div className="-mr-2">
                  {/* Close Menu Button */}
                  <button
                    onClick={() => {setState({menuOpen: false})}}
                    type="button"
                    className={"bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 " + (state.menuOpen ? '' : 'hidden')}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  {/* Open Menu Button */}
                  <button
                    onClick={() => {setState({menuOpen: true})}}
                    type="button"
                    className={"bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 " + (state.menuOpen ? 'hidden' : '')} aria-expanded="false"
                  >
                    <span className="sr-only">Open menu</span>
                    <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={'mt-8 ' + (state.menuOpen ? '' : 'hidden')}>
                <nav className="grid gap-y-8">
                  <a href="/#site-footer" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Work with me</a>
                  <a href="/blog" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Blog</a>
                  <a href="/portfolio" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Portfolio</a>
                  <a href="/#about-me" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">My story</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
