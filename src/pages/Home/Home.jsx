import { getTrending, STATUS } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import { GoUp } from 'pages/Movies/Movies.styled';
import { HiArrowUp } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { scrollPos, scrollTop, resetScrollPos } from 'utils/scroll';

const Home = () => {
  const [status, setStatus] = useState(STATUS.idle);
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

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setStatus(STATUS.pending);
    async function fetchData() {
      try {
        const arrayOfMovies = await getTrending(1).then(r => r.results);
        setMovies(arrayOfMovies);
        setPages(i => i + 1);
        setStatus(STATUS.resolved);
      } catch (error) {
        setError(error);
        setStatus(STATUS.rejected);
      }
    }
    fetchData();
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (pages <= totalPages / 10) {
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

  resetScrollPos(scrollPosition);

  return (
    <>
      {status === STATUS.resolved && (
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
            <MovieList movies={movies} onClick={scrollPos} />
            {scrollPosition > 1000 && (
              <GoUp onClick={scrollTop}>
                UP <HiArrowUp size={24} />
              </GoUp>
            )}
          </InfiniteScroll>
        </>
      )}
      {status === STATUS.rejected && (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
      {status === STATUS.pending && (
        <h3>Please wait, information is loading...</h3>
      )}
    </>
  );
};

export default Home;
