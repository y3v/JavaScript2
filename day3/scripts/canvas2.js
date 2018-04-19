"use strict"

document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('canvas0');
  console.log(canvas);
  let ctx = canvas.getContext('2d');
  console.log(ctx);

  let slider1 = document.getElementById('myRange1')
  let slider2 = document.getElementById('myRange2')
  let slider3 = document.getElementById('myRange3')

  let text1 =  document.getElementById('text1')
  let text2 =  document.getElementById('text2')
  let text3 =  document.getElementById('text3')

  let nbCircles = 10
  let ray = 50
  let closeness = 50

  text1.innerText=nbCircles
  text2.innerText=ray
  text3.innerText=closeness

  canvas.style.background = "red"

  drawAllCircles(ctx, closeness, ray, nbCircles);

  slider1.oninput = function(){
    nbCircles = parseInt(this.value);
    text1.innerText=nbCircles
    clear(ctx, canvas);
    drawAllCircles(ctx, closeness, ray, nbCircles);
  }

  slider2.oninput = function(){
    ray = parseInt(this.value);
    text2.innerText=ray
    clear(ctx, canvas);
    drawAllCircles(ctx, closeness, ray, nbCircles);
  }

  slider3.oninput = function(){
    closeness = parseInt(this.value);
    text3.innerText=closeness
    clear(ctx, canvas);
    drawAllCircles(ctx, closeness, ray, nbCircles);
  }
});

let drawCircle = function(ctx, closeness, ray){
  ctx.beginPath()
  ctx.arc(closeness,closeness,ray,0,2*Math.PI);
  ctx.stroke();
}

let drawAllCircles = function(ctx, closeness, ray, nbCircles){
  ctx.translate(350,250);
  for (var i = 0; i < nbCircles; i++) {
    rotate(ctx, nbCircles)
    drawCircle(ctx, closeness, ray);
    //console.log(closeness, ray, nbCircles)
  }
}

let rotate = function(ctx, nbCircles){
  ctx.rotate(2*Math.PI/nbCircles)
}

let clear = function(ctx, canvas){
  ctx.translate(-350,-250);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //console.log(canvas.height, canvas.width)
}
