import { JSX } from "react";
import { articles } from "./dataArticles/articles.data";
import Link from "next/link";

export default function Articles(): JSX.Element {
    return (
      <div className="article-block">
        <div className="decorate-us-1-s decorate-us"></div>
        <div className="articles-section">
          <div className="article-image-block generic-article">
            <div className="generic-image-block-title">
              <h3>Полезные статьи</h3>
            </div>
          </div>
          <div className="articles-card generic-article">
            {
              articles.map((article, index) => (
                <Link 
                href={`/articlePage/${article.slug}`}
                className="article-card" 
                key={index}>
                  <span>{article.title}</span>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="decorate-us-2-s decorate-us"></div>
      </div>
    )
}