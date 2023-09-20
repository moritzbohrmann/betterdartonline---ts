import { useContext } from "react";
import { SearchContext } from "../contexts/search/SearchContext";

export const useSearch = () => {
   return useContext(SearchContext);
};
