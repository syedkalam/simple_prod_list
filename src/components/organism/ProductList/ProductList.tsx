import { FlatList, ActivityIndicator, Text } from "react-native";
import ProductCard from "../../molecules/productCard/ProductCard";

type ProductListProps = {
  products: any[];
  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing: boolean;
  isFetchingNextPage: boolean;
  searchLoading : boolean; 
};

export default function ProductList({
  products,
  onEndReached,
  onRefresh,
  refreshing,
  isFetchingNextPage,
  searchLoading 
  
}: ProductListProps) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductCard item={item} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      refreshing={refreshing}
      onRefresh={onRefresh}
      contentContainerStyle={{ gap: 20, paddingBottom: 100 }}
      ListFooterComponent={
        isFetchingNextPage ? <ActivityIndicator size="large" /> : null
      }
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() =>
        searchLoading  ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text>No Data</Text>
        )
      }
    />
  );
}
