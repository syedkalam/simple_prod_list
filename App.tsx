import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ProductListScreen from "./src/screens/ProductListScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ProductListScreen />
      </QueryClientProvider>
    </SafeAreaView>
 
  );
}
