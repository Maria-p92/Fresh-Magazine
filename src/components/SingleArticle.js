import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentfulCli/client';
import freshLogo from '../assets/media/freshLogo.png';

const SingleArticle = () => {
  const { content_type, slug } = useParams();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();


  useEffect(() => {
    setLoading(true);
    client
      .getEntries({
        'fields.slug': slug,
        content_type
      })
      .then(({ items }) => {
        setArticle(items[0]);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [content_type, slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return article ? (
    <div className='container'>
      <h1>{article.fields.title}</h1>
      <div className='row'>
        <div>
          {article.fields.imgArticle ? (
            <img 
            className='img-fluid'
            src={article.fields.imgArticle.fields.file.url} 
            alt={article.fields.title} />
          ) : (
            <img src={freshLogo} alt='freshLogo' />
          )}
        </div>
        <h6 style={{textAlign:'right'}}>By {article.fields.author} </h6>
        <div>
        <p>{article.fields.body}</p>
        </div>
      </div>
    </div>
  ) : (
    <div>No content</div>
  );
};

export default SingleArticle;