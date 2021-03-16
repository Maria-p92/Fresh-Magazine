import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import client from '../contentfulCli/client';
import freshLogo from '../assets/media/freshLogo.png';


const Articles = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    if (!topic) {
      client
        .getEntries()
        .then(({ items }) => {
          console.log(items);
          setArticles(items);
          setLoading(false);
        })
        .catch(err => setError(err));
    } else {
      client
        .getEntries({ content_type: topic })
        .then(({ items }) => {
          console.log(items);
          setArticles(items);
          setLoading(false);
        })
        .catch(err => setError(err));
    }
  }, [topic]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='container-fluid'>
      <div id='titleHea'>
        <h1>{!topic ? 'Find what you want, read what you like': topic.toUpperCase()}</h1>
        <h2>Check out all the articles available, there are so many interesting things to read and learn from!</h2>
      </div>
      <div className='row containerMain'>
        {articles.map(article => (
          <div className='col-sm-6'>
            <div className='card' id='inArticle' key={article.sys.id}>
              {article.fields.imgArticle ? (
                <img
                  className='card-img-top'
                  src={article.fields.imgArticle.fields.file.url}
                  alt={article.fields.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              ) : (
                <img
                  className='card-img-top'
                  src={freshLogo}
                  alt='freshLogo'
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              )}
              <div className='card-body'>
                <h5 className='card-title'>{article.fields.title}</h5>
                <p className='card-text'> {article.fields.descriptionTitle} </p>
                <h6 style={{textAlign:'center'}}>By {article.fields.author} </h6>
                <Link to={`/articles/${article.sys.contentType.sys.id}/${article.fields.slug}`}
                  className='btn btn-primary'
                  id='btnarticles'
                >
                  Read the article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;