import React from "react"
import { Socials } from "."

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    disabled: false,
    sent: false,
    response: "",
  }

  handleInputChange = event => {
    const target = event.target
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({disabled: true})

    setTimeout(() => {
      const url = `${process.env.APP_API_URL}/contact`
      const request = fetch(
        url,
        {
          headers: {"Content-Type": "application/json; charset=utf-8"},
          method: "POST",
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
          })
        }
      )

      request
        .then(response => {
          response.json().then(data => {
            this.setState({sent: response.ok, response: data.message, disabled: response.ok})
          })
        }).catch(error => {
          this.setState({sent: false, response: "Sorry, there was a problem on our end.", disabled: false})
        })
    }, 500)
  }

  render() {
    return (
      <form className="w-full" onSubmit={this.handleSubmit}>
        <div className="mb-6">
          <label className="mb-1 block text-base" htmlFor="name">
            What is your name? *
            <input name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Dolores Abernathy"
              className="w-full text-base text-gray-800 placeholder-gray-600 border px-3 py-2 bg-gray-100 border-gray-400"
              required
              disabled={this.state.disabled}/>
          </label>
        </div>
        <div className="mb-6">
          <label className="mb-1 block text-base" htmlFor="email">
            What is the best email for you? *
            <input name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="dolores@gmail.com"
              className="w-full text-base text-gray-800 placeholder-gray-600 border px-3 py-2 bg-gray-100 border-gray-400"
              required
              disabled={this.state.disabled}/>
          </label>
        </div>
        <div className="mb-6">
          <label className="mb-1 block text-base" htmlFor="message">
            Why are you reaching out? *
            <textarea name="message"
              rows="8"
              value={this.state.message}
              onChange={this.handleInputChange}
              className="w-full text-base text-gray-800 placeholder-gray-600 border px-3 py-2 bg-gray-100 border-gray-400"
              placeholder="Hey Holden! I got a super cool project that I'm working on but need some advice..."
              required
              disabled={this.state.disabled}></textarea>
          </label>
        </div>
        <div className="mb-6 display-none opacity-0 hidden">
          <label className="mb-1 block text-base" htmlFor="message">
            Phone number
            <input name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="000-000-0000"
              className="w-full text-base text-gray-800 placeholder-gray-600 border px-3 py-2 bg-gray-100 border-gray-400"
              tabIndex="-1"
              autoComplete="off"/>
          </label>
        </div>
        <button type="submit"
          disabled={this.state.disabled}
          className="rounded uppercase text-white text-lg font-bold tracking-wide px-10 py-3 bg-orange-600 cursor-pointer hover:bg-orange-800">
          <span>Send Message</span>
        </button>
        <img src="/icons/reload.svg"
          alt=""
          className={(!this.state.sent && this.state.disabled ? "" : "hidden ") + "spinner inline align-middle h-8 ml-3 bg-orange-800 p-2 rounded-full"}/>
        <div className={(this.state.sent ? "text-green-800" : "text-red-700" ) + " text-lg tracking-wide mt-3"}>{this.state.response}</div>
      </form>
    )
  }
}

export const Footer = () => (
  <div id="site-footer" className="z-40 w-full">
    {/* Contact Me Section */}
    <div className="bg-white px-20 py-20 border-t border-gray-400" style={{ maxHeight: '26rem' }}>
      <div className="content-wrapper flex justify-between">
        <div className="w-1/2">
          <p className="text-gray-900 text-3xl font-bold uppercase tracking-wider">Message me and say hi</p>
          <p className="mt-2 text-base text-vollkorn">
            Shoot me a message and let me know what you're thinking. I'm usually happy to talk with passionate people or anyone who genuinely needs helps.
            {/* TODO: Add once work-with-me form implemented */}
            {/* <a className="ml-1" href="/work-with-me">
              <u>Looking to hire me? Check out my freelancing page instead of using this form.</u>
            </a> */}
          </p>
          <div className="mt-10 text-gray-700">
            <p className="my-3">
              <img src="/icons/envelope-closed.svg"
                alt=""
                className="inline-block align-middle"
                width="12px"/>
              <span className="ml-2"><a href="mailto:holdenrehg@gmail.com" className="hover:underline">holdenrehg@gmail.com</a></span>
            </p>
            <p className="my-3">
              <img src="/icons/phone.svg"
                alt=""
                className="inline-block align-middle"
                width="12px"/>
              <span className="ml-2"><a href="tel:+1-618-691-9180" className="hover:underline">+1 (618) 691-9180</a></span>
            </p>
            <p className="my-3">
              <img src="/icons/map-marker.svg"
                alt=""
                className="inline-block align-middle"
                width="12px"/>
              <span className="ml-2">
                <a href="https://www.google.com/maps/place/St.+Louis,+MO/@38.6530795,-90.313673,12z/data=!3m1!4b1!4m5!3m4!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042" className="hover:underline">
                  St. Louis, MO, USA
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="w-1/2 pl-16">
          <div className="bg-white shadow-2xl p-12 border border-gray-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

    {/* Main Footer Section */}
    <footer className="w-full min-h-64 px-20 py-10 bg-orange-800 text-orange-100 text-vollkorn">
      <div className="content-wrapper text-left">
        <div className="pb-3"><span className="text-3xl font-bold uppercase tracking-wider text-roboto">Holden Rehg</span></div>
        <div className="my-1"><a href="/#about-me" className="text-base cursor-pointer hover:underline">About Me</a></div>
        <div className="my-1"><a href="/portfolio" className="text-base cursor-pointer hover:underline">Portfolio</a></div>
        {/* TODO: Add once work-with-me form implemented */}
        {/* <div className="my-1"><a href="/work-with-me" className="text-base cursor-pointer hover:underline">Work With Me</a></div> */}
        <div className="my-1"><a href="/blog" className="text-base cursor-pointer hover:underline">Blog</a></div>
        <Socials />
        <div className="my-1"><span className="text-sm">Site built with <a href="https://gatsbyjs.com" rel="noreferrer" target="_blank"><u className="cursor-pointer">GatsbyJS</u></a></span></div>
      </div>
    </footer>
  </div>
)
