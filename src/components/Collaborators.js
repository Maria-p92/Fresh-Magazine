import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../contentfulCli/client';
import freshLogo from '../assets/media/freshLogo.png';


const Collaborators = ({ header }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
      client
        .getEntries({ content_type: 'authorsPage' })
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
        <div>
          <h1 className='titleSec'>Meet our collaborators</h1>
          <h2 className='philoText'>We are happy to introduce you to the people who are part of the team, feel free to contact us if you want to write articles or have something to show the world.</h2>
        </div>
        <div className='row containerMain'>
        {articles.map(article => (
          <div className='col-sm-6'>
            <div className='card' id='artiTuto' key={article.sys.id}>
              {article.fields.authorPic ? (
                <img
                  className='card-img-top'
                  src={article.fields.authorPic.fields.file.url}
                  alt={article.fields.title}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <img
                  className='card-img-top'
                  src={freshLogo}
                  alt='freshLogo'
                  style={{ objectFit: 'cover' }}
                />
              )}
              <div className='card-body' id='colaTitle'>
                <h5 className='card-title'>{article.fields.authorName}</h5>
                <p className='card-text' id='interviewText'> {article.fields.autorBio} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Collaborators;