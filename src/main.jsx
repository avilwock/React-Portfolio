import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/ErrorPage.jsx';
import Home from './pages/HomePage.jsx';
import About from './pages/ProfilePage.jsx';
import Contact from './pages/ContactPage.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    //sets the app as the route for the elements
    element: <App />,
    //sets the error page up as the error element
    errorElement: <Error />,
    //sets the routes that we can access
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      { 
        path: '/Contact',
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
