import { Route, Routes } from 'react-router';
import AllQuotes from '../pages/quotes/AllQuotes';
import SingleQuote from '../pages/quotes/SingleQuote';
import SubmitReview from '../pages/quotes/SubmitReview';

export default function AppRoutes() {
    return <Routes>
          <Route path="/" element={<AllQuotes />} />
          <Route path="/single" element={<SingleQuote />} />
          <Route path="/create" element={<SubmitReview />} />
        </Routes>;
};