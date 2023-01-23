import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Order(){
  let width = window.innerWidth-16
  let height = window.innerHeight*2/3
  let counter = 3
  let round = 0
  let lower = round
  let higher = round + 1
  let number

  let titleText
  let descriptionText
  let instructionsText

  let startButton


	const setup = (p5, canvasParentRef) => {
		let cnv = p5.createCanvas(width, height).parent(canvasParentRef)
      cnv.mousePressed(() => {

      })

      function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      
    titleText = p5.createDiv('Test of Tenacity')
    titleText.style('font-size', '3rem');
    titleText.style('color', 'white')
    titleText.position(width/2-211, height/5);
    titleText.style('font-family', 'monospace')

    descriptionText = p5.createDiv('when this box turns green, click as swiftly as you can')
    descriptionText.style('font-size', '1rem');
    descriptionText.style('color', 'white')
    descriptionText.position(width/2-237.5, height/3);
    descriptionText.style('font-family', 'monospace')

    instructionsText = p5.createDiv('click the green box to begin')
    instructionsText.style('font-size', '1rem');
    instructionsText.style('color', 'white')
    instructionsText.position(width/2-123, height/3+24);
    instructionsText.style('font-family', 'monospace')

    startButton = p5.createButton('start')
    startButton.position(width/2-69, height/3+120)
    startButton.style('font-size', '3rem');
    startButton.style('color', 'black')
    startButton.style('background', "darkgrey")
    startButton.style('border-width', '3px')
    startButton.style('font-family', 'monospace')
    startButton.mousePressed(showNumber)

      

  
    let timerText = p5.createDiv(`${counter} sec`)
    timerText.style('font-size', '2rem')
    timerText.style('color', 'white')
    timerText.position(width/2-44, height/3+120)
    timerText.style('font-family', 'monospace')
    timerText.hide()

    function showNumber() {
      timerText.show()
      titleText.hide()
      descriptionText.hide()
      instructionsText.hide()
      startButton.hide()

      //number = randomInteger()
    }



    
    function timer(){
      if(counter >= 0){
        counter = counter - 0.5
        //console.log(counter)
        timerText.html(`${counter} sec`)
      }else{
        lower = round
        higher = round + 1

        counter = 0
        round ++
        counter = round + 4
        console.log(10 ** lower, 10 ** higher)
        console.log(lower, higher)
      }
    }
    
    setInterval(timer, 1000);//native function 1000ms =1 s
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



