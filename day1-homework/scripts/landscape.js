"use strict";

class Relief{
  constructor(size){
    this.size = size;
  }
  output(){
    throw new Error("Cannot call abstract method!!!")
  }
}

class Mountain extends Relief{
  constructor(size){
    super(size)
    //this.size = size
  }
  output(){
    let out = "/"
    for (var i = 0; i < this.size; i++) {
      out += "`";
    }
    out +="\\"
    return out;
  }
}

class Plain extends Relief{
  constructor(size){
    super(size)
  }
  output(){
    let out = ""
    for (var i = 0; i < this.size; i++) {
      out += "_";
    }
    return out;
  }

}

let mountain = new Mountain(2);
let plain = new Plain(3)
let mountain2 = new Mountain(4);
console.log(mountain.output() + plain.output() + mountain2.output());
