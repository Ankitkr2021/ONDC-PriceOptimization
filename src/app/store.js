import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-list/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  
});

// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from '../features/product-list/productSlice';
// import { composeWithDevTools } from 'redux-devtools-extension'; // Import composeWithDevTools from redux-devtools-extension

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//     // Add other reducers if you have them
//   },
//   // Enhance the store with the Redux DevTools extension
//   devTools: process.env.NODE_ENV !== 'production', // Enable only in development
//   enhancers: [composeWithDevTools()],
// });

// export default store;
