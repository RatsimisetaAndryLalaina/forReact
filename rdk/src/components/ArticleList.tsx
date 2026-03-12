import { Article } from '../data/articles';

interface ArticleListProps {
  articles: Article[];
  selectedId: number | null;
  onSelect: (article: Article) => void;
}

export default function ArticleList({
  articles,
  selectedId,
  onSelect,
}: ArticleListProps) {
  return (
    <div className="article-list">
      <h2>Current article</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`article-item ${
              selectedId === article.id ? 'selected' : ''
            }`}
            onClick={() => onSelect(article)}
          >
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
}
