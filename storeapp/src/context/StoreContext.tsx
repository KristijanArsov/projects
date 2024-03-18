import React, { createContext, useEffect, useState } from "react";
import { ProductType } from "../type/type";

interface StoreContextType {
  productData: ProductType[];
  handleFilterByCategory: (title: ProductType[`title`]) => void;
  handleFilterByTitle: (title: ProductType[`title`]) => void;
}

export const StoreContext = createContext<StoreContextType>({
  productData: [],
  handleFilterByCategory: () => {},
  handleFilterByTitle: () => {},
});

interface Props {
  children: React.ReactNode;
}

const StoreContextConstructor: React.FC<Props> = ({ children }) => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [filterData, setFilterData] = useState<ProductType[]>(productData);

  useEffect(() => {
    setFilterData(productData);
  }, [productData]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        setProductData(data);
      });
  }, []);

  const handleFilterByCategory = (category: ProductType[`title`]) => {
    const filtered = productData.filter((prod) => {
      if (category == `Show All`) {
        return true;
      } else if (prod.category.toLowerCase() == category.toLowerCase()) {
        return true;
      }
      return false;
    });

    setFilterData(filtered);
  };

  const handleFilterByTitle = (title: ProductType[`title`]) => {
    setFilterData(
      productData.filter((prod) =>
        prod.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };

  return (
    <StoreContext.Provider
      value={{
        productData: filterData,
        handleFilterByCategory,
        handleFilterByTitle,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextConstructor;
