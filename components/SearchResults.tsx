import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist, totalPrice }: SearchResultsProps) {


  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        )
      })}
    </div>
  )
}