import { useEffect, useState } from 'react';
import client from '../contentfulCli/client';

const Interviews = ({ header }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    
      client
      .getEntries({content_type: 'interviewPage'})
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
        <h1>Check out our Interviews</h1>
      </div>
    );
  };
  
  export default Interviews;