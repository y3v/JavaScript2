"use strict"

document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('canvas0');
  console.log(canvas);
  let ctx = canvas.getContext('2d');
  console.log(ctx);

  canvas.style.background = "red"

  ctx.fillRect(20,20,120,120);
});
