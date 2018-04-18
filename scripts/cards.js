"use strict"

let two = Symbol("2");
let three = Symbol("3");
let four = Symbol("4");
let five = Symbol("5");
let six = Symbol("6");
let seven = Symbol("7");
let eight = Symbol("8");
let nine = Symbol("9");
let ten = Symbol("10");
let jack = Symbol("J");
let queen = Symbol("Q");
let king = Symbol("K");
let ace = Symbol("A");

let spades = Symbol("Spade");
let clubs = Symbol("club");
let diamonds = Symbol("diamond");
let hearts = Symbol("heart")

let Card = function(value, suit){
  this.value = value;
  this.suit = suit;
}

let card1 = new Card(ace, hearts);
let card2 = new Card(queen, diamonds);
let card3 = new Card(jack, clubs);
let card4 = new Card(king, spades)
let card5 = new Card(ace, diamonds);

let set = new Set([card1, card2, card3, card4]);

console.log (`Size of hand is ${set.size}`)
for (let card of set) {
  console.log(card.suit.toString() + " / " + card.value.toString());
}

console.log(`Does the set contain the queen of diamonds? --> ${set.has(card2)}`);
console.log(`Does the set contain the ace of diamonds? --> ${set.has(card5)}`);

set.add(card5);
console.log (`Size of hand is ${set.size}`)
for (let card of set) {
  console.log(card.suit.toString() + " / " + card.value.toString());
}
console.log(`Does the set contain the queen of diamonds? --> ${set.has(card2)}`);
console.log(`Does the set contain the ace of diamonds? --> ${set.has(card5)}`);
