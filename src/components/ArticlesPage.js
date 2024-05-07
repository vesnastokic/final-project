import React from "react";
import "./ArticlesPage.css"; // Import CSS for styling the ArticlesPage
import "./background.css"; // Import background CSS

// Array of articles with title, description, and URL
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
  {
    title:
      "How Young Kids Can Help in the Kitchen: A List of Activities by Age",
    description:
      "Want to involve your kids in cooking? This is put together a list of all the ways young kids can help out in the kitchen, with activities tailored to their age and ability. So whether they are two or 10, you can train up a little sous chef!",
    url: "https://www.thekitchn.com/how-young-kids-can-help-in-the-kitchen-a-list-of-activities-by-age-222692?signed-in=true",
  },
  // You can add more articles later
];

// Functional component for rendering the ArticlesPage
const ArticlesPage = () => {
  return (
    <div className="articles-container">
      {/* Heading for the articles */}
      <h1>Family Articles</h1>
      {/* Unordered list to hold individual articles */}
      <ul className="article-list">
        {/* Mapping through the articles array to render each article */}
        {articles.map((article, index) => (
          <li key={index} className="article-item">
            {/* Container for the article link */}
            <div className="article-link">
              {/* Clickable sign to indicate the link */}
              <span className="clickable-sign">➔</span>{" "}
              {/* Link to the article URL */}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-text"
              >
                {article.title}
              </a>
            </div>
            {/* Container for the article description */}
            <div className="article-description">
              {/* Description of the article */}
              <p>{article.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the ArticlesPage component as the default export
export default ArticlesPage;
