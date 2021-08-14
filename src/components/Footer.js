import React from "react"
import { Socials } from "."

export const Footer = () => (
  <div id="site-footer" className="z-40 w-full">
    <footer className="w-full min-h-64 px-8 md:px-20 py-10 bg-indigo-900 text-orange-100 text-vollkorn">
      <div className="content-wrapper text-left max-w-screen-xl">
        <div className="pb-3"><span className="text-3xl font-bold uppercase tracking-wider text-roboto">Holden Rehg</span></div>
        <div className="my-1"><a href="/portfolio" className="text-base cursor-pointer hover:underline">Portfolio</a></div>
        <div className="my-1"><a href="/blog" className="text-base cursor-pointer hover:underline">Blog</a></div>
        <div className="my-1"><a href="/#about-me" className="text-base cursor-pointer hover:underline">About Me</a></div>
        <div className="my-1"><a href="mailto:holdenrehg@gmail.com" className="text-base cursor-pointer hover:underline">Email me</a></div>
        <Socials />
        <div className="my-1"><span className="text-sm">Site built with <a href="https://gatsbyjs.com" rel="noreferrer" target="_blank"><u className="cursor-pointer">GatsbyJS</u></a></span></div>
      </div>
    </footer>
  </div>
)
