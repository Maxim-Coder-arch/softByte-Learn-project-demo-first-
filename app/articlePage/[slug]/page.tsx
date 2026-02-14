import { notFound } from "next/navigation";
import { articles } from "../../components/main/articles/dataArticles/articles.data";
import "../../scss/main/main.css";
import ToHomeButton from "@/app/generic-components/toHomeButton";
import "../../scss/corsePageStyle/mainCourse/mainCourse.css";
import Loader from "../../components/defaultComponents/loader";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Loader />
      <div className="article-page">
        <div className="article-content">
          {article.content.map((block, idx) => {
            if (block.type === "subtitle") {
              return (
                <div className="article-page-subtitle" key={idx}>
                  <h2>{block.text}</h2>
                </div>
              )
            }
            return (
              <div className="article-page-paragraph" key={block.type + idx}>
                <p>{block.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
