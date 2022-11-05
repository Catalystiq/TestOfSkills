import Link from 'next/link'

export default function Home() {
  return(
    <div className="h-screen w-full flex flex-col space-y-4 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className='text-6xl text-white font-semibold'>Hello world</h1>
      {/* <a href="/order" className="text-2xl text-white font-semibold underline">Test of Order</a> */}
      <Link href='/order' className="text-2xl text-white font-semibold underline">Test of Order</Link>
    </div>
  )
}