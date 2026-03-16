import ArticleDetail from './components/ArticleDetail'
import ArticleList from './components/ArticleList'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <main className="app-main">
        <div className="detail-panel">
          <ArticleDetail/>
        </div>
        <div className="list-panel">
          <ArticleList/>
        </div>
      </main>
    </div>
  )
}

export default App
