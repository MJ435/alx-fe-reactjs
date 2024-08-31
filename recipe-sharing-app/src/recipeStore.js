import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],


  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    // Example logic for recommendations based on favorite recipes
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
  searchTerm: '',
  setSearchTerm: (term) => set(state => {
    set({ searchTerm: term });
    state.filterRecipes();
  }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  addRecipe: (newRecipe) => set(state => {
    set({ recipes: [...state.recipes, newRecipe] });
    state.filterRecipes();
  }),
  deleteRecipe: (id) => set(state => {
    set({ recipes: state.recipes.filter(recipe => recipe.id !== id) });
    state.filterRecipes();
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    set({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    });
    state.filterRecipes();
  }),
}));

export { useRecipeStore };

