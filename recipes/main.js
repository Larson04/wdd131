import {recipes} from './recipes.mjs';

function randomNumber()
{
    return Math.floor(Math.random() * 8);
}

function randomRecipe()
{
    return recipes[randomNumber()];
}

function recipeTemplate(recipe) 
{
	return 
    `<div class="recipe">
        <div class="search-card">
            <img src="${recipe.image}">
            <div class="card-text">
                <p class ="tag">${recipe.tags.map(tag => `<li>${tag}</li>`).join('')}</p>            
                <h2>${recipe.title}</h2>
                <p class="rating">${recipe.rating}</p>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </div>
    </div>
    <div class="recipe-details">
        <p>Author: ${recipe.author}</p>
        <a href="${recipe.url}">View Recipe</a>
        <p class="cook-time">Cook time: ${recipe.cookTime}</p>
            <p>Yields: ${recipe.recipeYield}</p>
            <p>Date Published: ${recipe.datePublished}</p>
            <h4>Ingredients:</h4>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h4>Instructions:</h4>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
    </div>`;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	html += `</span>`
	// return the html string
	return html
}

// const recipe = randomRecipe(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipes) {
	// get the element we will output the recipes into
    let output = document.querySelector('.whole-recipe');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    output.innerHTML = recipes.map(recipeTemplate).join('');
	// Set the HTML strings as the innerHTML of our output element.
    
}

function innit() {
  // get a random recipe
  const recipe = randomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
innit();

const searchButton = document.querySelector('button').addEventListener('click',searchHandler());
function filter(query) {
    const filtered = recipes.filter(filterFunction)
    // sort by name
    const sorted = filtered.sort(sortFunction)
        return sorted

}

function searchHandler() 
{
    e.preventDefault();
    const searchInput = document.querySelector('#search').value;

    renderRecipes(filter(searchInput));
    
    renderRecipes(recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput.toLowerCase())));
}
