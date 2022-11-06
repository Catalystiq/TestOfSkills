//import React from 'react'
import dynamic from 'next/dynamic'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

let size = 100
let bubbles = new Array(size)
let width = window.innerWidth
let height = window.innerHeight
let upperRadius = 1
let lowerRadius = 25
let move = 1

export default function BubbleTheory(){
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(width, height).parent(canvasParentRef);
        class Bubble {
            constructor(x, y, r, w, h, c, m, s, p5) {
              this.x = x
              this.y = y
              this.r = r
              this.w = w
              this.h = h
              this.c = c
              this.m = m
              this.s = s
              this.dx = x
              this.dy = y
              this.p5 = p5
            }
          
            move() {
              if (this.x <= this.w && this.y <= this.h && this.x >= 0 && this.y >= 0) {
                this.x += p5.random(-this.m, this.m)
                this.y += p5.random(-this.m, this.m)
              } else {
                //this.x = this.dx
                //this.y = this.dy
                this.x = p5.random(0, this.w)
                this.y = p5.random(0, this.h)
              }
            }
          
            show() {
              p5.stroke(this.c)
              p5.fill(this.c)
              p5.strokeWeight(this.s)
              p5.ellipse(this.x, this.y, this.r * 2)
            }
          }

          bubbles = bubbles.fill().map(() => new Bubble(p5.random(0, width), p5.random(0, height), p5.random(lowerRadius, upperRadius), width, height, '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), move, 4))
	};

	const draw = (p5) => {
		p5.background(0);
        for (let bubble = 0; bubble < bubbles.length; bubble++) {
            bubbles[bubble].move()
            bubbles[bubble].show()
        }
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	};

    

	return <Sketch setup={setup} draw={draw} />;
};