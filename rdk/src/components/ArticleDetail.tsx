import { useSelector } from "react-redux";
import type { ArticleState } from '../store/article/article';

export default function ArticleDetail() {
  const currentSelectedArticle = useSelector(({ article }: { article: ArticleState }) => article.currentSelectedArticle);
  
  if (!currentSelectedArticle) {
    return (
      <div className="article-detail">
        <h1>No article selected</h1>
        <p>Please select an article from the list to view its details.</p>
      </div>
    );
  }

  return (
    <div className="article-detail">
      <h1>{currentSelectedArticle.title}</h1>
      <p className="article-meta">{currentSelectedArticle.date}</p>
      <div className="article-content">
        {currentSelectedArticle.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
