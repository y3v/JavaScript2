'use strict';

document.addEventListener("DOMContentLoaded", function(){

  let tempImage = null

  let canvas = document.getElementById('canvas0')
  let ctx = canvas.getContext("2d")


  console.log(canvas)
  console.log(ctx)

  let buttonVert = document.getElementById('miroir_vert')
  let buttonSymmetry = document.getElementById('symetrie_centre')

  let headImage = new Image(canvas.width,canvas.height)
  headImage.src = "images/head.jpg"

  let selection = {x:450, y:320, w:210, h:220}

  headImage.addEventListener("load", function(){

    /*ctx.translate(canvas.width, 0)
    ctx.scale(-1,1)*/

    ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)

    ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)
    ctx.save()
  })

  buttonVert.addEventListener("click",function(){
    console.log("click")

    ctx.translate(canvas.width, 0)
    ctx.scale(-1,1)
    ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)
    //ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)
    //ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)

    ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)


    tempImage = ctx.getImageData(selection.x-110, selection.y, selection.w, selection.h)

    ctx.restore()
    ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)
    ctx.putImageData(tempImage, selection.x, selection.y)
    //ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)
    //ctx.save()
  })

  buttonSymmetry.addEventListener("click",function(){
    console.log("click")

    ctx.translate(canvas.width, canvas.height)
    ctx.rotate(Math.PI)
    ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)
    //ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)
    //ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)

    ctx.strokeRect(selection.x, selection.y, selection.w, selection.h)


    tempImage = ctx.getImageData(selection.x-110, selection.y-60, selection.w, selection.h)

    ctx.restore()
    ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)
    ctx.putImageData(tempImage, selection.x, selection.y)
    //ctx.drawImage(headImage, 0, 0, canvas.width, canvas.height)
    ctx.save()
  })



});
