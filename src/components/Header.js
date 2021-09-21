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
            <div>
              <a className="cursor-pointer hover:underline" href="/portfolio">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-notebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                  <line x1="13" y1="8" x2="15" y2="8" />
                  <line x1="13" y1="12" x2="15" y2="12" />
                </svg>
                <span>Portfolio</span>
              </a>
            </div>
            <div>
              <a className="cursor-pointer hover:underline" href="/blog">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-news" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                  <line x1="8" y1="8" x2="12" y2="8" />
                  <line x1="8" y1="12" x2="12" y2="12" />
                  <line x1="8" y1="16" x2="12" y2="16" />
                </svg>
                <span>Blog</span>
              </a>
            </div>
            <div>
              <a className="cursor-pointer hover:underline" href="/books">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-book" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <line x1="3" y1="6" x2="3" y2="19" />
                  <line x1="12" y1="6" x2="12" y2="19" />
                  <line x1="21" y1="6" x2="21" y2="19" />
                </svg>
                <span>Books</span>
              </a>
            </div>
            <div>
              <a className="cursor-pointer hover:underline" href="/#about-me">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-2 w-6 h-6 icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span>About me</span>
              </a>
            </div>
            <div>
              <a className="cursor-pointer hover:underline" href="mailto:holdenrehg@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-2 w-5 h-5 icon icon-tabler icon-tabler-send" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="10" y1="14" x2="21" y2="3" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
                <span>Email me</span>
              </a>
            </div>
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
                  <a href="/books" className="-m-3 p-3 text-lg flex items-center rounded-sm hover:bg-gray-50">Books</a>
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
