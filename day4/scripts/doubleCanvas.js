"use strict";

document.addEventListener("DOMContentLoaded", function(){

  let canvas = document.getElementById("canvas0");
  let canvas2 = document.getElementById("canvas1");
  let ctx = canvas.getContext('2d');
  let ctx2 = canvas2.getContext('2d');

  //canvas.style.background = "red"

  let x = 250
  let y = 250

  function drawCircle(x, y){
    ctx.moveTo(0,0)
    ctx.beginPath()
    ctx.arc(x,y,100,0,2*Math.PI);
    ctx.fillStyle="blue"
    ctx.fill()
    ctx.stroke();
  }

  drawCircle(x,y);

  ctx2.fillStyle="orange"
  ctx2.fillRect(300,300,150,150);


  canvas.addEventListener("click", function(ev){
    console.log("click");
    let cord = event_to_xy(canvas, ev);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.moveTo(cord.x, cord.y);
    drawCircle(cord.x,cord.y);
  });

  function event_to_xy(elem, evt) {
    let rect = elem.getBoundingClientRect();
    return {
        x : evt.clientX - rect.left,
        y : evt.clientY - rect.top
    };

}



});
