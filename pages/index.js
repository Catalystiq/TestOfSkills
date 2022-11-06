import Link from 'next/link'

export default function Home() {
  return(
    <div className="h-screen w-full flex flex-col space-y-4 items-center justify-center bg-black">
      <h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-900 to-cyan-600'>Test of Skills</h1>
      {/* <a href="/order" className="text-2xl text-white font-semibold underline">Test of Order</a> */}
      <Link href='/order' className="text-2xl text-white font-semibold underline">Test of Order</Link>
      <Link href='/swiftness' className="text-2xl text-white font-semibold underline">Test of Swiftness</Link>
      <Link href='/bubbletheory' className="text-2xl text-white font-semibold underline">Bubble Theory</Link>
    </div>
  )
}