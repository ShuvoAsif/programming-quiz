import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Qustions from './components/Qustions/Qustions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/:id',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Qustions></Qustions>
        },
        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;