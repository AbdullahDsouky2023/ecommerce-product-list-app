import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
});

export const { setProducts, addProduct, deleteProduct } = productSlice.actions;

// Thunk for loading products from AsyncStorage
export const loadProducts = () => async (dispatch: any) => {
  try {
    const storedProducts = await AsyncStorage.getItem('products');
    if (storedProducts) {
      dispatch(setProducts(JSON.parse(storedProducts)));
    }
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

// Thunk for saving products to AsyncStorage
export const saveProducts = (products: Product[]) => async () => {
  try {
    await AsyncStorage.setItem('products', JSON.stringify(products));
  } catch (error) {
    console.error('Error saving products:', error);
  }
};

export default productSlice.reducer;

