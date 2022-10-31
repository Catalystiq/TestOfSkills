import { useState, useEffect } from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress';

function Progress({ children, ...props }) {
  return (
    <ProgressPrimitive.Root
      {...props}
      className={
        'group relative overflow-hidden bg-black w-1/2 h-2.5'
      }
    >
      {children}
    </ProgressPrimitive.Root>
  )
}

function ProgressIndicator({ children, ...props }) {
  return (
    <ProgressPrimitive.Indicator
      {...props}
      className="group bg-white w-full h-full ease-in-out duration-500"
    >
      {children}
    </ProgressPrimitive.Indicator>
  )
}

export default function Home() {

  const [progress, setProgress] = useState(100)
  let subProgress = 1/10 * 100
  let number = getNumber(10, 100)
  function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  let round = 10

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (Math.round(prevProgress) <= 0 ? 100 : prevProgress - subProgress))
    }, 1000)
    return () => clearInterval(timer)
  }, [subProgress])

  return (
    <div className="h-screen w-full flex flex-col space-y-4 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-6xl text-white font-semibold">
        Radix UI + Tailwind CSS
      </h1>
      <br />
      <h1 className="text-6xl text-white font-semibold">{number}</h1>

      <Progress>
        <ProgressIndicator style={{ transform: `translateX(-${100 - progress}%)` }} />
      </Progress>

      <h1 className='text3xl text-white font-semibold'>{Math.round(progress / subProgress)}s</h1>
     </div>
  )
}