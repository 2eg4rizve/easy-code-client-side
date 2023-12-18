import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Level from './pages/Level/Level';
import Level1 from './pages/Level1/Level1';
import Level2 from './pages/Level2/Level2';
import AddLevelProblem from './pages/AddLevelProblem/AddLevelProblem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Category from './pages/Category/Category';
import CategoryX from './pages/CategoryX/CategoryX';
import AddCategoryProblem from './pages/AddCategoryProblem/AddCategoryProblem';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }

    ]
  },
  {
    path: 'level',
    element: <Level></Level>,
    children: [
      {
        path: 'levelX',
        element: <Level1></Level1>
      },
      {
        path: 'level2',
        element: <Level2></Level2>
      },
      {
        path: 'addLevelProblem',
        element: <AddLevelProblem></AddLevelProblem>

      }

    ]

  },
  {
    path: 'category',
    element: <Category></Category>,
    children: [
      {
        path: 'categoryX',
        element: <CategoryX></CategoryX>
      },
     
      {
        path: 'addCategoryProblem',
        element: <AddCategoryProblem></AddCategoryProblem>

      }

    ]

  }
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
