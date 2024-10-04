import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ArtistDetails from '@/pages/ArtistDetails';
import Categories from '@/pages/Categories';
import Discover from '@/pages/Discover';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import My from '@/pages/My';
import MyFavorites from '@/pages/MyFavorites';
import MyGallery from '@/pages/MyGallery';
import MyOrders from '@/pages/MyOrders';
import MySales from '@/pages/MySales';
import ProductDetails from '@/pages/ProductDetails';
import ProductPosting from '@/pages/ProductPosting';
import Search from '@/pages/Search';
import SearchResults from '@/pages/SearchResults';
import Signup from '@/pages/Signup';

import { ProtectedRoute } from './ProtectedRoute';
import { RouterPath } from './path';

const Routes = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Home />, // 레이아웃 추후 추가하기
    children: [
      {
        path: RouterPath.home,
        element: <Home />,
      },
      {
        path: RouterPath.discover,
        element: <Discover />,
      },
      {
        path: RouterPath.categories,
        element: <Categories />,
      },
      {
        path: RouterPath.search,
        element: <Search />,
        children: [
          {
            path: RouterPath.results,
            element: <SearchResults />,
          },
        ],
      },
      {
        path: RouterPath.products,
        element: null,
        children: [
          { path: ':productId', element: <ProductDetails /> },
          {
            path: RouterPath.posting,
            element: (
              <ProtectedRoute>
                <ProductPosting />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: `${RouterPath.artists}/:artistId`,
        element: <ArtistDetails />,
      },
      {
        path: RouterPath.my,
        element: (
          <ProtectedRoute>
            <My />
          </ProtectedRoute>
        ),
        children: [
          {
            path: RouterPath.orders,
            element: (
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            ),
          },
          {
            path: RouterPath.favorites,
            element: (
              <ProtectedRoute>
                <MyFavorites />
              </ProtectedRoute>
            ),
          },
          {
            path: RouterPath.sales,
            element: (
              <ProtectedRoute>
                <MySales />
              </ProtectedRoute>
            ),
          },
          {
            path: RouterPath.gallery,
            element: (
              <ProtectedRoute>
                <MyGallery />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
  {
    path: RouterPath.login,
    element: <Login />,
  },
  { path: RouterPath.signup, element: <Signup /> },
]);

export default Routes;
