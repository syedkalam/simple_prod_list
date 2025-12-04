import { View, Text } from "react-native";
import React from "react";
import AppText from "../../atoms/text/AppText";
import { Styles } from "./ProductCard.styles";
import HStack from "../../atoms/tags/HStack";
import { colors } from "../../../styles.theme/theme";
import VStack from "../../atoms/tags/VStack";
import { Product } from "../../../types/product";

export default function ProductCard({ item }: { item: Product & { rating?: number } }) {
  return (
    <View style={Styles.productItemCard}>
      <VStack spacing={4}>
        <HStack justify="space-between" spacing={10}>
          <Text numberOfLines={1} style={{ flex: 1, fontWeight: "700" }}>
            {item?.title}
          </Text>
          <AppText text={`₹ ${item?.price}`} variant="caption" bold />
        </HStack>
        <AppText
          text={`Rating: ${item?.rating}`}
          variant="caption"
          color={colors.secondary}
          bold
        />
      </VStack>
    </View>
  );
}
