import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Order(){
  let width = window.innerWidth-16
  let height = window.innerHeight*2/3
  let counter = 3
  let round = -1
  let lower = round
  let higher = round + 1
  let number
  let guess

  let titleText
  let descriptionText
  let instructionsText
  let numberText
  let timerText

  let startButton

  let guessTitle
  let guessInstructions
  let guessInput
  let guessButton

  let finalNumberTitle
  let finalNumber
  let finalGuessTitle
  let finalGuess
  let roundText
  let saveScoreText



	const setup = (p5, canvasParentRef) => {
		let cnv = p5.createCanvas(width, height).parent(canvasParentRef)
      cnv.mousePressed(() => {

      })

      function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      
    titleText = p5.createDiv('Test of Order')
    titleText.style('font-size', '3rem');
    titleText.style('color', 'white')
    titleText.position(width/2-172, height/5);
    titleText.style('font-family', 'monospace')

    descriptionText = p5.createDiv('remember the longest integer you can')
    descriptionText.style('font-size', '1rem');
    descriptionText.style('color', 'white')
    descriptionText.position(width/2-158.5, height/3);
    descriptionText.style('font-family', 'monospace')

    instructionsText = p5.createDiv('click the start button to begin')
    instructionsText.style('font-size', '1rem');
    instructionsText.style('color', 'white')
    instructionsText.position(width/2-136, height/3+24);
    instructionsText.style('font-family', 'monospace')

    startButton = p5.createButton('start')
    startButton.position(width/2-69, height/3+120)
    startButton.style('font-size', '3rem');
    startButton.style('color', 'black')
    startButton.style('background', "darkgrey")
    startButton.style('border-width', '3px')
    startButton.style('font-family', 'monospace')
    startButton.mousePressed(showNumber)

    timerText = p5.createDiv(``)
    numberText = p5.createDiv(``)

    guessTitle = p5.createDiv(``)
    guessInstructions = p5.createDiv(``)
    guessInput = p5.createInput(``)
    guessButton = p5.createButton(``)

    finalNumberTitle = p5.createDiv(``)
    finalNumber = p5.createDiv(``)
    finalGuessTitle = p5.createDiv(``)
    finalGuess = p5.createDiv(``)
    roundText = p5.createDiv(``)
    saveScoreText = p5.createDiv(``)

  


    function showNumber() {
      guessTitle.hide()
      guessInstructions.hide()
      guessInput.hide()
      guessButton.hide()

      numberText.html(``)
      numberText.show()
      numberText.style('font-size', '4rem')
      numberText.style('color', 'white')
      numberText.style('font-family', 'monospace')

      titleText.hide()
      descriptionText.hide()
      instructionsText.hide()
      startButton.hide()

      counter = 0
      round ++
      lower = round
      counter = round + 3
      higher = round + 1
      number = randomInteger(10 ** lower, 10 ** higher)
      numberText.html(number)
      numberText.position(width/2-(18 * round), height/3)

      timerText.show()
      timerText.html(`${counter} sec`)
      timerText.style('font-size', '2rem')
      timerText.style('color', 'white')
      timerText.position(width/2-44, height/3+120)
      timerText.style('font-family', 'monospace')
  


      

      function timer(){
        if(counter > 0){
          counter = counter - 1
          //console.log(counter)
          timerText.html(`${counter} sec`)
        }else{
          // lower = round
          // higher = round + 1
  
          // counter = 0
          // round ++
          // counter = round + 4
          // console.log(10 ** lower, 10 ** higher)
          // console.log(lower, higher)
          clearInterval(timerInterval)
          showGuess()
        }
      }


      
      let timerInterval = setInterval(timer, 1000)
    }

    function showGuess() {
      timerText.hide()
      numberText.hide()

      guessTitle.show()
      guessInstructions.show()
      guessInput.show()
      guessButton.show()

      guessTitle.html('Enter the Number here...')
      guessTitle.style('font-size', '2rem');
      guessTitle.style('color', 'white')
      guessTitle.position(width/2-185, height/3);
      guessTitle.style('font-family', 'monospace')

      guessInstructions.html(`Press enter or the submit button to enter guess`)
      guessInstructions.style('font-size', '1rem');
      guessInstructions.style('color', 'white')
      guessInstructions.position(width/2-44, height/2);
      guessInstructions.style('font-family', 'monospace')

      guessInput.value('')
      guessInput.elt.focus({preventScroll: true})
      guessInput.position(width/2-69, height-200)
      guessInput.style('font-size', '1rem');
      guessInput.style('font-family', 'monospace')
      guessInput.input(guessInputListener)

      guessButton.html('submit')
      guessButton.position(width/2-69, height-120)
      guessButton.style('font-size', '3rem');
      guessButton.style('color', 'black')
      guessButton.style('background', "darkgrey")
      guessButton.style('border-width', '3px')
      guessButton.style('font-family', 'monospace')

      guessButton.mousePressed(checkGuess)

      guessInput.elt.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault()
          checkGuess()
        }
      })

      function guessInputListener() {
        guess = this.value()
      }
    }

    function checkGuess() {
      if(guess == number){
        guess = undefined
        showNumber()
      }else{
        endGame()
      }
    }

    function endGame() {
      guessTitle.hide()
      guessInstructions.hide()
      guessInput.hide()
      guessButton.hide()
    }
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



