import { createBrowserRouter } from 'react-router-dom';

// Pages
import Layout from '../pages/Layout';
import Feed from '../pages/Feed';
import SearchResults from '../pages/SearchResults';
import VideoDetails from '../pages/VideoDetails';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/search/:searchquery',
        element: <SearchResults />,
      },
      {
        path: '/video/:id',
        element: <VideoDetails />,
      },
    ],
  }
]);
