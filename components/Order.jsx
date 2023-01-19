import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Order(){
  let width = window.innerWidth-16
  let height = window.innerHeight*2/3
  let counter = 10

	const setup = (p5, canvasParentRef) => {
		let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
      cnv.mousePressed(() => {

      })
      

  
  var timer = p5.createDiv('');
  //timer.html(counter); //insert text
  timer.style('font-size', '1rem');
  timer.style('color', 'white')
  timer.position(width/2-123, height/3+24);
  timer.style('font-family', 'monospace')

  
  function timeIt(){
    counter = counter - 0.5
    timer.html(counter)
  }
  
  setInterval(timeIt, 1000);//native function 1000ms =1 s
  //request animationframe is also another func


	};

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



