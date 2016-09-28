var Pantry = function() {
	this.strong = [];
	this.salty = [];
	this.sweet = [];
	this.fruity = [];
}

var Ingredient = function(name, type) {
	this.name = name;
	this.type = type;
}

var Questions = function() {
	this.question = [];
}

var Drink = function() {
	this.strong = [];
	this.salty = [];
	this.sweet = [];
	this.fruity = [];
}

var userChoiceArray = [];

var userChoices = function(strong, sweet, salty, fruity) {
	this.strong = userChoiceArray[0];
	this.sweet = userChoiceArray[1];
	this.salty = userChoiceArray[2];
	this.fruity = userChoiceArray[3];
}

Pantry.prototype.add = function(ingredient) {
	this[ingredient.name].push(ingredient);
}

Drink.prototype.add = function(ingredient) {
	this[ingredient.name].push(ingredient);
}

var pantry = {
	strong: ["Tequila", "Rum", "Bourbon"],
	salty: ["Salt Ring", "Olive", "BACON!"],
	sweet: ["Coke", "Red Bull", "Cranberry Juice"],
	fruity: ["Cherry on Top", "Orange Peel", "Lime slice"],
};

var questions = {
	strong: ["Let's get started. Do ya like your drinks strong?"],
	salty: ["How about salty?"],
	sweet: ["Want some sweetness with that?"],
	fruity: ["What about a fruity finish to top it off?"],
};

var i1 = new Ingredient('strong', 'Tequila');
var i2 = new Ingredient('salty', 'Salt Ring');
var i3 = new Ingredient('sweet', 'Coke');
var i4 = new Ingredient('fruity', 'Cherry on Top');
var i5 = new Ingredient('strong', 'Rum');
var i6 = new Ingredient('salty', 'Olive');
var i7 = new Ingredient('sweet', 'Red Bull');
var i8 = new Ingredient('fruity', 'Orange Peel');
var i9 = new Ingredient('strong', 'Bourbon');
var i10 = new Ingredient('salty', 'BACON!');
var i11 = new Ingredient('sweet', 'Cranberry Juice');
var i12 = new Ingredient('fruity', 'Lime slice');

var pantry = new Pantry();
pantry.add(i1);
pantry.add(i2);
pantry.add(i3);
pantry.add(i4);
pantry.add(i5);
pantry.add(i6);
pantry.add(i7);
pantry.add(i8);
pantry.add(i9);
pantry.add(i10);
pantry.add(i11);
pantry.add(i12);

var randomStrongIngredient = pantry.strong[Math.floor(Math.random() * pantry.strong.length)];
var randomSaltyIngredient = pantry.salty[Math.floor(Math.random() * pantry.salty.length)];
var randomSweetIngredient = pantry.sweet[Math.floor(Math.random() * pantry.sweet.length)];
var randomFruityIngredient = pantry.fruity[Math.floor(Math.random() * pantry.fruity.length)];

var drink = new Drink();
drink.add(randomStrongIngredient);
drink.add(randomSaltyIngredient);
drink.add(randomSweetIngredient);
drink.add(randomFruityIngredient);

$(document).ready(function() {

	$('form').submit(function(e) {
		e.preventDefault();
		userChoiceArray = [];
		$("select").each(function() {
			if ($(this).val() == "yes") {
				userChoiceArray.push(true);
			}
			else {
				userChoiceArray.push(false);
			}
		})
		console.log(userChoiceArray);
	})
});

