import { articleActions } from '../store/article/article';
import type { Article } from '../data/articles';
import { useDispatch, useSelector } from 'react-redux';
import type { ArticleState } from '../store/article/article';

export default function ArticleList() {
  const dispatch = useDispatch();
  const articlesList = useSelector(({ article }: { article: ArticleState}): Article[] => article.articlesList);

  const handleArticleSelect = (article: Article) => {
    dispatch(articleActions.setCurrentSelectedArticle(article));
    dispatch(articleActions.setCurrentSelectedTitle(article.title));
  };

  return (
    <div className="article-list">
      <h2>Articles</h2>
      <ul>
        {articlesList.map((article) => (
          <li key={article.id} onClick={() => handleArticleSelect(article)}>
            {article.title} - <span className="article-date">{article.date}</span>
          </li>
        ))}
      </ul>     
    </div>
  );
}
