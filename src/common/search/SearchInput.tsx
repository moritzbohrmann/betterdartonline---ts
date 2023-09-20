import Input from "../../components/@ui/Input";
import React from "react";
import { useSearch } from "../../contexts/search/SearchContext";

type Props = React.ComponentProps<"input">;

const SearchInput = ({ ...props }: Props) => {
   const { setSearch } = useSearch();

   return <Input width="2xl" placeholder="Search" onChange={(e) => setSearch(e.target.value)} {...props} />;
};

export default SearchInput;
