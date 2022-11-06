import { getReviewsByMovieId } from 'components/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Reviews() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getReviewsByMovieId(id, setData); // eslint-disable-next-line
  }, []);
  return (
    <div>
      <ul>
        {data !== null ? (
          data.results.map(({ author, content, id }) => (
            <li key={id}>
              <div>
                <h2>{author}</h2>
                <p>{content}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Sorry there is any review</p>
        )}
      </ul>
    </div>
  );
}
export default Reviews;
