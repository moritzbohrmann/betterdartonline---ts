import SearchResultsViewportItem from "./SearchResultsViewportItem";
import { Flex, Loading, Text } from "../../components/@ui/_index";
import { useSearch } from "../../contexts/search/SearchContext";

type Props = {
   isVisible?: boolean;
};

const SearchResultsViewport = ({ isVisible = false }: Props) => {
   const { results } = useSearch();

   return (
      <Flex orientation="v" stretchX bordered pX={4} pY={2} className={`backdrop-blur-md animate-contentFade ${!isVisible && "hidden"}`}>
         <Text weight="b">Results</Text>
         <Flex orientation="v" stretchX gap={0} className="pb-4">
            {results.map((result) => {
               return <SearchResultsViewportItem key={result.term} {...result} />;
            })}
            {results.length === 0 && <Loading size="sm" />}
         </Flex>
      </Flex>
   );
};

export default SearchResultsViewport;
