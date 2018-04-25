"use strict";
importScripts('defines.js')

const WORKER_STYLE= 'color:blue;font-size:larger;'
const WORKER_STYLE2= "color:Orange;font-size:30px; text-decoration:underline;"

time = "10:25";
let count = 0;//a counter in the Worker

console.log(`%cStartOf worker ${NAME}, time=${time}`, WORKER_STYLE)

self.addEventListener("message", function(ev){
  let msgContent = ev.data.somedata;
  console.log(`%cWorker recived message with data (${msgContent})`, WORKER_STYLE)
})

//Periodically send messages to the main.js
self.setInterval(function(){
  count++;
  self.postMessage(`count = ${count}`)
}, 1000)

self.setInterval(function(){
  throw "Error is worker"
}, 3000)

self.setTimeout(function(){
  self.close()
  console.log(`%cWORKER TOO LAZY TO CONTINUE`, WORKER_STYLE2)
},10000)
