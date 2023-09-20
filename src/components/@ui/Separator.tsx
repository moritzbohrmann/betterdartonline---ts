import Flex from "./Flex";
import React from "react";
import Text from "./Text";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const SeparationBorder = ({ orientation }: { orientation: "v" | "h" }) => {
   const { theme } = useTheme();

   return <div className={cn(orientation === "v" ? "h-full border-l-[1px]" : "w-full border-t-[1px]", theme.borderColor.default)} />;
};

type Props = {
   orientation?: "v" | "h";
   className?: string;
   children?: React.ReactNode;
};

const Separator = ({ orientation = "h", children, className = "" }: Props) => {
   return (
      <Flex orientation={orientation} justify="c" align="c" className={cn(orientation === "v" ? "h-full" : "w-full", className)}>
         {children ? (
            <>
               <SeparationBorder orientation={orientation} />
               <Text size="sm" className="px-1">
                  {children}
               </Text>
               <SeparationBorder orientation={orientation} />
            </>
         ) : (
            <SeparationBorder orientation={orientation} />
         )}
      </Flex>
   );
};

export default Separator;
