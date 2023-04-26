import { getTrending } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([
    // {
    //   id: 0,
    //   poster_path: null,
    //   title: '',
    //   original_title: '',
    //   release_date: '',
    //   vote_average: 0,
    //   vote_count: 0,
    // },
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const arrayOfMovies = await getTrending().then(r => r.results);
        setMovies(arrayOfMovies);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {error === null ? (
        <>
          <h1>Trending today</h1>
          <MovieList movies={movies} />
        </>
      ) : (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
    </>
  );
};

export default Home;
