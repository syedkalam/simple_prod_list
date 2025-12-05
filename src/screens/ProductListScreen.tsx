import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { useEffect, useState } from "react";
import SearchBar from "../components/atoms/searchBar/SearchBar";
import ProductList from "../components/organism/ProductList/ProductList";
import { useProducts } from "../hooks/useProducts";
import { useDebounce } from "../hooks/useDebounce";
import HStack from "../components/atoms/tags/HStack";
import AppText from "../components/atoms/text/AppText";
import { colors } from "../styles.theme/theme";

export default function ProductListScreen() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [searchLoading, setSearchLoading] = useState(false);
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    refetch,
    isRefetching,
    isFetchingNextPage,
  } = useProducts();

  const allProducts = data?.pages.flatMap((page) => page.products) || [];
  console.log("  data:", data);
  const filteredProducts =
    debouncedSearch.length === 0
      ? allProducts
      : allProducts.filter((item) =>
          item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        );

  const allowInfiniteScroll = debouncedSearch.length === 0;

  const handleClick = (id: any) => {
    console.log("Product clicked with id:", id);
  };

  useEffect(() => {
    if (search.length > 0) {
      setSearchLoading(true);
    }

    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={{ borderBottomWidth: 1, marginBottom: 25 }} />

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : isError ? (
        <HStack>
          <AppText text="Error: " bold color={colors.error} />{" "}
          <AppText text={`${error.message}`} />
        </HStack>
      ) : (
        <ProductList
          products={filteredProducts}
          onEndReached={
            allowInfiniteScroll && hasNextPage ? fetchNextPage : undefined
          }
          isFetchingNextPage={isFetchingNextPage}
          refreshing={isRefetching}
          onRefresh={refetch}
          searchLoading={searchLoading}
          handleClick={handleClick}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
