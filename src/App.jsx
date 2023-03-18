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
    <div className='bg-[url("/bg.jpeg")]'>
      <div className='bg-black bg-opacity-50'>
           <div className='flex justify-center pt-32 text-indigo-500 text-9xl'>
                <Header value = {count}/>
           </div>
           <div  className='flex justify-center pb-16 space-x-10 text-white columns-1 mt-60'>
                <button className='bg-indigo-400 px-3 py-1 rounded-xl text-xl' onClick={increment}>ПЛЮС</button>
                <button className='bg-indigo-400 px-3 py-1 rounded-xl text-xl' onClick={subtraction}>МИНУС</button>
                <button className='bg-indigo-400 px-3 py-1 rounded-xl text-xl' onClick={reboot}>ВЕРНУТЬ К НУЛЮ</button>
            </div>
      </div>
    </div>
  )
}

export default App
