import { useState } from "react";
import { SearchInput, SearchResultsViewport } from "../../../common/search/_index";
import { SearchProvider } from "../../../contexts/search/SearchContext";
import { Modal } from "../../@ui/_index";

type Props = React.ComponentProps<"div">;

const SearchBox = ({ className, ...props }: Props) => {
   const [isViewportVisible, setIsViewportVisible] = useState(false);

   const toggleViewportVisibility = () => setIsViewportVisible(isViewportVisible ? false : true);

   return (
      <SearchProvider>
         <Modal.Modal className={`relative ${className}`} {...props}>
            <Modal.Header>
               <SearchInput onFocus={toggleViewportVisibility} onBlur={toggleViewportVisibility} />
            </Modal.Header>
            <Modal.Content className="absolute mt-10">
               <SearchResultsViewport isVisible={isViewportVisible} />
            </Modal.Content>
         </Modal.Modal>
      </SearchProvider>
   );
};

export default SearchBox;
