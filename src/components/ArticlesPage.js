import React from 'react';

const articles = [
  {
    title: '9 WAYS TO BOOST YOUR SOCIAL LIFE AS A BUSY MUM',
    description: 'Studies show, those with social support live two and a half years longer that those who are isolated!Read how.',
    url: 'http://www.multiculturalmotherhood.com/2019/02/9-ways-to-boost-your-social-life-as-busy-mum.html'
  },
  {
    title: 'HEALTHY EATING HABITS FOR KIDS',
    description: 'Discover the importance of instilling healthy eating habits in your children and how to do it effectively.',
    url: 'https://www.myplate.gov/tip-sheet/healthy-eating-kids'
  },
  // Add more articles later
];

const ArticlesPage = () => {
  return (
    <div>
      <h1>Family Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
