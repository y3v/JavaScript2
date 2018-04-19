"use strict"

document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('canvas0');
  console.log(canvas);
  let ctx = canvas.getContext('2d');
  console.log(ctx);

  let slider1 = document.getElementById('myRange1')
  let slider2 = document.getElementById('myRange2')
  let slider3 = document.getElementById('myRange3')

  let nbCircles = 10
  let ray = 50
  let closeness = 50

  canvas.style.background = "red"

  ctx.translate(350,200);

  this.test()

  drawAllCircles();

  let test = function(){
    console.log("test")
  }

  let drawCircle = function(ctx){
    ctx.beginPath()
    ctx.arc(closeness,closeness,ray,0,2*Math.PI);
    ctx.stroke();
  }

  let drawAllCircles = function(){
    for (var i = 0; i < nbCircles; i++) {
      rotate(ctx)
      drawCircle(ctx);
    }
  }

  let rotate = function(ctx){
    ctx.rotate(2*Math.PI/nbCircles)
  }

  let clear = function(){
    ctx.clearRect(0,0,canvas.width,canvas,height);
  }

  slider1.oninput = function(){
    nbCircles = this.value;
    clear();
    drawAllCircles();
  }

  slider2.oninput = function(){
    ray = this.value;
    clear();
    drawAllCircles();
  }

  slider3.oninput = function(){
    closeness = this.value;
    clear();
    drawAllCircles();
  }

});
