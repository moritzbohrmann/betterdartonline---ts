import Flex from "./Flex";
import React from "react";
import { cva } from "class-variance-authority";
import { ITheme } from "../../_types/theme";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const variants = (theme: ITheme) => {
   return cva("rounded-md border-1 outline-none px-4 font-sans h-8", {
      variants: {
         variant: {
            default: cn(theme.borderColor.plain, theme.backgroundColor.default, theme.textColor.default),
            transparent: cn(theme.borderColor.plain, "bg-transparent", theme.textColor.default),
         },
         width: {
            "sm": "w-40",
            "md": "w-48",
            "lg": "w-52",
            "xl": "w-56",
            "2xl": "w-64",
            "3xl": "w-80",
            "fill": "w-full",
         },
         alignText: {
            l: "text-left",
            c: "text-center",
            r: "text-right",
         },
      },
      defaultVariants: {
         variant: "default",
         width: "md",
         alignText: "l",
      },
   });
};

type Props = Omit<React.ComponentProps<"input">, "width"> & {
   variant?: "default" | "transparent";
   width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "fill";
   alignText?: "l" | "c" | "r";
   errorMessage?: string;
   className?: string;
};

const Input = ({ variant, width, alignText, errorMessage, className, ...props }: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
   const { theme } = useTheme();
   const inputVariants = variants(theme);

   if (errorMessage) {
      return (
         <Flex orientation="v" gap={0} className={`relative ${className}`}>
            <input
               ref={ref}
               className={cn(
                  inputVariants({ variant, width, alignText, className }),
                  errorMessage ? theme.borderColor.tomato : theme.borderColor.default
               )}
               {...props}
            />
            {errorMessage && (
               <p
                  className={`absolute px-2 font-semibold rounded-md border-1 ${theme.borderColor.tomato} ${theme.backgroundColor.default} bottom-0 right-0 translate-x-1 translate-y-1 ${theme.textColor.tomato} font-sans text-[12px] animate-contentFade`}>
                  {errorMessage}
               </p>
            )}
         </Flex>
      );
   }

   return <input ref={ref} className={cn(inputVariants({ variant, width, alignText, className }))} {...props} />;
};

export default React.forwardRef<HTMLInputElement, Props>(Input);
