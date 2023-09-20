import Loading from "./Loading";
import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const variants = () => {
   const { theme } = useTheme();

   return cva("rounded-md m-auto font-sans font-bold outline-none", {
      variants: {
         variant: {
            default: `${theme.backgroundColor.honey} ${theme.textColor.theme}`,
            vibrant: `${theme.backgroundColor.vibrant} ${theme.textColor.theme}`,
            tomato: `${theme.backgroundColor.tomato} ${theme.textColor.theme}`,
            light: `${theme.backgroundColor.plain} ${theme.textColor.default}`,
            transparent: `bg-transparent ${theme.textColor.theme}`,
         },
         size: {
            default: "h-8 w-32 text-md",
            sm: "h-6 w-24 text-sm",
         },
         alignX: {
            l: "ml-0 left-0",
            c: "mx-auto",
            r: "mr-0 right-0",
            none: "mx-0",
         },
         alignY: {
            t: "mt-0 top-0",
            c: "my-auto",
            b: "mb-0 bottom-0",
            none: "my-0",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
         alignX: "none",
         alignY: "none",
      },
   });
};

type Props = React.ComponentProps<"button"> & {
   variant?: "default" | "vibrant" | "tomato" | "light" | "transparent";
   size?: "default" | "sm";
   alignX?: "l" | "c" | "r" | "none";
   alignY?: "t" | "c" | "b" | "none";
   className?: string;
   isLoading?: boolean;
   children: React.ReactNode;
};

const Button = ({ variant, size, alignX, alignY, isLoading, className, children, ...props }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
   const buttonVariants = variants();

   return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, alignX, alignY, className }))} {...props}>
         {!isLoading ? children : <Loading size="sm" />}
      </button>
   );
};

export default React.forwardRef<HTMLButtonElement, Props>(Button);
