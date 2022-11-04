import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { Ul } from './App.styled';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;
  border-radius: 8px;
  padding: 8px;
  background-color: aliceblue;
  text-decoration: none;
  &.active {
    color: darkturquoise;
  }
  &:not(:first-of-type) {
    margin: 0px 0px 0px 15px;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <Ul>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
