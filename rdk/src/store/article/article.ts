import { createSlice, type Dispatch, type PayloadAction } from '@reduxjs/toolkit';
import { type Article } from '../../data/articles';

//there is a bunch of method to perform the asynch fetching. 
    // 1- by executing the fetch inside a component then dispatch here
    // 2- or by dispatching here first then adding a useEffect in the component to listen to the change and fetch data  
    // 3- thunks (redux-thunk) : by dispatching here first then performing the fetch inside the thunk and dispatching the result to the reducer

const BASE_URL = 'https://api.crossref.org/works';

export type ArticleState = {
  currentSelectedTitle: string;
  currentSelectedArticle: Article | null;
  articlesList: Article[];
}

const initialState: ArticleState = {
  currentSelectedTitle: 'No article selected',
  currentSelectedArticle: null,
  articlesList: []
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
  }
});

export const articleActions = articleSlice.actions;

export const fetchArticles = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const articles: Article[] = data.message.items.map((item: any) => ({
      id: item.DOI,
      title: item.title[0],
      preview: item.abstract ? item.abstract.substring(0, 100) + '...' : 'No preview available',
      date: item.created['date-time'],
      content: item.abstract || 'No content available'
    }));
    dispatch(articleActions.setArticlesList(articles));
  } catch (error) {
    console.error('Error fetching articles:', error);
  };
};


export default articleSlice.reducer;