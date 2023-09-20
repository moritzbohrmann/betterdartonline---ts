import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const variants = () => {
   const { theme } = useTheme();

   return cva("flex items-center border-1 rounded-md font-sans", {
      variants: {
         variant: {
            default: `${theme.borderColor.plain} ${theme.textColor.plain}`,
            vibrant: `${theme.borderColor.vibrant} ${theme.textColor.vibrant}`,
            tomato: `${theme.borderColor.tomato} ${theme.textColor.tomato}`,
         },
         size: {
            sm: "px-1 h-6 text-sm",
            md: "px-2 h-8 text-md",
            lg: "px-4 h-10 text-lg",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "md",
      },
   });
};

type Props = React.ComponentProps<"div"> & {
   variant?: "default" | "vibrant" | "tomato";
   size?: "sm" | "md" | "lg";
   pointer?: boolean;
   className?: string;
   children: React.ReactNode;
};

const Badge = ({ variant, size, pointer = false, className, children, ...props }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
   const badgeVariants = variants();

   return (
      <div ref={ref} className={cn(pointer ? "cursor-pointer" : "cursor-default", badgeVariants({ variant, size, className }))} {...props}>
         {children}
      </div>
   );
};

export default React.forwardRef<HTMLDivElement, Props>(Badge);
