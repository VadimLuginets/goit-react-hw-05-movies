import { NavLink, useLocation } from 'react-router-dom';
import { Img, Li, FilmName } from './MovieCard.styled';
import styled from '@emotion/styled';

function MovieCard({ data }) {
  const location = useLocation();
  const { poster_path, original_title, id } = data;
  const StyledLink = styled(NavLink)`
    display: flex;
    width: 320px;
    background: #1e90ff;
    flex-direction: column;
    align-items: baseline;
    align-items: center;
    text-decoration: none;
    color: black;
  `;
  return (
    <Li key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <Img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
        />
        <FilmName>{original_title}</FilmName>
      </StyledLink>
    </Li>
  );
}
export default MovieCard;
