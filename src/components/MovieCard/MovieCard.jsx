import { Img, Div, Li, FilmName } from './MovieCard.styled';

export default function MovieCard({ data }) {
  const { poster_path, original_title } = data;
  return (
    <Li>
      <Div>
        <Img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
        />
        <FilmName>{original_title}</FilmName>
      </Div>
    </Li>
  );
}
