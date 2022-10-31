import dynamic from 'next/dynamic'

const Numbers = dynamic(() => import('../components/Numbers'), {
  ssr: false
})


export default function Home() {
  return(
    <Numbers></Numbers>
  )
  
}