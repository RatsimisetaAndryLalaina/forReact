import { Article } from '../data/articles';

interface ArticleDetailProps {
  article: Article | null;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  if (!article) {
    return (
      <div className="article-detail empty">
        <p>Select an article to view details</p>
      </div>
    );
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p className="article-meta">{article.date}</p>
      <div className="article-content">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
