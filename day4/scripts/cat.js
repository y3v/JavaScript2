"use strict";

document.addEventListener("DOMContentLoaded", function(){

  let imageDog = new Image(200,200);
  imageDog.src = "dog.jpg";
  let tempImage = null;
  var isSelected = false;

  let canvas = document.getElementById("pad");
  let ctx = canvas.getContext('2d');

  console.log(canvas);
  console.log(ctx)

  imageDog.addEventListener("load", function(){

    ctx.drawImage(imageDog, 0, 0, 300 , 300);

    ctx.translate(600, 0);
    ctx.rotate(Math.PI/2)
    ctx.drawImage(imageDog, 0, 0, 300 , 300);

    ctx.translate(600, 0);
    ctx.rotate(Math.PI/2)
    ctx.drawImage(imageDog, 0, 0, 300, 300);

    ctx.translate(600, 0);
    ctx.rotate(Math.PI/2)
    ctx.drawImage(imageDog, 0, 0, 300 , 300);
  })

  function event_to_xy(elem, evt) {
    let rect = elem.getBoundingClientRect();
    return {
        x : evt.clientX - rect.left,
        y : evt.clientY - rect.top
    };
  }

  canvas.addEventListener("click",function(ev){
    //console.log("click")
    let cord = (event_to_xy(canvas, ev))

    if(!isSelected){
      tempImage = ctx.getImageData(cord.x, cord.y, 100, 100);
      tempImage = removeRed(tempImage);
      isSelected = true;
    }
    else{
      ctx.putImageData(tempImage, cord.x, cord.y)
      isSelected=false;
    }

  });

  function removeGreen(image){
    console.log(image.length)
    for (var i = 1; i < image.data.length; i+=4) {
      image.data[i] = 0;
      //console.log(image.data[i])
    }
    return image;
  }

  function removeBlue(image){
    console.log(image.length)
    for (var i = 2; i < image.data.length; i+=4) {
      image.data[i] = 0;
      //console.log(image.data[i])
    }
    return image;
  }

  function removeRed(image){
    console.log(image.length)
    for (var i = 0; i < image.data.length; i+=4) {
      image.data[i] = 0;
      //console.log(image.data[i])
    }
    return image;
  }

});
