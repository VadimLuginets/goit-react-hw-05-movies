import { getActorsByMovieId } from 'components/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ul, Li, Div, Img } from './Cast.styled';
function Cast() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getActorsByMovieId(id, setData); // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Ul>
        {data !== null ? (
          data.cast.map(({ name, profile_path, character, id }) => (
            <Li key={id}>
              <Div>
                <Img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={`${name}Photo`}
                />
                <p>{name}</p>
                <p>{character}</p>
              </Div>
            </Li>
          ))
        ) : (
          <p>Sorry there is not information</p>
        )}
      </Ul>
    </div>
  );
}
export default Cast;
