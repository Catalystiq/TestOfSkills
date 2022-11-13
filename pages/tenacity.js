import dynamic from 'next/dynamic'

const Tenacity = dynamic(() => import('../components/Tenacity'), {
    ssr: false
})



export default function Home() {
    return(
      <Tenacity></Tenacity>
    )
}