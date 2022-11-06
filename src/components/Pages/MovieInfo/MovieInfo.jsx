import { getMoviesById } from 'components/API';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Ul, Div, Img, H2, H3, P, FilmInfoBlock } from './MovieInfo.styled';

function MovieInfo() {
  const [data, setData] = useState(null);
  const [backLink, setBackLink] = useState('');
  const { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    getMoviesById(id, setData);
    setBackLink(location.state?.from ?? '/movies'); // eslint-disable-next-line
  }, [id]);
  if (data === null) {
    return;
  }
  const { poster_path, original_title, overview, genres, release_date } = data;
  return (
    <div>
      <NavLink to={backLink}>
        <H2>Go Back</H2>
      </NavLink>
      <Div>
        <Img
          width={400}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="qweqweqwe"
        />
        <FilmInfoBlock>
          <H2>{original_title}</H2>
          <H3>
            Overview
            {`(${release_date.slice(0, 4)})`}
          </H3>
          {overview !== null ? (
            <P>{overview}</P>
          ) : (
            <P>Sprry overview is null</P>
          )}
          <H3>Genres</H3>
          <P>
            {genres.map(
              o =>
                `
       ${o.name} |`
            )}
          </P>
        </FilmInfoBlock>
      </Div>
      <div>
        <h2>Aditional Information</h2>
        <Ul>
          <NavLink to={'cast'}>Cast</NavLink>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </Ul>
      </div>
      <div>
        <Suspense fallback={<div>Is loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
export default MovieInfo;
