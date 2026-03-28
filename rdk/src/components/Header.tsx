import { useSelector } from "react-redux";
import type { ArticleState } from "../store/article/article";

export default function Header() {
  const currentSelectedTitle = useSelector(({article}: { article: ArticleState } ) => article.currentSelectedTitle);
  return (
    <header className="app-header">
      <h1>You are reading: {currentSelectedTitle}</h1>
    </header>
  );
}