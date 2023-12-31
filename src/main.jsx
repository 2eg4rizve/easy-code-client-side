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
import AddLevelProblem from './pages/AddLevelProblem/AddLevelProblem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Category from './pages/Category/Category';
import CategoryX from './pages/CategoryX/CategoryX';
import AddCategoryProblem from './pages/AddCategoryProblem/AddCategoryProblem';
import AddLevel from './pages/AddLevel/AddLevel';
import AddCategory from './pages/AddCategory/AddCategory';



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
        path: 'addLevelProblem',
        element: <AddLevelProblem></AddLevelProblem>

      },
      {
        path: 'addLevel',
        element: <AddLevel></AddLevel>

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
        path: 'addCategory',
        element: <AddCategory></AddCategory>

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

// https://easycode-cfbc4.web.app/