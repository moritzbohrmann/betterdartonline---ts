import * as Logo from "./components/Logo";
import Path from "./components/Path";
import SearchBox from "./components/SearchBox";
import ToggleTheme from "./components/ToggleTheme";
import User from "./components/User";
import { HomeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SearchInput, SearchResultsViewport } from "../../common/search/_index";
import { Flex, IconButton, Separator } from "../@ui/_index";

type Props = {};

const Navigation = ({}: Props) => {
   return (
      <Flex stretchX bordered justify="a" align="c" className="h-16 border-x-0 border-t-0">
         <Flex align="c" gap={4} className="h-6">
            <Logo.Large className="hidden md:block" />
            <Logo.Small className="md:hidden" />
            <Separator orientation="v" />
            <Flex align="c">
               <IconButton>
                  <HomeIcon />
               </IconButton>
               <Path className="hidden lg:flex" />
            </Flex>
         </Flex>
         <Flex align="c">
            <SearchBox className="hidden md:flex" />
            <IconButton className="md:hidden">
               <MagnifyingGlassIcon />
            </IconButton>
            <Flex orientation="v" justify="c" pY={4} pX={4} stretchX className="absolute z-10 top-0 left-0 backdrop-blur-md hidden">
               <SearchInput className="w-full" />
               <SearchResultsViewport />
            </Flex>
            <ToggleTheme />
            <User />
         </Flex>
      </Flex>
   );
};

export default Navigation;
