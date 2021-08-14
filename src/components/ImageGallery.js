import React from "react"

export class ImageGallery extends React.Component {
  state = {
    timer: undefined,
    timerIntervalTime: '1200', // 1.2 seconds
    currentImageIndex: 0,
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ currentImageIndex: (this.state.currentImageIndex + 1) % 4 })
    }, this.state.timerIntervalTime)
    this.setState({ timer: interval })
  }

  componentWillUnmount() {
    if(this.state.timer) {
      clearInterval(this.state.timer)
      this.setState({timer: undefined})
    }
  }

  render() {
    const grayscalePercent = "65%";
    return (
      <div className="relative w-64 h-72 shadow-xl border border-gray-500 border-dotted bg-gray-100 rounded-full overflow-hidden mx-auto">
        <img src="/images/self-portrait-1.jpeg"
          alt=""
          className={ 'absolute ' + (this.state.currentImageIndex !== 0 ? 'hidden' : '') }
          style={{ bottom: '-20px', filter: `grayscale(${grayscalePercent})` }}/>
        <img src="/images/self-portrait-2.jpeg"
          alt=""
          className={ 'absolute ' + (this.state.currentImageIndex !== 1 ? 'hidden' : '') }
          style={{ bottom: '-20px', filter: `grayscale(${grayscalePercent})` }}/>
        <img src="/images/self-portrait-3.jpeg"
          alt=""
          className={ 'absolute ' + (this.state.currentImageIndex !== 2 ? 'hidden' : '') }
          style={{ bottom: '-20px', filter: `grayscale(${grayscalePercent})` }}/>
        <img src="/images/self-portrait-4.jpeg"
          alt=""
          className={ 'absolute ' + (this.state.currentImageIndex !== 3 ? 'hidden' : '') }
          style={{ bottom: '-20px', filter: `grayscale(${grayscalePercent})` }}/>
      </div>
    )
  }
}
