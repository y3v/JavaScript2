'use strict';

const PAD_SIZE = {width:300, height:300};
const PAD_X_COUNT = 3;
const PAD_Y_COUNT = 3;
const PAD_HOTSPOT_RADIUS = 15;

document.addEventListener("DOMContentLoaded",function(){
  let canvas = document.getElementById('pad');
  console.log(canvas);
  let ctx = canvas.getContext('2d');
  console.log(ctx);

  ctx.arc(canvas.width/5,canvas.height/3,canvas.width/8,0,2*Math.PI);
  ctx.strokeStyle="#0000ff"
  ctx.lineWidth=15;
  ctx.stroke();

  ctx.beginPath()
  ctx.arc(canvas.width/3,canvas.height/2,canvas.width/8,0,2*Math.PI);
  ctx.strokeStyle="yellow"
  ctx.lineWidth=15;
  ctx.stroke();

  ctx.beginPath()
  ctx.arc(canvas.width/2,canvas.height/3,canvas.width/8,0,2*Math.PI);
  ctx.strokeStyle="black"
  ctx.lineWidth=15;
  ctx.stroke();

  ctx.beginPath()
  ctx.arc(canvas.width/1.5,canvas.height/2,canvas.width/8,0,2*Math.PI);
  ctx.strokeStyle="green"
  ctx.lineWidth=15;
  ctx.stroke();

  ctx.beginPath()
  ctx.arc(canvas.width/1.25,canvas.height/3,canvas.width/8,0,2*Math.PI);
  ctx.strokeStyle="red"
  ctx.lineWidth=15;
  ctx.stroke();
});
