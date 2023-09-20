import { Flex, Text } from "../../components/@ui/_index";
import { IResult } from "../../contexts/search/search";

const SearchResultsViewportItem = (props: IResult) => {
   return (
      <Flex stretchX align="c" className="h-6 border-l-1 border-zinc-500 animate-extendDown">
         <div className="w-4 border-b-1 border-zinc-500" />
         <Flex justify="b" align="c" stretchX>
            <Text size="sm">{props.label}</Text>
            <Text size="sm">{props.text}</Text>
         </Flex>
      </Flex>
   );
};

export default SearchResultsViewportItem;
