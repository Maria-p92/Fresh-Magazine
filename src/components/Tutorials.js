import { useEffect, useState } from 'react';
import client from '../contentfulCli/client';

const Tutorials = ({ header }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
      client
        .getEntries({ content_type: 'tutorialsPage' })
        .then(({ items }) => {
          console.log(items);
          setArticles(items);
          setLoading(false);
        })
        .catch(err => setError(err));
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
    return (
      <div className='container'>
        <h1>Take a look at all our tutorials</h1>
      </div>
    );
  };
  
  export default Tutorials;