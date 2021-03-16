import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../contentfulCli/client';
import freshLogo from '../assets/media/freshLogo.png';

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
      <div className='container-fluid'>
      <div id='titleHea'>
        <h1>Find what you want, read what you like</h1>
        <h2>Check out all the tutorials available, there are so many interesting tutorials to discover!</h2>
      </div>
      <div className='row containerMain'>
        {articles.map(article => (
          <div className='col-sm-6'>
            <div className='card' id='artiTuto' key={article.sys.id}>
              {article.fields.imgArticle ? (
                <img
                  className='card-img-top'
                  src={article.fields.imgArticle.fields.file.url}
                  alt={article.fields.title}
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <img
                  className='card-img-top'
                  src={freshLogo}
                  alt='freshLogo'
                  style={{ objectFit: 'cover'}}
                />
              )}
              <div className='card-body'>
                <h5 className='card-title'>{article.fields.title}</h5>
                <p className='card-text' id='interviewText'> {article.fields.descriptionTitle} </p>
                <h6 style={{textAlign:'center'}}>By {article.fields.author} </h6>
                <Link to={`/articles/${article.sys.contentType.sys.id}/${article.fields.slug}`}
                  className='btn btn-primary'
                  id='btnarticles'
                >
                  Go to tutorial
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Tutorials;