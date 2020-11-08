import React from "react"

export const Header = () => (
  <header className="content-wrapper flex justify-between items-center px-64 z-50 bg-transparent absolute pt-10 pb-6 text-gray-800" style={{width: "1280px"}}>
    <div className="text-center"><a href="/#site-footer" className="opacity-75 text-base cursor-pointer hover:opacity-100">Work with me</a></div>
    <div className="text-center"><a href="/blog" className="opacity-75 text-base cursor-pointer hover:opacity-100">Blog</a></div>
    <div className="text-center"><a href="/" className="opacity-75 text-knewave text-3xl cursor-pointer hover:opacity-100">HR</a></div>
    <div className="text-center"><a href="/portfolio"><span className="opacity-75 text-base cursor-pointer hover:opacity-100">Portfolio</span></a></div>
    <div className="text-center"><a href="/#about-me"><span className="opacity-75 text-base cursor-pointer hover:opacity-100">My story</span></a></div>
  </header>
)
