import dynamic from 'next/dynamic'

const BubbleTheory = dynamic(() => import('../components/BubbleTheory'), {
    ssr: false
})

export default function Home(){
    return (
        <BubbleTheory></BubbleTheory>
    )
}