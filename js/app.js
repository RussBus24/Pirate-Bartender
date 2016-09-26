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

$(document).ready(function() {
	var Bartender = function(strong, salty, sweet, fruity) {
		this.strong = strong;
		this.salty = salty;
		this.sweet = sweet;
		this.fruity = fruity;
	};

	Bartender.prototype.createDrink = function() {

	}

	var userPreferences = [];

	var Ingredients = function(type, name) {
		this.name = name;
		this.type = type;
	}

});

$('#submitButton').click(function() {

})