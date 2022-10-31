import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Progress = dynamic(() => import('./Progress'), {
  ssr: false,
})

const ProgressIndicator = dynamic(() => import('./ProgressIndicator'), {
  ssr: false
})

export default function Numbers(){
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