document.addEventListener("DOMContentLoaded", function(){
  //$(function(){}) JQUERY
  //DOM LOADED

  //width vs naturalWidth -- css width vs original width


});

window.addEventListener('beforeunload', function(ev){
  //Just before restart
  //Gives an opportunity to save some sort of data

  let confirmationMesssage = "Do you really want to restart"
  (ev || window.event).returnValue = confirmationMesssage; //Gecko, Trident, Chrome

  return confirmationMesssage;

});
