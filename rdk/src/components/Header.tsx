import { useAppSelector } from "../store/hooks";

export default function Header() {
  const currentSelectedTitle = useAppSelector((state) => state.article.currentSelectedTitle);
  return (
    <header className="app-header">
      <h1>You are reading: {currentSelectedTitle}</h1>
    </header>
  );
}