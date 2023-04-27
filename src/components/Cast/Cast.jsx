import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'serviceAPI/fetch';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { ListLi, ListUl } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('cast')) ?? {
        cast: [
          {
            id: 0,
            profile_path: '',
            name: '',
            original_name: '',
            character: '',
          },
        ],
      }
    );
  });
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    window.localStorage.setItem('cast', JSON.stringify(cast));
  }, [cast]);

  useEffect(() => {
    async function fetchData() {
      try {
        const objectOfCast = await getMovieCastById(id).then(r => r);
        setCast(objectOfCast);
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
          {cast.cast.length !== 0 ? (
            <ListUl>
              {cast.cast.map(c => {
                return (
                  <ListLi key={c.id}>
                    {c.profile_path !== null ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                        alt={c.name}
                        width="100px"
                      />
                    ) : (
                      <img
                        src={
                          'https://fisnikde.com/wp-content/uploads/2019/01/broken-image.png'
                        }
                        alt={c.name}
                        width="100px"
                      />
                    )}

                    <h6>{c.original_name}</h6>
                    <p>Character:</p>
                    <p>{c.character}</p>
                  </ListLi>
                );
              })}
            </ListUl>
          ) : (
            <h3>We don`t have list of actors for this movie.</h3>
          )}
        </Container>
      ) : (
        <h3>Something went wrong on API... The messege error `{error}`</h3>
      )}
    </>
  );
};

export default Cast;
