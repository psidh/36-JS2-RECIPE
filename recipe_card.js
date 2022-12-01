var recipeTitle = "Types of Pudding";
var recipeServings = 2;
var recipeIngredients = ["Maida", "Water"];

var recipe = {
    recipeTitle : "Types of Pudding",
    recipeServings : 2,
    recipeIngredients : ["Maida", "Water"],

};

fill(26, 26, 26);
textSize(20);
text(recipe.recipeTitle, 10, 23);
text("Serves: " + recipe.recipeServings, 10, 55);
text("Ingredients: " + recipe.recipeIngredients, 10, 85);