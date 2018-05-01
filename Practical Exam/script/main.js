"use strict"

document.addEventListener("DOMContentLoaded", function(){

  const TEXT_STYLE = "25px Georgia"
  const INITIAL_TEXT_X = 350;
  const INITIAL_TEXT_Y = 150;


  let canvas = document.getElementById("canvas0");
  let ctx = canvas.getContext('2d');

  //text object which will be used later
  let text;
  let textX = INITIAL_TEXT_X;
  let textY = INITIAL_TEXT_Y;
  let textColor;

  //For storage
  let storage;
  let selectedImage;
  let initials;

  let image1 = new Image(canvas.width,canvas.length);
  let image2 = new Image(canvas.width,canvas.length);
  let image3 = new Image(canvas.width,canvas.length);

  let images = [image1, image2, image3];

  image1.src = "image/bckg_anime.jpg"
  image2.src = "image/bckg_fleurs.png";
  image3.src = "image/bckg_naif.png"

  console.log(canvas);
  console.log(ctx)

  storage = window.localStorage;
  console.log(storage)

  let getAllfromStorage = function(ctx, canvas, images, text, selectedImage, storage, textColor){
    console.log("Checking Storage")
    text = storage.text;
    textColor = storage.textColor;
    selectedImage = storage.selectedImage;
    textX = storage.textX,
    textY = storage.textY;


    console.log("-----FROM STORAGE-----")
    console.log(text);
    console.log(textColor);
    console.log(selectedImage);

    return {"text":text, "textColor":textColor, "selectedImage":selectedImage, "textX":textX, "textY":textY};
  }


  initials = getAllfromStorage(ctx, canvas, images, text, selectedImage, storage, textColor)


  //once the first picture is loaded, we can start putting it into the canvas
  //and add listeners for other functionalities
  image1.addEventListener("load", function(){
    //clear the canvas
    ctx.drawImage(image1, 0, 0, canvas.width , canvas.height);

    initialLoad();

    //check which radio button is checked
    $('input[type=radio][name=bckg_img]').change(e=>{

      checkWhichImageIsChecked()

      if (text != null){
        console.log("TEXT")
        ctx.font = TEXT_STYLE
        ctx.fillText(text,textX,textY);
      }

    });

    //event listerner for value change in the textarea
    $('#text_content').on("change", ev=>{
      changeText()
    })

    //same thing but enter key
    $('#text_content').keypress(function (e) {
     var key = e.which;
     if(key == 13)
      {
        changeText()
      }
    });

    //click event for text
    $('#canvas0').on('click', ev =>{
      let coord = event_to_xy(canvas, ev)
      console.log(coord)
      textX = coord.x;
      textY = coord.y;
      changeText()
    })

    //on color change event
    $('#text_color').on('input', ev=>{
      textColor = $('#text_color').val();
      console.log(textColor)
      changeText()
    })


    let saveToStorage = function(){
      storage.text = text;
      storage.textX = textX;
      storage.textY = textY;
      if (textColor != null){
        storage.textColor = textColor;
      }
      else{
        storage.textColor = "black";
      }
      storage.selectedImage = selectedImage;

      console.log("-----TO STORAGE-----")
      console.log(text);
      console.log(textColor);
      console.log(selectedImage);

      sleep(4000)
    }

    $(window).on("unload", function(e) {
        saveToStorage()
        console.log("this will be triggered");
    });


  })

  //FUNCTION DECLARATIONS
  let checkWhichImageIsChecked = function(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    if ($('#bckg_img_1').is(':checked')){
      //console.log("IMAGE 1")
      ctx.drawImage(images[0], 0, 0, canvas.width , canvas.height);
      selectedImage = 1;
    }
    else if($('#bckg_img_2').is(':checked')){
      //console.log("IMAGE 2")
      ctx.drawImage(images[1], 0, 0, canvas.width , canvas.height);
      selectedImage = 2;
    }
    else if($('#bckg_img_3').is(':checked')){
      //console.log("IMAGE 3")
      ctx.drawImage(images[2], 0, 0, canvas.width , canvas.height);
      selectedImage = 3;
    }
    else{
      //console.log("IMAGE 1")
      ctx.drawImage(images[0], 0, 0, canvas.width , canvas.height);
      selectedImage = 1;
    }
    console.log(selectedImage)
  }

  let changeText = function(){
    //ctx.restore()
    text = $('#text_content').val();
    console.log(text)
    ctx.font = TEXT_STYLE
    checkWhichImageIsChecked();

    if (textColor != null){
      ctx.fillStyle = textColor;
    }
    else{
      ctx.fillStyle = "black";
    }

    ctx.fillText(text,textX,textY);
  }

  let initialLoad = function(){

    ctx.clearRect(0,0,canvas.width, canvas.height)

    text = initials.text
    textColor = initials.textColor
    selectedImage = initials.selectedImage
    textX = initials.textX
    textY =initials.textY

    if (textX == "undefined"){
      console.log("TEXT X is undefined")
      textX = INITIAL_TEXT_X;
    }

    if (textY == "undefined"){
      textY = INITIAL_TEXT_Y;
    }

    if (initials.selectedImage == 1){
      //console.log("IMAGE 1")
      ctx.drawImage(images[0], 0, 0, canvas.width , canvas.height);
      selectedImage = 1;
    }
    else if(initials.selectedImage == 2){
      //console.log("IMAGE 2")
      ctx.drawImage(images[1], 0, 0, canvas.width , canvas.height);
      selectedImage = 2;
    }
    else if(initials.selectedImage == 3){
      //console.log("IMAGE 3")
      ctx.drawImage(images[2], 0, 0, canvas.width , canvas.height);
      selectedImage = 3;
    }
    else{
      //console.log("IMAGE 1")
      ctx.drawImage(images[0], 0, 0, canvas.width , canvas.height);
      selectedImage = 1;
    }

    if (initials.text != "undefined"){
        console.log("RE LOADING TEXT")
        ctx.font = TEXT_STYLE
        if (initials.textColor != null){
          ctx.fillStyle = initials.textColor;
        }
        else{
          ctx.fillStyle = "black";
        }
        ctx.fillText(initials.text,initials.textX,initials.textY);
    }

  }




});



function event_to_xy(elem, evt) {
  let rect = elem.getBoundingClientRect();
  return {
      x : evt.clientX - rect.left,
      y : evt.clientY - rect.top
  };
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
