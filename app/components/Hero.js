function Hero() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
            PROTECT, CONNECT, INNOVATE with {" "}
             <span className="text-indigo-400">Lionstone Digital agency</span>
        </h1>
        <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            We are your strategic partner in navigating the complexities of the digital age.
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a href="javascript:void(0)" className="px-7 py-3 w-full bg-blue-500 text-gray-800 text-center rounded-md shadow-md block sm:w-auto">
                Get started
            </a>
            <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-blue-500 text-center rounded-md block sm:w-auto">
                Try it out
            </a>
        </div>
    </div>
    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
    </div>
    
</section>
  )
}
export default Hero