import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Article, articles } from '../../data/articles';

export type ArticleState = {
  currentSelectedTitle: string;
  currentSelectedArticle: Article | null;
  articlesList: Article[];
}

const initialState: ArticleState = {
  currentSelectedTitle: 'No article selected',
  currentSelectedArticle: null,
  articlesList: articles
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setCurrentSelectedTitle(state, action: PayloadAction<string>) {
      state.currentSelectedTitle = action.payload;
    },
    setCurrentSelectedArticle(state, action: PayloadAction<Article | null>) {
      state.currentSelectedArticle = action.payload;
    },
    setArticlesList(state, action: PayloadAction<Article[]>) {
      state.articlesList = action.payload;
    }
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;
export type { ArticleState };