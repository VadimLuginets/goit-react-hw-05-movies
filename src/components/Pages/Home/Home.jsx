import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Title, Ul } from './Home.styled';
import { getPopularMovies } from 'components/API';
function Home() {
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
export default Home;
