// src/components/templates/ProductListTemplate.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';
import { ProductList } from '../organisms/ProductList';
import { Product } from '../../store/productSlice';

interface ProductListTemplateProps {
  products: Product[];
  newProductName: string;
  newProductPrice: string;
  onAddProduct: () => void;
  onDeleteProduct: (id: string) => void;
  onNameChange: (text: string) => void;
  onPriceChange: (text: string) => void;
  error: string | null;
}

export const ProductListTemplate: React.FC<ProductListTemplateProps> = ({
  products,
  newProductName,
  newProductPrice,
  onAddProduct,
  onDeleteProduct,
  onNameChange,
  onPriceChange,
  error,
}) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <Input
        value={newProductName}
        onChangeText={onNameChange}
        placeholder="Product Name"
      />
      <Input
        value={newProductPrice}
        onChangeText={onPriceChange}
        placeholder="Price"
        keyboardType="numeric"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Add Product" onPress={onAddProduct} />
    </View>
    <ProductList products={products} onDelete={onDeleteProduct} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
