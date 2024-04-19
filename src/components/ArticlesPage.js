import React from "react";
import "./ArticlesPage.css";

const articles = [
  {
    title: "9 Ways to Boost Your Social Life As A Busy Mum",
    description:
      "Studies show, those with social support live two and a half years longer that those who are isolated!Read how.",
    url: "http://www.multiculturalmotherhood.com/2019/02/9-ways-to-boost-your-social-life-as-busy-mum.html",
  },
  {
    title: "Healthy Eating Habits For Kids",
    description:
      "Discover the importance of instilling healthy eating habits in your children and how to do it effectively.",
    url: "https://www.myplate.gov/tip-sheet/healthy-eating-kids",
  },
  {
    title: "No, I am Not Just a Stay-at-Home Mom",
    description:
      "The mental load of motherhood is real, but our obsessive need to do something “more” can make us feel unbearable.",
    url: "https://www.nytimes.com/2020/04/17/parenting/stay-at-home-mom.html?auth=login-google1tap&login=google1tap",
  },
  {
    title: "What I wish I knew about being a stay-at-home mom",
    description:
      "There are a few things I wish I could tell my new-stay-at-home-mom-self. But of course, I can not. So instead I will say them to you.",
    url: "https://www.mother.ly/life/stay-at-home-mom-advice/",
  },
  // Add more articles later
];

const ArticlesPage = () => {
  return (
    <div className="articles-container">
      <h1>Family Articles</h1>
      <ul className="article-list"> {/* Changed to match the CSS class */}
        {articles.map((article, index) => (
          <li key={index} className="article-item"> {/* Optional: Added article-item class */}
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
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