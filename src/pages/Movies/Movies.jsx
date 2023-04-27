import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { getSearchByKeyWord } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movie, setMovie] = useState(() => {
    return JSON.parse(window.localStorage.getItem('movieSearch')) ?? {};
  });

  useEffect(() => {
    window.localStorage.setItem('movieSearch', JSON.stringify(movie));
  }, [movie]);

  const cleanMovieSearch = () => {
    if (movieName === '' && movie.results.length > 0) {
      window.localStorage.setItem(
        'movieSearch',
        JSON.stringify({
          page: 0,
          results: [],
          total_results: 0,
          total_pages: 0,
        })
      );
    }
  };
  cleanMovieSearch();
  const handleSubmit = event => {
    event.preventDefault();
    setSearch(movieName);

    async function fetchData() {
      try {
        const objectOfMovie = await getSearchByKeyWord(movieName).then(r => r);
        setMovie(objectOfMovie);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  const firstRender = movie.results.length === 0 && search === '';
  const noResults = movie.results.length === 0 && search !== '';

  return (
    <>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      {firstRender && <h3>Find movie that you want to watch above...</h3>}
      {error === null ? (
        <p></p>
      ) : (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
      {noResults ? (
        <h3>Sorry, there are no movies with that name...</h3>
      ) : (
        <MovieList movies={movie.results} />
      )}
    </>
  );
};

export default Movies;
