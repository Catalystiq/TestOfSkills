import dynamic from 'next/dynamic'

const Order = dynamic(() => import('../components/Order'), {
  ssr: false
})


export default function Home() {
  return(
    <Order></Order>
  )
  
}