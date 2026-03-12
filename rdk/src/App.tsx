import { useState } from 'react'
import ArticleDetail from './components/ArticleDetail'
import ArticleList from './components/ArticleList'
import { articles, Article } from './data/articles'
import './App.css'

function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[0])

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Article Reader</h1>
      </header>
      <main className="app-main">
        <div className="detail-panel">
          <ArticleDetail article={selectedArticle} />
        </div>
        <div className="list-panel">
          <ArticleList
            articles={articles}
            selectedId={selectedArticle.id}
            onSelect={handleArticleSelect}
          />
        </div>
      </main>
    </div>
  )
}

export default App
