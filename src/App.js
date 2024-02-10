import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { 
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  { 
    path: '/checkout',
    element: <Checkout></Checkout>,
  },
  { 
    path: '/product-detail/:id',
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import React from 'react';
// import { Provider } from 'react-redux'; // Import the Provider component
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from 'react-router-dom';
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import Cart from './features/cart/Cart';
// import CartPage from './pages/CartPage';
// import Checkout from './pages/Checkout';
// import ProductDetailPage from './pages/ProductDetailPage';
// import store from './store'; // Import your Redux store

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home></Home>,
//   },
//   {
//     path: '/login',
//     element: <LoginPage></LoginPage>,
//   },
//   {
//     path: '/signup',
//     element: <SignupPage></SignupPage>,
//   },
//   { 
//     path: '/cart',
//     element: <CartPage></CartPage>,
//   },
//   { 
//     path: '/checkout',
//     element: <Checkout></Checkout>,
//   },
//   { 
//     path: '/product-detail',
//     element: <ProductDetailPage></ProductDetailPage>,
//   },
// ]);

// function App() {
//   return (
//     <div className="App">
//       {/* Wrap your entire application with the Provider component */}
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </div>
//   );
// }

// export default App;
