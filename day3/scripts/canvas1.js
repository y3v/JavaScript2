"use strict"

document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('canvas0');
  console.log(canvas);
  let ctx = canvas.getContext('2d');
  console.log(ctx);

  canvas.style.background = "red"

  /*ctx.moveTo(100,100);
  ctx.lineTo(200,100);
  ctx.lineTo(200,200);
  ctx.lineTo(100,200);
  ctx.lineTo(100,100);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(220,200, 50, 0, 2*Math.PI);
  ctx.lineTo(100,100);

  ctx.stroke();*/

  //TRANSLATION, ROTATION, TRANSFORMATION

  /*ctx.strokeRect(300,150,50,100);
  ctx.translate(150,0);
  ctx.rotate(Math.PI/8);
  ctx.scale(0.5,1.5)

  ctx.strokeRect(300,150,50,100);*/

  //CLIPPING



  ctx.beginPath();
  ctx.arc(220,220,100,0,2*Math.PI);
  ctx.clip();

  ctx.fillStyle = "orange"
  ctx.fillRect(200,150,250,250);





});
