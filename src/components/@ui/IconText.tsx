import Flex from "./Flex";
import React from "react";
import Text from "./Text";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

type Props = {
   icon: JSX.Element;
   pointer?: boolean;
   className?: string;
   children: React.ReactNode;
};

const IconText = ({ icon, pointer = false, className = "", children }: Props) => {
   const { theme } = useTheme();

   return (
      <Flex align="c" className={cn(pointer ? "cursor-pointer" : "cursor-default", className)}>
         {React.cloneElement(icon, { className: theme.textColor.default, width: "16px", height: "16px" })}
         <Text size="sm" weight="sb">
            {children}
         </Text>
      </Flex>
   );
};

export default IconText;
