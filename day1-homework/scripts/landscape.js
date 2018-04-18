"use strict";

let Relief = function(size = 1) {
  this.size = size;
  this.output = function(){
    throw new Error("Cannot call abstract method!!")
  }

}

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

/*let r = new Relief(3);
console.log(r.output());*/

let Mountain = function(size){
  Relief.call(this, size);
  this.output = function(){
    let out = "/"
    for (let i = 0; i < size; i++) {
      out += "`";
    }
    out += '\\';
    return out;
  }
}

let Plain = function(size){
  Relief.call(this,size);
  this.output = () => {
    let out = ""
    for (let i = 0; i < size; i++) {
      out += "_"
    }
    return out
  }
}

inherits(Mountain,Relief);
inherits(Plain, Relief)

let mountain = new Mountain(2);
let plain = new Plain(3)
let mountain2 = new Mountain(4);
console.log(mountain.output() + plain.output() + mountain2.output());
