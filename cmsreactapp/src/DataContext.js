import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const setOrdersData = (orders) => {
    setData(orders);
  };

  return (
    <DataContext.Provider value={{ data: data || [], setOrdersData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
