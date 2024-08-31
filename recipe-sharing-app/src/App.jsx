import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';

const App = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        
        <SearchBar />
        <AddRecipeForm />
        
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/recipe/:id" component={({ match }) => (
            <RecipeDetails recipeId={parseInt(match.params.id, 10)} />
          )} />
        </Switch>

        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
};

export default App;

