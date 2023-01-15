import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Tenacity(){
    let bubble
    let bgColor = '#000000'
    let width = window.innerWidth-16
    let height = window.innerHeight*2/3
    let radius = 100
    let color = '#00ff00'
    let remaining = 6
    let targets = remaining-1
    let times = []
  
    let clickedTime
    let createdTime = Date.now()
    let reactionTime
    let averageTime
  
    let titleText
    let descriptionText
    let instructionsText
    let finalText
    let saveScoreText
  
    let reactionText
    let remainingText
    let averageText

	const setup = (p5, canvasParentRef) => {
		let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
        cnv.mousePressed(() => {
            mousePressed()
        })

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

    reactionText = p5.createDiv(``)
    remainingText = p5.createDiv(``)
    averageText= p5.createDiv(``)
    finalText = p5.createDiv(``)
    saveScoreText= p5.createDiv(``)
    
    

        class Bubble {
            constructor(x, y, r, w, h, c, s) {
              this.x = x
              this.y = y
              this.r = r
              this.w = w
              this.h = h
              this.c = c
              this.s = s
            }
              
            changePosition() {
              this.r = 0
              this.w = 0
              this.h = 0
              this.x = width-width
              this.y = height-height
              setTimeout(() => {
                createdTime = Date.now()
                this.w = width
                this.h = height
              }, p5.random(3000, 7000))

            }
            
            contains() {
              if(this.w != 0 && this.h != 0){
                return true
              }else{
                return false
              }
            }
          
            show() {
              p5.fill(this.c)
              p5.noStroke
              p5.rect(this.x, this.y, this.w, this.h)
            }
          }

          bubble = new Bubble(width/2-radius/2, height/2, radius, radius, radius, color, 4)

          function mousePressed() {
            if(remaining > 0){
              if (bubble.contains()) {
                bgColor = '#ff0000'
                titleText.hide()
                descriptionText.hide()
                instructionsText.hide()

                remaining -= 1
                clickedTime = Date.now()
                reactionTime = clickedTime-createdTime
                times.push(reactionTime)
                //console.log(reactionTime + 'ms')

                reactionText.html(`reaction time is: ${reactionTime}ms`)
                reactionText.style('font-size', '1rem');
                reactionText.style('color', 'white')
                reactionText.position(width/2-84, height);
                reactionText.style('font-family', 'monospace')

                remainingText.html(`remaining targets: ${remaining}`)
                remainingText.style('font-size', '1rem');
                remainingText.style('color', 'white')
                remainingText.position(width/2-84, height-24);
                remainingText.style('font-family', 'monospace')

                bubble.changePosition()

                if(remaining == 1){
                  times.shift()
                }
              }              
            }
          }
	};

    const draw = (p5) => {
		p5.background(p5.color(bgColor))
    if(remaining > 0){
      bubble.show()
    }else{
      bgColor = '#000000'
      reactionText.hide()
      remainingText.hide()
      averageTime = Math.round((times.reduce((partialSum, a) => partialSum + a, 1))/targets)

      finalText.html('average time per target')
      finalText.style('font-size', '2rem');
      finalText.style('color', 'white')
      finalText.position(width/2-202, height/3);
      finalText.style('font-family', 'monospace')

      averageText.html(`${averageTime}ms`)
      averageText.style('font-size', '4rem');
      averageText.style('color', 'limegreen')
      averageText.position(width/2-88, height/2);
      averageText.style('font-family', 'monospace')

      saveScoreText.html('to retry, refresh the page')
      saveScoreText.style('font-size', '2rem');
      saveScoreText.style('color', 'white')
      saveScoreText.position(width/2-229, height*3/4);
      saveScoreText.style('font-family', 'monospace')
    }
	}
    return(
        <div>
            <NavBar></NavBar>
            <Sketch setup={setup} draw={draw} />
            <div className='w-full h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        </div>
    )
}



