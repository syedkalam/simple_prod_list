import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductsApi } from "../api/productApi";

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) => fetchProductsApi(pageParam),
    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.reduce(
        (acc, page) => acc + page.products.length,
        0
      );
      return totalFetched < lastPage.total ? totalFetched : undefined;
    },
  });
};
