import dynamic from 'next/dynamic'
import NavBar from './NavBar'
import randomWord from 'random-word-by-length'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Linguistics(){
    let width = window.innerWidth-16
    let height = window.innerHeight*2/3
    let word

    let titleText
    let descriptionText
    let instructionsText
    let startButton

    let wordText
    let seenButton
    let newButton
    let livesText

    let words = []
    let lives = 3

	const setup = (p5, canvasParentRef) => {
	    let cnv = p5.createCanvas(width, height).parent(canvasParentRef)
        cnv.mousePressed(() => {

        })

        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }

        titleText = p5.createDiv('Test of Linguistics')
        titleText.style('font-size', '3rem');
        titleText.style('color', 'white')
        titleText.position(width/2-250, height/5);
        titleText.style('font-family', 'monospace')
    
        descriptionText = p5.createDiv('remember the most words that you can.')
        descriptionText.style('font-size', '1rem');
        descriptionText.style('color', 'white')
        descriptionText.position(width/2-163, height/3);
        descriptionText.style('font-family', 'monospace')
    
        instructionsText = p5.createDiv('if you have seen the word, click SEEN. if it is a new word, click NEW')
        instructionsText.style('font-size', '1rem');
        instructionsText.style('color', 'white')
        instructionsText.position(width/2-303, height/3+24);
        instructionsText.style('font-family', 'monospace')

        startButton = p5.createButton('start')
        startButton.position(width/2-69, height/3+120)
        startButton.style('font-size', '3rem');
        startButton.style('color', 'black')
        startButton.style('background', "darkgrey")
        startButton.style('border-width', '3px')
        startButton.style('font-family', 'monospace')
        startButton.mousePressed(showWords)

        wordText = p5.createDiv(``)
        seenButton = p5.createButton(``)
        newButton = p5.createButton(``)
        livesText = p5.createDiv(``)

        function showWords() {
            titleText.hide()
            descriptionText.hide()
            instructionsText.hide()
            startButton.hide()

            wordText.html(``)
            wordText.show()
            wordText.style('font-size', '4rem')
            wordText.style('color', 'white')
            wordText.style('font-family', 'monospace')

            livesText.html(``)
            livesText.show()
            livesText.style('font-size', '2rem')
            livesText.style('color', 'white')
            livesText.style('font-family', 'monospace')

            word = randomWord()
            wordText.html(word)
            wordText.position(width/2-(18 * (word.length)), height/3)

            livesText.html(`${lives} lives`)
            livesText.position(width/2-62, height/3+120)

            seenButton.html('seen')
            seenButton.position((width-55)*2/3-100, height-120)
            seenButton.style('font-size', '3rem');
            seenButton.style('color', 'black')
            seenButton.style('background', "darkgrey")
            seenButton.style('border-width', '3px')
            seenButton.style('font-family', 'monospace')
            seenButton.mousePressed(seenFunction)

            newButton.html('new')
            newButton.position((width-42)*1/3+100, height-120)
            newButton.style('font-size', '3rem');
            newButton.style('color', 'black')
            newButton.style('background', "darkgrey")
            newButton.style('border-width', '3px')
            newButton.style('font-family', 'monospace')
            newButton.mousePressed(newFunction)
        }

        function seenFunction() {
            
        }

        function newFunction() {
            if(words.every((currentWord) => currentWord != word)){
                words.push(word)
                console.log(words)
                //word = randomWord()
                wordText.html(word)
            }else{
                lives--
                livesText.html(`${lives} lives`)
                console.log(lives)
            }
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



