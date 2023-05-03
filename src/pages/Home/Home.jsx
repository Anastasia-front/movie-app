import { getTrending, STATUS } from 'serviceAPI/fetch';
import MovieList from 'components/MovieList/MovieList';
import { GoUp } from 'pages/Movies/Movies.styled';
import { HiArrowUp } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { scrollPos, scrollTop, infiniteHeight, boxScroll } from 'utils/scroll';

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
  const [totalPages, setTotalPages] = useState(2);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setStatus(STATUS.pending);
    localStorage.setItem('scrollPos', 0);
    async function fetchData() {
      try {
        getTrending(1).then(info => {
          setTotalPages(info.total_pages);
          setMovies(info.results);
        });
        setStatus(STATUS.resolved);
      } catch (error) {
        setError(error);
        setStatus(STATUS.rejected);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (pages <= totalPages / 100) {
          const arrayOfMovies = await getTrending(pages).then(r => r.results);
          setMovies(i => [...i, ...arrayOfMovies]);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [pages, totalPages]);

  const fetchMoreData = () => {
    setPages(i => i + 1);
  };

  const reachTheEnd = () => {
    if (totalPages / 100 === pages) {
      setHasMore(false);
    }
  };
  reachTheEnd();

  return (
    <>
      {status === STATUS.resolved && (
        <>
          <h1 style={{ fontSize: '20px' }}>Trending today</h1>
          <InfiniteScroll
            style={{ overflow: 'visible' }}
            dataLength={movies.length}
            next={fetchMoreData}
            initialScrollY={JSON.parse(
              window.localStorage.getItem('scrollPos')
            )}
            height={infiniteHeight()}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all ;D</b>
              </p>
            }
          >
            <MovieList movies={movies} onClick={() => scrollPos(boxScroll())} />
            {boxScroll() > 1000 && (
              <GoUp onClick={() => scrollTop()}>
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
