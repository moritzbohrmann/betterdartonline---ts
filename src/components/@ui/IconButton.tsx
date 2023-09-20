import React from "react";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

type Props = React.ComponentProps<"button"> & {
   className?: string;
   children: React.ReactElement<any>;
};

const IconButton = ({ className = "", children, ...props }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
   const { theme } = useTheme();

   return (
      <button
         ref={ref}
         className={cn("flex h-8 w-8 items-center justify-center rounded-md border-[1px]", className, theme.borderColor.plain)}
         {...props}>
         {React.cloneElement(children, { className: cn("h-5 w-5", theme.textColor.plain) })}
      </button>
   );
};

export default React.forwardRef<HTMLButtonElement, Props>(IconButton);
