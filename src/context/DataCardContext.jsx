import { createContext, useState } from "react";

export const DataCardContext = createContext(null);

export const DataCardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
//   cards.map((card)=> 
//     id={card}
// )
  return (
    <DataCardContext.Provider value={{ cards, setCards }}>
      {children}
    </DataCardContext.Provider>
  );
};
