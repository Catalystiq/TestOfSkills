import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let size = 1
let bubbles = new Array(size)
let width = window.innerWidth
let height = window.innerHeight/2
let radius = 50
let move = 1
let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
let remaining = 5

let clickedTime
let createdTime 
let reactionTime


export default function Swiftness(){
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
    cnv.mousePressed(() => {
      //console.log("Clicked on the canvas. Event:")
      mousePressed()
    })

    let text = p5.createDiv(`reaction time is: ${reactionTime}ms`)

        class Bubble {
            constructor(x, y, r, w, h, c, m, s) {
              this.x = x
              this.y = y
              this.r = r
              this.w = w
              this.h = h
              this.c = c
              this.m = m
              this.s = s
              this.brightness = 0
            }

            changeColor(bright) {
                this.c = bright;
              }
              
              changePosition() {
                this.x = p5.random(width/4, width * 3/4)
                this.y = p5.random(height/4, height * 3/4)
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

          bubbles = bubbles.fill().map(() => new Bubble(p5.random(radius, width-radius), p5.random(radius, height-radius), radius, width, height, color, move, 4))

          function mousePressed() {
            for (let i = bubbles.length - 1; i >= 0; i--) {
              if (bubbles[i].contains(p5.mouseX, p5.mouseY)) {
                //bubbles.splice(i, 1);
                clickedTime = Date.now()
                reactionTime = clickedTime-createdTime
                console.log(reactionTime + 'ms')
                  text.html(`reaction time is: ${reactionTime}ms`)
                  text.style('font-size', '1rem');
                  text.style('color', 'white')
                  text.position(width/2-84, height);
                bubbles[i].changePosition()
              }
            }
          }
	};

	const draw = (p5) => {
		p5.background(0);
    for (let bubble = 0; bubble < bubbles.length; bubble++) {
        if (bubbles[bubble].contains(p5.mouseX, p5.mouseY)) {
            bubbles[bubble].changeColor(255);
          } else {
            bubbles[bubble].changeColor(color);
          }
        bubbles[bubble].show()
    }
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	}

    

	return (
    <div>
      <NavBar></NavBar>
        <Sketch setup={setup} draw={draw} />
        <div className='w-full h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
    </div>
  );
};