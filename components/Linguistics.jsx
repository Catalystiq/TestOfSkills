import dynamic from 'next/dynamic'
import NavBar from './NavBar'
import randomWord from 'random-word-by-length'
//const randomWord = require('random-word');
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
    let roundText

    let words = []
    let lives = 3

    let round = 0

    let memorizedText
    let saveScoreText

    let resetButton

    let results = []
    let count = 0

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
        roundText = p5.createDiv(``)

        //saveScoreText = p5.createDiv(``)
        memorizedText = p5.createDiv(``)
        resetButton = p5.createButton(``)

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
            seenButton.position((width*3/4)-110, height-120)
            seenButton.style('font-size', '3rem');
            seenButton.style('color', 'black')
            seenButton.style('background', "darkgrey")
            seenButton.style('border-width', '3px')
            seenButton.style('font-family', 'monospace')
            seenButton.mousePressed(seenFunction)

            newButton.html('new')
            newButton.position((width*1/4)+42, height-120)
            newButton.style('font-size', '3rem');
            newButton.style('color', 'black')
            newButton.style('background', "darkgrey")
            newButton.style('border-width', '3px')
            newButton.style('font-family', 'monospace')
            newButton.mousePressed(newFunction)

            roundText.html(`${round} Words`)
            roundText.style('font-size', '3rem');
            roundText.style('color', 'white')
            roundText.position(width/2-105, height*3/4-25);
            roundText.style('font-family', 'monospace')
        }

        function seenFunction() {
            if(lives > 0){
                if(words.some(v => v.includes(word))){
                    generateWord()
                    wordText.html(word)
                    round++
                    roundText.html(`${round} Words`)
                }else{
                    lives--
                    if(lives > 0){
                        words.push(word)
                        livesText.html(`${lives} lives`)
                        generateWord()
                        wordText.html(word)
                    }else{
                        endGame()
                    }
                }                
            }else{
                endGame()
            }

        }

        function generateWord() {
            if(randomInteger(0,100) % 4 == 0 && round > 3){
                word = words[Math.floor(Math.random()*words.length)]
                wordText.position(width/2-(18 * (word.length)), height/3)
            }else{
                word = randomWord()
                wordText.position(width/2-(18 * (word.length)), height/3)
            }
        }

        function newFunction() {
            if(lives > 0){
                if(words.every((currentWord) => currentWord != word)){
                    words.push(word)
                    generateWord()
                    wordText.html(word)
                    round++
                    roundText.html(`${round} Words`)
                }else{
                    lives--
                    if(lives > 0){
                        livesText.html(`${lives} lives`)
                        generateWord()
                        wordText.html(word)                      
                    }else{
                        endGame()
                    }
                }
            }else{
                endGame()
            }
        }

        function endGame() {
            wordText.hide()
            livesText.hide()
            seenButton.hide()
            newButton.hide()

            memorizedText.html('You memorized...')
            memorizedText.style('font-size', '4rem');
            memorizedText.style('color', 'white')
            memorizedText.position(width/2-282, height/3+50);
            memorizedText.style('font-family', 'monospace')

            roundText.html(`${round} Words`)

            // saveScoreText.html('to retry, refresh the page')
            // saveScoreText.style('font-size', '2rem');
            // saveScoreText.style('color', 'white')
            // saveScoreText.position(width/2-229, height*3/4);
            // saveScoreText.style('font-family', 'monospace')

            resetButton.html('try again')
            resetButton.position(width/2-122, height-45)
            resetButton.style('font-size', '3rem');
            resetButton.style('color', 'black')
            resetButton.style('background', "darkgrey")
            resetButton.style('border-width', '3px')
            resetButton.style('font-family', 'monospace')
            resetButton.mousePressed(reset)

            if(count == 0){
                if(localStorage.linguistics != undefined){
                  results = JSON.parse(localStorage.linguistics)
                }
                
                results.push(round)
                localStorage.setItem('linguistics', JSON.stringify(results))    
                count++    
            }
        }

        function reset() {
            location.reload()
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



