import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Simple() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-filter duration-300 ease-in-out hover:filter-drop-shadow-lg"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 animate-spin-slow transition-filter duration-300 ease-in-out hover:filter-drop-shadow-lg hover:drop-shadow-[0_0_2em_#61dafb]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Vite + React</h1>
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          count is {count}
        </button>
        <p>
          Edit <code className="font-mono">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-600">
        Click on the Vite and React logos to learn more
      </p>


      <div className="bg-third">
        <p className='text-2xl text-secondary font-notosans font-normal'>โดยที่การไม่นำพาและการหมิ่น Google facebook</p>
        <p className='text-2xl text-secondary font-notosans font-medium'>โดยที่การไม่นำพาและการหมิ่น Google facebook</p>
        <p className='text-2xl text-secondary font-notosans font-bold'>โดยที่การไม่นำพาและการหมิ่น Google facebook</p>
      </div>
      <div className="bg-secondary border-2 border-third">
        <p className='text-2xl text-third font-notosans font-normal'>โดยที่การไม่นำพาและการหมิ่น Google facebook</p>
        <p className='text-2xl text-third font-notosans font-medium'>โดยที่การไม่นำพาและการหมิ่น Google facebook</p>
        <p className='text-2xl text-third font-notosans font-bold'>โดยที่การไม่นำพาและการหมิ่น Google facebook</p>
      </div>
    </div>
  )
}

export default Simple
