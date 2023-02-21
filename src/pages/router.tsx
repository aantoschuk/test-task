import { createBrowserRouter } from 'react-router-dom';
import App from './app/App';
import Posts from './posts/Posts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
]);
