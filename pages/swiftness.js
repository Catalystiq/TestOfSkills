import dynamic from 'next/dynamic'

const Swiftness = dynamic(() => import('../components/Swiftness'), {
  ssr: false
})


export default function Home() {
  return(
    <Swiftness></Swiftness>
  )
}