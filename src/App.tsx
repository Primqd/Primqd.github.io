import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import { Home }  from './pages/Home';
import { PhotoPortfolio } from './projects/photo-portfolio/PhotoPortfolio';
import { ErrorPage } from './pages/ErrorPage'
import { MissingPage } from './pages/MissingPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects/photo-portfolio', element: <PhotoPortfolio /> },
      { path: '*', element: <MissingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}


export default App
