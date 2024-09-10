
// src/components/pages/ProductListPage.tsx
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductListTemplate } from '../templates/ProductListTemplate';
import { RootState, AppDispatch } from '../../store';
import { addProduct, deleteProduct, Product, loadProducts, saveProducts } from '../../store/productSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProductListPage: React.FC = () => {
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(saveProducts(products));
  }, [products, dispatch]);

  const validatePrice = (price: string): boolean => {
    const numPrice = parseFloat(price);
    return !isNaN(numPrice) && numPrice > 0;
  };

  const handleAddProduct = useCallback(() => {
    if (!newProductName.trim()) {
      setError('Product name cannot be empty');
      return;
    }

    if (!validatePrice(newProductPrice)) {
      setError('Please enter a valid price (number greater than 0)');
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: newProductName.trim(),
      price: parseFloat(newProductPrice),
    };
    dispatch(addProduct(newProduct));
    setNewProductName('');
    setNewProductPrice('');
    setError(null);
  }, [newProductName, newProductPrice, dispatch]);

  const handleDeleteProduct = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  const memoizedProducts = useMemo(() => products, [products]);

  return (
    <SafeAreaView style={{flex:1}}>

    <ProductListTemplate
      products={memoizedProducts}
      newProductName={newProductName}
      newProductPrice={newProductPrice}
      onAddProduct={handleAddProduct}
      onDeleteProduct={handleDeleteProduct}
      onNameChange={setNewProductName}
      onPriceChange={setNewProductPrice}
      error={error}
      />
      </SafeAreaView>
  );
};