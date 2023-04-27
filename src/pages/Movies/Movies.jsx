import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { getSearchByKeyWord } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movie, setMovie] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('movieSearch')) ?? [
        {
          id: 0,
          poster_path: null,
          title: '',
          original_title: '',
          release_date: '',
          vote_average: 0,
          vote_count: 0,
        },
      ]
    );
  });
  const [pages, setPages] = useState(1);
  const [allInfo, setAllInfo] = useState({
    page: 3,
    results: [],
    total_results: 0,
    total_pages: 0,
  });
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    window.localStorage.setItem('movieSearch', JSON.stringify(movie));
  }, [movie]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (pages <= allInfo.page) {
          const arrayOfMovies = await getSearchByKeyWord(search, pages).then(
            r => r.results
          );
          setMovie(i => [...i, ...arrayOfMovies]);
          setPages(i => i + 1);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [pages, allInfo, search]);

  const cleanMovieSearch = () => {
    if (movieName === '' && movie.length >= 0) {
      window.localStorage.setItem(
        'movieSearch',
        JSON.stringify([
          {
            id: 0,
            poster_path: null,
            title: '',
            original_title: '',
            release_date: '',
            vote_average: 0,
            vote_count: 0,
          },
        ])
      );
    }
  };
  cleanMovieSearch();

  const reachTheEnd = () => {
    // const docHeight = document.documentElement.scrollHeight;
    // const currentPos = window.innerHeight + window.pageYOffset;

    // if (currentPos >= docHeight) {
    if (allInfo.total_results === movie.length) {
      // alert('The end!');
      setHasMore(false);
    }
    // }
  };
  reachTheEnd();

  const handleSubmit = event => {
    event.preventDefault();
    setSearch(movieName);

    async function fetchData() {
      try {
        const objectOfMovie = await getSearchByKeyWord(movieName, pages).then(
          r => r.results
        );
        setMovie(objectOfMovie);
        setPages(i => i + 1);
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
  const firstRender = movie.length === 1 && search === '' && movieName === '';
  const noResults = movie.length === 1 && search !== '';
  const goodResponse = movie.length > 1 && movieName !== '';

  const fetchMoreData = () => {
    async function getTotalPages() {
      try {
        const tot = await getSearchByKeyWord(search, pages).then(r => r);
        setAllInfo(tot);
      } catch (error) {
        setError(error);
      }
    }
    getTotalPages();
  };

  return (
    <>
      <SearchBox
        value={movieName}
        onChange={updateQueryString}
        onSubmit={handleSubmit}
      />
      {firstRender && <h3>Find movie that you want to watch above...</h3>}

      {goodResponse && (
        <InfiniteScroll
          dataLength={movie.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: 'center' }}>Loading... </h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all ;D</b>
            </p>
          }
        >
          <MovieList movies={movie} />
        </InfiniteScroll>
      )}

      {noResults && <h3>Sorry, there are no movies with that name...</h3>}

      {error !== null && (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
    </>
  );
};

export default Movies;
