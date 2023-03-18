import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

 function increment(){
  setCount(count + 1)
}

function subtraction(){
  setCount(count - 1)
}
function reboot(){
  setCount(0)
}

  return (
    <div className='bg-[url("/bg.jpeg")] h-screen'>
      <div className='bg-black bg-opacity-50 h-screen'>
           <div className='flex justify-center pt-32 text-indigo-500 text-9xl'>
                <Header value = {count}/>
           </div>
              <div  className='flex justify-center mt-60 md:space-x-10 flex-col md:flex-row space-y-5 sm:space-y-0'>
                    <button className='bg-indigo-400 px-3 py-1 rounded-xl text-xl' onClick={increment}>ПЛЮС</button>
                    <button className='bg-indigo-400 px-3 py-1 rounded-xl text-xl' onClick={subtraction}>МИНУС</button>
                    <button className='bg-indigo-400 px-3 py-1 rounded-xl text-xl' onClick={reboot}>ВЕРНУТЬ К НУЛЮ</button>
                </div>
      </div>
    </div>
  )
}

export default App
