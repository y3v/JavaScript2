/**
 * ISI-P87 Canvas basics / Pixels manipulation
 * - Using ctx.getImageData() and ctx.putImageData()
 * - Parsing the byte array data 4 bytes by 4 bytes
 * - Putting the image back to canvas is NOT on top of existing content but in replacement of the whole canvas content
 * - You can filter and change as you like (pixels are yours)
 */


'use strict';

/**
 * Returns a kind of brightness for a given pixel RGB values (a number that indicates how bright the pixel is)
 * @param r,g,b : RGB component of pixel
 * @returns {number}
 */
function calc_brightness(r,g,b) {
    return 0.34 * r + 0.5 * g + 0.16 * b;
}


document.addEventListener('DOMContentLoaded', function(){

    let revertImage = null
    let removeImage = null

    console.log('DOM loaded');
    let canvas = document.getElementById('canvas0');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = 'images/tc2.jpg';
    // La zone rectangulaire (selection) des pixels à modifier
    let backup = null;
    img.addEventListener('load', function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img ,0, 0);
        // Put a black rectangle border around (1px outside) the selection area
        let selection = {x:150,y:150,width:650, height:250};
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.strokeRect(selection.x-1, selection.y-1, selection.width+2, selection.height+2);

        revertImage = ctx.getImageData(selection.x-1, selection.y-1, selection.width+2, selection.height+2)
    });

    document.getElementById('revert').addEventListener('click', function(){
        console.log("Restore");
        // Put back the saved selection
        ctx.putImageData(revertImage, 149,149);
    });

    document.getElementById('remove_components').addEventListener('click', function(){
        console.log("remove_components");
        // Extraction of pixels data
        let offsets_to_remove = Array.from(document.querySelectorAll('.controls input:checked')).map(elem=>Number(elem.dataset.color_offset));
        let offsets_to_keep = [0,1,2,3,].filter(o => ! offsets_to_remove.includes(o));
        console.log(`offsets_to_remove: ${offsets_to_remove}\noffsets_to_keep: ${offsets_to_keep}`);

        let selection = {x:150,y:150,width:650, height:250};
        removeImage = ctx.getImageData(selection.x-1, selection.y-1, selection.width+2, selection.height+2)

        if (offsets_to_remove.includes(0)){
          console.log("Removing Red");
          for (var i = 0; i < removeImage.data.length; i+=4) {
            removeImage.data[i] = 0 ;   }
        }

        if (offsets_to_remove.includes(1)){
          console.log("Removing Red");
          for (var i = 1; i < removeImage.data.length; i+=4) {
            removeImage.data[i] = 0 ;   }
        }

        if (offsets_to_remove.includes(2)){
          console.log("Removing Red");
          for (var i = 2; i < removeImage.data.length; i+=4) {
            removeImage.data[i] = 0 ;   }
        }

        ctx.putImageData(removeImage, 149,149);
    });

    document.getElementById('grayscale').addEventListener('click', function(){
        console.log("Grayscale");
        // Change to greyscale in the selection rectangle
        let selection = {x:150,y:150,width:650, height:250};
        let greyImage = ctx.getImageData(selection.x-1, selection.y-1, selection.width+2, selection.height+2)

        for (var i = 0; i < greyImage.data.length; i+=4) {
          let brightness = calc_brightness(greyImage.data[i],greyImage.data[i+1],greyImage.data[i+2]);
          greyImage.data[i] = brightness;
          greyImage.data[i+1] = brightness;
          greyImage.data[i+2] = brightness;
        }

        ctx.putImageData(greyImage, 149,149);
    });

    document.getElementById('to_alpha').addEventListener('click', function(){
        console.log("To alpha");

        let offsets_to_remove = Array.from(document.querySelectorAll('.controls input:checked')).map(elem=>Number(elem.dataset.color_offset));
        let offsets_to_keep = [0,1,2,3,].filter(o => ! offsets_to_remove.includes(o));

        let selection = {x:150,y:150,width:650, height:250};
        removeImage = ctx.getImageData(selection.x-1, selection.y-1, selection.width+2, selection.height+2)

        if (offsets_to_remove.includes(0)){
          console.log("Removing Red");
          for (var i = 0; i < removeImage.data.length; i+=4) {
            if (removeImage.data[i] > 200){
              removeImage.data[i+3] = 0
            } ;
          }
        }

        if (offsets_to_remove.includes(1)){
          console.log("Removing Red");
          for (var i = 1; i < removeImage.data.length; i+=4) {
            if (removeImage.data[i] > 200){
              removeImage.data[i+2] = 0
            } ;
          }
        }

        if (offsets_to_remove.includes(2)){
          console.log("Removing Red");
          for (var i = 2; i < removeImage.data.length; i+=4) {
            if (removeImage.data[i] > 200){
              removeImage.data[i+1] = 0
            } ;
          }
        }

        ctx.putImageData(removeImage, 149,149);
    });
});
