const recipes = [
  // Breakfast (already done)
  {
    name: "Classic Pancakes",
    image: "pancakes.png",
    category: "breakfast",
    time: "20 mins",
    ingredients: [
      "1½ cups all-purpose flour",
      "3½ tsp baking powder",
      "1 tsp salt",
      "1 tbsp sugar",
      "1¼ cups milk",
      "1 large egg",
      "3 tbsp melted butter",
      "1 tsp vanilla extract (optional)"
    ],
    steps: [
      "In a bowl, whisk flour, baking powder, salt, and sugar.",
      "In another bowl, beat egg; stir in milk, butter, and vanilla.",
      "Pour wet into dry ingredients; mix until just combined.",
      "Heat skillet over medium and grease lightly.",
      "Pour ¼ cup batter; cook 2–3 min until bubbles form, flip, cook 1–2 min more.",
      "Serve warm with toppings of choice."
    ]
  },
  {
    name: "Veggie Omelette",
    image: "omelette.png",
    category: "breakfast",
    time: "15 mins",
    ingredients: [
      "2 large eggs",
      "2 tbsp milk",
      "Salt & pepper to taste",
      "1 tbsp butter",
      "¼ cup diced bell peppers",
      "2 tbsp chopped onion",
      "2 tbsp shredded cheese"
    ],
    steps: [
      "Beat eggs with milk, salt, and pepper in a bowl.",
      "Heat butter in a nonstick pan over medium heat.",
      "Sauté peppers and onion 2–3 min until soft; remove and set aside.",
      "Pour egg mixture into pan, let set 1 min.",
      "Sprinkle veggies and cheese on one half; fold over.",
      "Cook another minute, slide onto plate, and serve."
    ]
  },

  // Lunch
  {
    name: "Refreshing Salad",
    image: "salad.png",
    category: "lunch",
    time: "15 mins",
    ingredients: [
      "2 cups mixed greens",
      "1 cup cherry tomatoes, halved",
      "½ cucumber, sliced",
      "¼ cup red onion, thinly sliced",
      "¼ cup feta cheese, crumbled",
      "2 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "Salt and pepper to taste"
    ],
    steps: [
      "In a large bowl, combine mixed greens, tomatoes, cucumber, and red onion.",
      "In a small bowl, whisk olive oil, balsamic vinegar, salt, and pepper.",
      "Pour dressing over salad and toss gently.",
      "Sprinkle feta cheese on top.",
      "Serve immediately."
    ]
  },
  {
    name: "Grilled Chicken",
    image: "chicken.png",
    category: "lunch",
    time: "25 mins",
    ingredients: [
      "2 chicken breasts",
      "2 tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "Salt and pepper to taste",
      "1 lemon, sliced"
    ],
    steps: [
      "Preheat grill to medium-high heat.",
      "Rub chicken breasts with olive oil, garlic powder, paprika, salt, and pepper.",
      "Grill chicken 6-7 minutes per side until cooked through.",
      "Squeeze lemon juice over chicken before serving.",
      "Serve hot with side salad or veggies."
    ]
  },

  // Dinner
  {
    name: "Cheesy Pizza",
    image: "pizza.png",
    category: "dinner",
    time: "30 mins",
    ingredients: [
      "1 pizza dough",
      "½ cup tomato sauce",
      "1½ cups shredded mozzarella cheese",
      "½ cup sliced pepperoni (optional)",
      "1 tsp dried oregano",
      "1 tbsp olive oil"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough on a floured surface.",
      "Spread tomato sauce evenly over dough.",
      "Sprinkle mozzarella cheese and add pepperoni slices.",
      "Sprinkle oregano and drizzle olive oil on top.",
      "Bake for 12-15 minutes until crust is golden and cheese bubbly.",
      "Slice and serve warm."
    ]
  },
  {
    name: "Pasta Delight",
    image: "pasta.png",
    category: "dinner",
    time: "20 mins",
    ingredients: [
      "200g pasta (penne or spaghetti)",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 cup cherry tomatoes, halved",
      "½ cup fresh basil leaves",
      "½ cup grated Parmesan cheese",
      "Salt and pepper to taste"
    ],
    steps: [
      "Cook pasta according to package instructions; drain and set aside.",
      "Heat olive oil in a pan over medium heat.",
      "Add garlic and sauté until fragrant, about 1 min.",
      "Add cherry tomatoes and cook 3-4 mins until softened.",
      "Add cooked pasta and basil leaves; toss to combine.",
      "Season with salt and pepper.",
      "Sprinkle Parmesan cheese before serving."
    ]
  }
];

// Your displayRecipes and filterRecipes functions remain the same

// Rendering function
function displayRecipes(list) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = '';
  
  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p><strong>Time:</strong> ${recipe.time}</p>
      <p><strong>Category:</strong> ${recipe.category}</p>
      <details>
        <summary>Ingredients & Instructions</summary>
        <h4>Ingredients:</h4>
        <ul>
          ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
        <h4>How to Make:</h4>
        <ol>
          ${recipe.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </details>
    `;
    container.appendChild(card);
  });
}
function displayRecipes(list) {
  const container = document.getElementById('recipe-container');
  container.innerHTML = '';
  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p><strong>Time:</strong> ${recipe.time}</p>
      <details>
        <summary>Ingredients & Instructions</summary>
        <h4>Ingredients:</h4>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
        <h4>Steps:</h4>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      </details>
    `;
    container.appendChild(card);
  });
}

function filterRecipes(category) {
  displayRecipes(category === 'all' 
    ? recipes 
    : recipes.filter(r => r.category === category));
}

window.onload = () => displayRecipes(recipes);

