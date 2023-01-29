import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export default function Swiftness(){
  let bubble
  let width = window.innerWidth-16
  let height = window.innerHeight*2/3
  let radius = 50
  let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
  let remaining = 31
  let targets = remaining-1
  let times = []
  let count = 0

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

  let resetButton
  let results = []

	const setup = (p5, canvasParentRef) => {
		let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
    cnv.mousePressed(() => {
      mousePressed()
    })

    titleText = p5.createDiv('Test of Swiftness')
    titleText.style('font-size', '3rem');
    titleText.style('color', 'white')
    titleText.position(width/2-224, height/5);
    titleText.style('font-family', 'monospace')

    descriptionText = p5.createDiv(`hit ${remaining-1} targets as swiftly as you can`)
    descriptionText.style('font-size', '1rem');
    descriptionText.style('color', 'white')
    descriptionText.position(width/2-158, height/3);
    descriptionText.style('font-family', 'monospace')

    instructionsText = p5.createDiv(`click the target below to begin`)
    instructionsText.style('font-size', '1rem');
    instructionsText.style('color', 'white')
    instructionsText.position(width/2-136, height/3+24);
    instructionsText.style('font-family', 'monospace')

    reactionText = p5.createDiv(``)
    remainingText = p5.createDiv(``)
    averageText= p5.createDiv(``)
    finalText = p5.createDiv(``)
    //saveScoreText= p5.createDiv(``)
    resetButton = p5.createButton(``)
    
    

        class Bubble {
            constructor(x, y, r, w, h, c, s) {
              this.x = x
              this.y = y
              this.r = r
              this.w = w
              this.h = h
              this.c = c
              this.s = s
              this.brightness = 0
            }

            changeColor(bright) {
                this.c = bright;
              }
              
              changePosition() {
                this.x = p5.random(width/3, width * 2/3)
                this.y = p5.random(height/3, height * 2/3)
                createdTime = Date.now()
              }
            
              contains(px, py) {
                let d = p5.dist(px, py, this.x, this.y);
                if (d < this.r) {
                  return true;
                } else {
                  return false;
                }
              }
          
            show() {
              p5.stroke(255)
              p5.fill(this.c)
              p5.strokeWeight(this.s)
              p5.ellipse(this.x, this.y, this.r * 2)
            }
          }

          bubble = new Bubble(width/2, height/2, radius, width, height, color, 4)

          function mousePressed() {
            if(remaining > 0){
              if (bubble.contains(p5.mouseX, p5.mouseY)) {
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
		p5.background(0);
    if(remaining > 0){
      if (bubble.contains(p5.mouseX, p5.mouseY)) {
          bubble.changeColor(255);
        } else {
          bubble.changeColor(color);
        }
      bubble.show()
    }else{
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

      // saveScoreText.html('to retry, refresh the page')
      // saveScoreText.style('font-size', '2rem');
      // saveScoreText.style('color', 'white')
      // saveScoreText.position(width/2-229, height*3/4);
      // saveScoreText.style('font-family', 'monospace')

      resetButton.html('try again')
      resetButton.position(width/2-122, height*3/4)
      resetButton.style('font-size', '3rem');
      resetButton.style('color', 'black')
      resetButton.style('background', "darkgrey")
      resetButton.style('border-width', '3px')
      resetButton.style('font-family', 'monospace')
      resetButton.mousePressed(reset)

      if(count == 0){
        if(localStorage.swiftness != undefined){
          results = JSON.parse(localStorage.swiftness)
        }
        
        results.push(averageTime)
        localStorage.setItem('swiftness', JSON.stringify(results))    
        count++    
      }
  
    }

    function reset() {
      location.reload()
    }
	}

    

	return (
    <div>
      <NavBar></NavBar>
        <Sketch setup={setup} draw={draw} />
        <div className='w-full h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
    </div>
  );
};