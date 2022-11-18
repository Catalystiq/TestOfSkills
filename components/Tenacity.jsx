import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let width = window.innerWidth-16
let height = window.innerHeight*2/3

export default function Tenacity(){

    const setup = (p5, canvasParentRef) => {
        let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
        cnv.mousePressed(() => {

        })
    }

    const draw = (p5) => {
        p5.background(0)
    }
    return(
        <div>
            <NavBar></NavBar>
            <Sketch setup={setup} draw={draw} />
            <div className='w-full h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        </div>
    )
}



