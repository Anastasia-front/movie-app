import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from 'serviceAPI/fetch';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { ListLi } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(window.localStorage.getItem('reviews')) ?? {};
  });
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    window.localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    async function fetchData() {
      try {
        const objectOfreviews = await getMovieReviewsById(id).then(r => r);

        setReviews(objectOfreviews);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      {error === null ? (
        <Container>
          {reviews.results.length !== 0 ? (
            <ul>
              {reviews.results.map(c => {
                return (
                  <ListLi key={c.id}>
                    <h3 style={{ color: 'darkgreen' }}>Author: {c.author}</h3>
                    <p>`{c.content}`</p>
                  </ListLi>
                );
              })}
            </ul>
          ) : (
            <h3>We don`t have any reviews for this movie.</h3>
          )}
        </Container>
      ) : (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
    </>
  );
};

export default Reviews;
