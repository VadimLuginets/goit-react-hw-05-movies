import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Title, Ul } from './Home.styled';
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPopularMovies(setData);
  }, []);
  return (
    <div>
      <Title>Porpular movies on today</Title>
      <Ul>
        {data !== null
          ? data.results.map(o => <MovieCard key={o.id} data={o} />)
          : null}
      </Ul>
    </div>
  );
}
async function getPopularMovies(setData) {
  try {
    const URL =
      'https://api.themoviedb.org/3/movie/popular?api_key=6bfc661313cc74df3ae441abc4c4707b';

    const qwe = await fetch(URL).then(res => res.json());
    console.log(qwe);
    setData(qwe);
  } catch (error) {
    console.log(error);
  }
}
