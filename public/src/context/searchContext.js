// import { useEffect, useState, createContext } from 'react';

// export const SearchContext = createContext();

// export const SearchContextProvider = (props) => {
//   const [search, setSearch] = useState('');

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredCoins = (coins) => {
//     coins.filter((coin) => {
//       return coin.name.toLowerCase().includes(search.toLowerCase());
//     });
//   };

//   return (
//     <SearchContext.Provider value={{ handleChange, filteredCoins }}>
//       {prop.children}
//     </SearchContext.Provider>
//   )
// }
