import { createBrowserRouter } from 'react-router-dom';

import { PATH } from '@/constants/path';

import App from './app/App';
import Posts from './posts/Posts';

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <App />,
  },
  {
    path: PATH.posts,
    element: <Posts />,
  },
]);
