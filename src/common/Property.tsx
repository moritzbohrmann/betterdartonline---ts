import Flex from "../components/@ui/Flex";
import React from "react";
import Text from "../components/@ui/Text";
import { useTheme } from "../contexts/theme/ThemeContext";

export type IProperty = {
   name: string;
   children: React.ReactNode;
};

type PropertyProps = {
   propertyElement: string | JSX.Element;
   className?: string;
   children: React.ReactNode;
};

const Property = ({ propertyElement, className, children }: PropertyProps) => {
   const { theme } = useTheme();

   return (
      <Flex justify="b" align="c" stretchX className={className}>
         {typeof propertyElement === "string" ? (
            <Text>{propertyElement}</Text>
         ) : (
            React.cloneElement(propertyElement, { className: theme.textColor.default })
         )}

         {children}
      </Flex>
   );
};

export default Property;
