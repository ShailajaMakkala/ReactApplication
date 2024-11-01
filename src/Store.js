import { configureStore, createSlice } from "@reduxjs/toolkit";

// Products Slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { name: 'Tomato', price: 200.50, brand: 'Fresh Farms' },
      { name: 'Potato', price: 100.50, brand: 'Nature’s Best' },
      { name: 'Carrot', price: 50.00, brand: 'Green Valley' },
    
    ],
    nonveg: [
      { name: 'Chicken', price: 280.50, brand: 'Poultry Farms' },
      { name: 'Mutton', price: 500.50, brand: 'Premium Meats' },
      { name: 'Fish', price: 200.00, brand: 'Ocean’s Catch' },
   
    ]
  },
  reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // Maintain items in cart as an array
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1; 
      }
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name); 
    }
  }
});

// Export actions for use in components
export const { 
  addToCart, 
  increment, 
  decrement, 
  removeCart: removeItem // Renamed for consistent import in Cart component
} = cartSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer
  }
});

// Export the store
export default store;
