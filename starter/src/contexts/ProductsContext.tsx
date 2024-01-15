import { createContext, useState } from "react";
import productList, { Product } from "../assets/data/list";

interface ProductContextType {
  products: Product[];
  selectedProducts: (id: Product[`id`]) => void;
  onAdd: (id: Product[`id`]) => void;
  onRemoveItem: (prod: Product) => void;
  onPlaceOrder: () => void
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  selectedProducts: () => {},
  onAdd: () => {},
  onRemoveItem: () => {},
  onPlaceOrder: () => {}
});

interface Props {
  children: React.ReactNode;
}

const ProductsContextConst: React.FC<Props> = ({ children }) => {
  const [products, setProduct] = useState<Product[]>(productList);

  const selectedProducts = (id: Product[`id`]) => {
    const updatedSelectedProduct = products.map((p) => {
      if (id == p.id) {
        return {
          ...p,
          selected: !p.selected,
          amount: p.selected ? 0 : 1,
        };
      }
      return p;
    });
    setProduct(updatedSelectedProduct);
  };

  const onAdd = (id: Product[`id`]) => {
    setProduct((prevState) => {
      return prevState.map((prod) => {
        if (id == prod.id) {
          return {
            ...prod,
            amount: prod.amount + 1,
          };
        }
        return prod;
      });
    });
  };

  const onRemoveItem = (prod: Product) => {
    if (prod.amount == 1) {
      setProduct((prevState) => {
        return prevState.map((prod) => {
          if (prod.id == prod.id) {
            return {
              ...prod,
              selected: false,
              amount: 0,
            };
          }
          return prod;
        });
      });
    } else {
      setProduct((prevState) => {
        return prevState.map((prod) => {
          if (prod.id == prod.id) {
            return {
              ...prod,
              amount: prod.amount - 1,
            };
          }
          return prod;
        });
      });
    }
  };

  const onPlaceOrder = () => {
    setProduct((prevState) => {
      return prevState.map((prod) => {
        return {
          ...prod,
          selected: false,
        };
      });
    });
  };
  return (
    <ProductContext.Provider
      value={{ products, selectedProducts, onAdd, onRemoveItem,onPlaceOrder }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextConst;
