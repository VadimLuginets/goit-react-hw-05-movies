export async function getPopularMovies(setData) {
  try {
    const URL =
      'https://api.themoviedb.org/3/movie/popular?api_key=6bfc661313cc74df3ae441abc4c4707b';

    const qwe = await fetch(URL).then(res => res.json());
    setData(qwe);
  } catch (error) {
    console.log(error);
  }
}
export async function getMoviesBySearchQuery(searchQuery, setFunc) {
  if (searchQuery === '') {
    return;
  }
  try {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US&query=${searchQuery
      .trim()
      .toLowerCase()}&page=1&include_adult=false`;

    const qwe = await fetch(URL).then(res => res.json());
    if (qwe.total_pages === 0) {
      setFunc(null);
      return;
    }
    setFunc(qwe);
  } catch (error) {
    console.log(error);
  }
}
export async function getMoviesById(id, setData) {
  if (id === null) {
    return;
  }
  try {
    const URL = `
https://api.themoviedb.org/3/movie/${id}?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US`;

    const qwe = await fetch(URL).then(res => res.json());

    setData(qwe);
  } catch (error) {
    console.log(error);
  }
}
export async function getActorsByMovieId(id, setData) {
  if (id === null) {
    return;
  }
  try {
    const URL = `
https://api.themoviedb.org/3/movie/${id}/credits?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US`;

    const qwe = await fetch(URL).then(res => res.json());

    if (qwe.total_pages === 0) {
      setData(null);
      return;
    }
    setData(qwe);
  } catch (error) {
    console.log(error);
  }
}
export async function getReviewsByMovieId(id, setData) {
  if (id === null) {
    return;
  }
  try {
    const URL = `
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6bfc661313cc74df3ae441abc4c4707b&language=en-US`;

    const qwe = await fetch(URL).then(res => res.json());
    console.log(qwe);
    if (qwe.total_pages === 0) {
      setData(null);
      return;
    }
    setData(qwe);
  } catch (error) {
    console.log(error);
  }
}
