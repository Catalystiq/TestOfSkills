import dynamic from 'next/dynamic'
import NavBar from '../components/NavBar'

const Order = dynamic(() => import('../components/Order'), {
  ssr: false
})




export default function Home() {
  return(
      <Order></Order>
  )
}