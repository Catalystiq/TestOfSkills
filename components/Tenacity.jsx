import { ChatBubbleIcon } from '@radix-ui/react-icons'
import dynamic from 'next/dynamic'
import NavBar from './NavBar'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})



export default function Tenacity(){
    let button
    let width = window.innerWidth-16
    let height = window.innerHeight*2/3
    let color
    let started = false
    let remaining = 5

    let titleText
    let descriptionText
    let instructionsText

    const setup = (p5, canvasParentRef) => {
        color = p5.color(0,0,0)
        let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
        cnv.mousePressed(() => {
            mousePressed()
        })
        

        titleText = p5.createDiv('')
        descriptionText = p5.createDiv(``)
        instructionsText = p5.createDiv(``)



        function mousePressed() {
            started = true
        }

        class Button {
            constructor(x, y, w, h, c) {
                this.x = x
                this.y = y
                this.w = w
                this.h = h
                this.c = c
            }

            show() {
                p5.fill(this.c)
                p5.rect(this.x, this.y, this.w, this.y)
            }
        }

        button = new Button(0, 0, width, height, p5.color(255, 0, 0))

    }

    const draw = (p5) => {
        p5.background(0)
        button.show()


        function startShow() {
            titleText.show()
            titleText.html('Test of Tenacity')
            titleText.style('font-size', '3rem');
            titleText.style('color', 'white')
            titleText.position(width/2-224, height/5);
            titleText.style('font-family', 'monospace')
        
            descriptionText.show()
            descriptionText.html('when this box turns green, click as swiftly as you can')
            descriptionText.style('font-size', '1rem');
            descriptionText.style('color', 'white')
            descriptionText.position(width/2-158, height/3);
            descriptionText.style('font-family', 'monospace')
        
            instructionsText.show()
            instructionsText.html('click this box to begin')
            instructionsText.style('font-size', '1rem');
            instructionsText.style('color', 'white')
            instructionsText.position(width/2-136, height/3+24);
            instructionsText.style('font-family', 'monospace')
        
        }

        function startHide() {
            titleText.hide()
            descriptionText.hide()
            instructionsText.hide()
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



