import { articleActions } from '../store/article/article';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import type { Article } from '../data/articles';

export default function ArticleList() {
  const dispatch = useAppDispatch();
  const { articlesList, currentSelectedArticle } = useAppSelector((state) => ({
    articlesList: state.article.articlesList,
    currentSelectedArticle: state.article.currentSelectedArticle,
  }));

  const handleArticleSelect = (article: Article) => {
    dispatch(articleActions.setCurrentSelectedArticle(article));
    dispatch(articleActions.setCurrentSelectedTitle(article.title));
  };

  return (
    <div className="article-list">
      <h2>Latest news</h2>
      <div className="articles-container">
        {articlesList.map((article: Article) => (
          <div
            key={article.id}
            className={`article-item ${
              currentSelectedArticle?.id === article.id ? 'selected' : ''
            }`}
            onClick={() => handleArticleSelect(article)}
          >
            {article.title}
          </div>
        ))}
      </div>
    </div>
  );
}
