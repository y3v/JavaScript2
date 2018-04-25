"use strict";

const WORKER_TO_MAIN_STYLE= 'color:green;font-size:larger;'
const WORKER_TO_MAIN_STYLE2= 'color:red;font-size:larger;'
time = "11:12";

//Instantiate worker object (start of the code)

let worker = new Worker("script/worker.js");
console.log(`Worker ${NAME} started`);

//Listener for message recieved from worker
worker.addEventListener('message', function(ev){
  console.log(`%cMessage recieved from worker: ${ev.data}`, WORKER_TO_MAIN_STYLE)
});

//Listener for error recieved from worker
worker.addEventListener('error', function(ev){
  console.log(`%cError recieved from worker: ${ev.data}`, WORKER_TO_MAIN_STYLE2)
});

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('send').addEventListener("click", function(){
    let data = {somedata: "Eyyyy"}
    worker.postMessage(data);
  })

  document.getElementById('stop').addEventListener("click", function(){
    worker.terminate()
    worker = null;
  })
})
