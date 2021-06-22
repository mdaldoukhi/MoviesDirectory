/* Styles */
import './App.css';
import { Title } from './Styles';
/* Componenets */
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
/* Data */
import movies from './movies';
/* Libraries */
import { Switch, Route } from 'react-router'


function App() {
  return (
    <div>
      <Title>Welcome To The Directory</Title>
      <Switch>
        <Route path="/movies/:movieSlug">
          <MovieDetails  movies={movies} />
        </Route>
        <Route path="/movies">
          <MoviesList movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
