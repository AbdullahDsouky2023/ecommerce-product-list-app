import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ProductCard } from '../molecules/ProductCard';
import { Product } from '../../store/productSlice';
import { Text } from '../atoms/Text';
import { View } from '../Themed';

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

export const ProductList: React.FC<ProductListProps> = React.memo(({ products, onDelete }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <ProductCard product={item} onDelete={onDelete} />}
    ListEmptyComponent={
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
        </View>
    }
  />
));
const styles = StyleSheet.create({
    emptyContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        paddingVertical:20
    },
    emptyText:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        fontWeight:'bold',
        backgroundColor:'blue',
        color:'#fff',
        fontSize:20,
        padding:20,
        textAlign:'center',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#fff',
        overflow:'hidden'
    }
});