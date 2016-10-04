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

var RandomIngredient = function() {
	this.randomArray = [];
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

Drink.prototype.display = function() {

	$('.results').html('<p>May I suggest the following ingredients:</p><p> ' + this.strong.type + '</p><p> ' + this.salty[0].type + '</p> ');

	/*this.strong.forEach(function(pantry) {

		$('.results').html('<p> ' + this.strong + ' </p>');
		var elem = $('<h2>');

	console.log();

	});

	/*drink.salty.forEach(function() {

	});

	drink.sweet.forEach(function() {

	});

	drink.fruity.forEach(function() {

	});*/

};

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
		checkArray();
	});

	function checkArray() {

		var drink = new Drink();

		var randomStrongIngredient = pantry.strong[Math.floor(Math.random() * pantry.strong.length)];
		var randomSaltyIngredient = pantry.salty[Math.floor(Math.random() * pantry.salty.length)];
		var randomSweetIngredient = pantry.sweet[Math.floor(Math.random() * pantry.sweet.length)];
		var randomFruityIngredient = pantry.fruity[Math.floor(Math.random() * pantry.fruity.length)];

		console.log(userChoiceArray[0]);
		if (userChoiceArray[0] === true) {
			drink.add(randomStrongIngredient);
			console.log(randomStrongIngredient);
		}
		if (userChoiceArray[1] === true) {
			drink.add(randomSaltyIngredient);
			console.log(randomSaltyIngredient);
		}
		if (userChoiceArray[2] === true) {
			drink.add(randomSweetIngredient);
			console.log(randomSweetIngredient);
		}
		if (userChoiceArray[3] === true) {
			drink.add(randomFruityIngredient);
			console.log(randomFruityIngredient);
		}

		drink.display();
	};
});

