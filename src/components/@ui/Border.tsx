import React from "react";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

type Props = {
   variant?: "default" | "vibrant" | "tomato" | "plain" | "honey";
   className?: string;
   children: React.ReactElement<any>;
};

const Border = ({ variant = "default", className = "", children }: Props) => {
   const { theme } = useTheme();

   return React.cloneElement(children, { className: cn(`rounded-md border-1 ${theme.borderColor[variant]}`, children.props.className, className) });
};

export default Border;
