import React from "react";
import { cva } from "class-variance-authority";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const variants = () => {
   const { theme } = useTheme();

   return cva("rounded-md border-1 outline-none px-4 font-sans h-8", {
      variants: {
         variant: {
            default: cn(theme.borderColor.plain, theme.backgroundColor.default, theme.textColor.default),
            transparent: cn(theme.borderColor.plain, "bg-transparent", theme.textColor.default),
         },
         size: {
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
         size: "md",
         alignText: "l",
      },
   });
};

type Props = React.ComponentProps<"select"> & {
   variant?: "default" | "transparent";
   size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "fill";
   alignText?: "l" | "c" | "r";
   className?: string;
   children: React.ReactElement<HTMLOptionElement>[];
};

const Select = ({ variant, size, alignText, className, children, ...props }: Props, ref: React.ForwardedRef<HTMLSelectElement>) => {
   const inputVariants = variants();

   return (
      <select ref={ref} className={cn(inputVariants({ variant, size, alignText, className }))} {...props}>
         {children}
      </select>
   );
};

export default React.forwardRef<HTMLSelectElement, Props>(Select);
