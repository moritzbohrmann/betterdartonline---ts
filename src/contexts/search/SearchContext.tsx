import React from "react";
import searchConfig from "../../search.config";
import { IResult, SearchTerms } from "./search";

type ISearchContext = {
   search: string;
   setSearch: React.Dispatch<string>;
   results: Array<IResult>;
};

const initialState = {
   search: "",
   setSearch: () => {},
   results: [],
} as ISearchContext;

const SearchContext = React.createContext(initialState);

const SearchProvider = ({ ...props }) => {
   const [search, setSearch] = React.useState("");
   const [results, setResults] = React.useState<IResult[]>([]);

   React.useEffect(() => {
      if (search === "") {
         setResults([]);
         return;
      }

      const searchTerms = searchConfig.terms.filter((term) => term.includes(search.toLowerCase())) as SearchTerms[];

      const searchResults: IResult[] = Object.values(searchConfig.results).filter((result) => searchTerms.includes(result.term));

      setResults(searchResults);

      return () => {
         setResults([]);
      };
   }, [search]);

   return <SearchContext.Provider value={{ search, setSearch, results }} {...props} />;
};

const useSearch = () => {
   return React.useContext(SearchContext);
};

export { SearchContext, SearchProvider, useSearch };
