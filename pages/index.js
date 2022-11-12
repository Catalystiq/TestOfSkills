import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function Home() {
  return(
    <div>
    <NavBar/>
      <div className="font-mono h-screen w-full flex flex-col space-y-4 items-center justify-center bg-black">
        
        <h1 className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Test of Skills</h1>
        {/* <a href="/order" className="text-2xl text-white font-semibold underline">Test of Order</a> */}
        <Link href='/order' className="text-2xl text-white font-semibold underline font-mono">Test of Order</Link>
        <Link href='/swiftness' className="text-2xl text-white font-semibold underline">Test of Swiftness</Link>
        <Link href='/bubbletheory' className="text-2xl text-white font-semibold underline">Bubble Theory</Link>
        <Link href='/tenacity' className="text-2xl text-white font-semibold underline">Test of Tenacity</Link>
      </div>
    </div>
    
  )
}