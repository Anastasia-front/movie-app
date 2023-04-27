import { getTrending } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [movies, setMovies] = useState([
    {
      id: 0,
      poster_path: null,
      title: '',
      original_title: '',
      release_date: '',
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const [pages, setPages] = useState(2);
  const [totalPages, setTotalPages] = useState(3);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const arrayOfMovies = await getTrending(1).then(r => r.results);
        setMovies(arrayOfMovies);
        setPages(i => i + 1);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    // const handleScroll = () => {
    //   const position = window.pageYOffset;
    //   setScrollPosition(position);
    // };

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        if (pages <= totalPages / 5) {
          const arrayOfMovies = await getTrending(pages).then(r => r.results);
          setMovies(i => [...i, ...arrayOfMovies]);
          setPages(i => i + 1);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [pages, totalPages]);

  const fetchMoreData = () => {
    async function getTotalPages() {
      try {
        const objOfMovies = await getTrending(totalPages).then(
          r => r.total_pages
        );
        setTotalPages(objOfMovies);
      } catch (error) {
        setError(error);
      }
    }
    getTotalPages();
  };

  const reachTheEnd = () => {
    if (totalPages === movies.length) {
      setHasMore(false);
    }
  };
  reachTheEnd();

  return (
    <>
      {error === null ? (
        <>
          <h1>Trending today</h1>
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all ;D</b>
              </p>
            }
          >
            <MovieList movies={movies} />
          </InfiniteScroll>
        </>
      ) : (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
    </>
  );
};

export default Home;
