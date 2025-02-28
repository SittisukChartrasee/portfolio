export default function Home() {
  return (
    <div className="h-screen pt-[54px]">
      <div className="h-full justify-center items-center flex">
        <div className="max-w-[819px]">
          <div className="container mx-auto px-6 text-center relative">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              {'Welcome to My Journey as a Developer'}
            </h1>
            <p className="text-xl mb-8">
              {'I’ve had the opportunity to work with cutting-edge technologies and build impactful applications, from mobile development to building responsive websites.'}
            </p>
            <a href="#portfolio" className="bg-yellow-500 text-black font-medium py-2 px-6 text-lg hover:bg-yellow-400 transition duration-300">
              {'Scroll Down to Explore My Work'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}