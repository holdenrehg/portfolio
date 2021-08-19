import React, { useState } from "react"

export const Header = () => {
  const [state, setState] = useState({menuOpen: false})

  return (
    <div className="relative">
      <div className="mx-auto">

        {/* Desktop Menu */}
        <div
          className="hidden md:flex justify-between items-center px-8 md:px-20 py-8 text-helvetica text-indigo-900 font-semibold mx-auto"
          style={{fontSize: "0.96rem"}}
        >
          {/* Left */}
          <div className="flex flex-col gap-1">
            <div><a className="cursor-pointer hover:underline" href="/portfolio">Portfolio</a></div>
            <div><a className="cursor-pointer hover:underline" href="/blog">Blog</a></div>
            <div><a className="cursor-pointer hover:underline" href="/#about-me">About me</a></div>
            <div><a className="cursor-pointer hover:underline" href="mailto:holdenrehg@gmail.com">Email me</a></div>
          </div>

          {/* Center */}
          <div className="uppercase absolute left-0 right-0 mx-auto flex flex-col text-center items-center text-indigo-900" style={{width: "200px"}}>
            <a href="/">
              <span className="block text-knewave text-3xl">HR</span>
              <span className="block text-sm tracking-normal font-bold">Holden Rehg</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/holdenrehg"
              rel="noreferrer"
              target="_blank">
              <img src={`/icons/social/linkedin-indigo-900.svg`} alt="" className="cursor-pointer" width="18px"/>
            </a>
            <a href="https://twitter.com/reedrehg"
              rel="noreferrer"
              target="_blank">
              <img src={`/icons/social/twitter-indigo-900.svg`} alt="" className="cursor-pointer" width="18px"/>
            </a>
            <a href="/rss.xml"
              rel="noreferrer"
              target="_blank">
              <img src={`/icons/social/rss-indigo-900.svg`} alt="" className="cursor-pointer" width="14px"/>
            </a>
            <a href="https://github.com/holdenrehg"
              rel="noreferrer"
              target="_blank">
              <img src={`/icons/social/github-indigo-900.svg`} alt="" className="cursor-pointer" width="18px"/>
            </a>
          </div>
        </div>

        <hr className="px-20 mx-auto mt-5 bg-indigo-900" style={{opacity: "12%"}}/>

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
                  <a href="/portfolio" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Portfolio</a>
                  <a href="/blog" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Blog</a>
                  <a href="/#about-me" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">My story</a>
                  <a href="mailto:holdenrehg@gmail.com" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Email me</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
