import { getMoviesBySearchQuery } from 'components/API';
import { useState, useEffect } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { Ul } from 'components/Pages/Home/Home.styled';
import { useSearchParams } from 'react-router-dom';
import { Form, Input } from './Movies.styled';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null); // eslint-disable-next-line
  const [searchParams, setSeacrhParams] = useSearchParams();
  useEffect(() => {
    getMoviesBySearchQuery(searchParams.get(`query`), setData); // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getMoviesBySearchQuery(searchQuery, setData);
  }, [searchQuery]);
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          setSearchQuery(e.currentTarget.searchQuery.value);
          setSeacrhParams({ query: e.currentTarget.searchQuery.value });
          e.currentTarget.searchQuery.value = '';
        }}
      >
        <Input
          name="searchQuery"
          placeholder="Input film name here"
          type="text"
        />
        <button type="Submit">Search</button>
      </Form>
      <Ul>
        {data !== null ? (
          data.results.map(o => <MovieCard key={o.id} data={o} />)
        ) : (
          <h1>There is nothing here</h1>
        )}
      </Ul>
    </div>
  );
}
export default Movies;
