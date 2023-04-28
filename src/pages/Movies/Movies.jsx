import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { GoUp } from './Movies.styled';
import { HiArrowUp } from 'react-icons/hi';
import { getSearchByKeyWord } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { scrollPos, scrollTop, resetScrollPos } from 'utils/scroll';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movie, setMovie] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('movieSearch')) ??
      Array.from({
        id: 0,
        poster_path: null,
        title: '',
        original_title: '',
        release_date: '',
        vote_average: 0,
        vote_count: 0,
      })
    );
  });
  // const [pages, setPages] = useState(1);
  const [allInfo, setAllInfo] = useState({
    page: 1,
    results: [],
    total_results: 0,
    total_pages: 0,
  });
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    window.localStorage.setItem('movieSearch', JSON.stringify(movie));
  }, [movie]);

  useEffect(() => {
    if (movie.length === 0) return;
    if (
      allInfo.page <= allInfo.total_pages / 10 &&
      allInfo.results.length !== 0
    ) {
      async function fetchData() {
        try {
          const arrayOfMovies = await getSearchByKeyWord(
            search,
            allInfo.page
          ).then(r => r.results);
          setMovie(i => [...i, ...arrayOfMovies]);
          setAllInfo(prevState => ({
            ...prevState,
            page: prevState.page + 1,
          }));
        } catch (error) {
          setError(error);
        }
      }
      fetchData();
    }
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allInfo, search, movie]);

  const cleanMovieSearch = () => {
    if (movieName === '' && movie.length >= 0 && search !== '') {
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
    setAllInfo({
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 0,
    });
    event.preventDefault();
    async function fetchData() {
      try {
        const objectOfMovie = await getSearchByKeyWord(
          movieName,
          allInfo.page
        ).then(r => r.results);
        setMovie(objectOfMovie);
        setSearch(movieName);
        setAllInfo(prevState => ({
          ...prevState,
          page: 2,
        }));
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
  const firstRender =
    (movie.length === 1 || movie.length === 0) &&
    search === '' &&
    movieName === '';
  const noResults = movie.length >= 0 && search !== '';
  const goodResponse = movie.length > 1 && movieName !== '';

  const fetchMoreData = () => {
    setHasMore(true);
    if (movie.length !== 0 && allInfo.page !== 1) {
      async function getTotalPages() {
        try {
          const tot = await getSearchByKeyWord(search, allInfo.page).then(
            r => r
          );
          setAllInfo(tot);
          setHasMore(false);
        } catch (error) {
          setError(error);
        }
      }
      getTotalPages();
    }
  };

  resetScrollPos(scrollPosition);

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
          scrollThreshold={1}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: 'center' }}>Loading... </h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all ;D</b>
            </p>
          }
        >
          <MovieList movies={movie} onClick={scrollPos} />
          {scrollPosition > 1000 && (
            <GoUp onClick={scrollTop}>
              UP <HiArrowUp size={24} />
            </GoUp>
          )}
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
