import dynamic from 'next/dynamic'

const Linguistics = dynamic(() => import('../components/Linguistics'), {
  ssr: false
})




export default function Home() {
  return(
      <Linguistics></Linguistics>
  )
}