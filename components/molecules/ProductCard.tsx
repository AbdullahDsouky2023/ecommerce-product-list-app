
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Product } from '../../store/productSlice';
import { AntDesign } from '@expo/vector-icons';

interface ProductCardProps {
  product: Product;
  onDelete: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product, onDelete }) => (
  <View style={styles.card}>

    <Text>{product.name}</Text>
    <Text>${product.price.toFixed(2)}</Text>
    <AntDesign name='delete' size={20} color="red" onPress={() => onDelete(product.id)} />
  </View>
));

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical:20,
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginHorizontal:20,
    marginVertical: 10
  },
});

