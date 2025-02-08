import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from './Services/ProductService';
import { thunk } from "redux-thunk";

// Thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();
    console.log('Fetched products:', response); // Log the entire response

    // Use consistent lowercase checking for category names
    const veg = response.filter(item => item.category.toLowerCase() === 'veg');
    const nonVeg = response.filter(item => item.category === 'nonVeg');
    
    console.log('Fetched veg items:', veg);
    console.log('Fetched non-veg items:', nonVeg);

    // Additional check to confirm non-veg items were found
    if (nonVeg.length === 0) {
      console.warn("No non-veg items found in the response");
    }

    return { veg, nonVeg };
  }
);



// Products Slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [],
    nonVeg: [],  // 
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.veg = action.payload.veg || [];
        state.nonVeg = action.payload.nonVeg || [];  // Ensure 'nonVeg' here as well
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
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
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

// Purchase History Slice
const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState: [],
  reducers: {
    addPurchase: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Export actions
export const {
  addToCart,
  increment,
  decrement,
  removeCart,
  clearCart
} = cartSlice.actions;
export const { addPurchase } = purchaseHistorySlice.actions;

const store = configureStore({
  reducer:{
      products : productsSlice.reducer,
      cart: cartSlice.reducer,
      purchaseHistory : purchaseHistorySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)  // Add redux-thunk middleware
})

export default store;
