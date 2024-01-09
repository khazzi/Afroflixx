import {useEffect, useState} from 'react';
import './App.css';
import {BiSearch} from 'react-icons/bi'
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=e6776f3c'
function App() {
 const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
 }

 const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState('')


 useEffect(() => {
  searchMovies('spiderman')
 }, [])
  return (
    <div className='app'>
      <h1>Afroflixx</h1>
      <div className='search'>
        <input
        placeholder='search for movies'
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      <BiSearch
      onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))
            }
          
  </div>
        ) : (
          <div className='empty'>
            <h1>No movies found</h1>
            </div>
        )
      }
    </div>
  );
}

export default App;
