import React from "react";
import Tooltip from "./Tooltip";
import { cva } from "class-variance-authority";
import { ITheme } from "../../_types/theme";
import { Theme, ThemeType, useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const variants = (theme: ITheme) =>
   cva("font-sans", {
      variants: {
         variant: {
            default: theme.textColor.default,
            plain: theme.textColor.plain,
            theme: theme.textColor.theme,
            invert: theme.type === ThemeType.LIGHT ? Theme.DARK.textColor.default : Theme.LIGHT.textColor.default,
         },
         weight: {
            l: "font-light",
            n: "font-normal",
            m: "font-medium",
            sb: "font-semibold",
            b: "font-bold",
            bl: "font-black",
         },
         size: {
            "sm": "text-sm",
            "md": "text-md",
            "lg": "text-lg",
            "xl": "text-xl",
            "2xl": "text-2xl",
            "3xl": "text-3xl",
            "5xl": "text-5xl",
         },
         align: {
            l: "text-left",
            c: "text-center",
            r: "text-right",
         },
      },
      defaultVariants: {
         variant: "default",
         weight: "n",
         size: "md",
         align: "l",
      },
   });

type Props = React.ComponentProps<"p"> & {
   variant?: "default" | "plain" | "theme" | "invert";
   weight?: "l" | "n" | "m" | "sb" | "b" | "bl";
   size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "5xl";
   align?: "l" | "c" | "r";
   tooltip?: string;
   className?: string;
   children: React.ReactNode;
};

const Text = ({ variant, weight, size, align, tooltip, className, children, ...props }: Props, ref: React.ForwardedRef<HTMLParagraphElement>) => {
   const { theme } = useTheme();
   const textVariants = variants(theme);

   const textElement = (
      <p ref={ref} className={cn(textVariants({ variant, weight, size, align, className }))} {...props}>
         {children}
      </p>
   );

   if (tooltip) {
      return <Tooltip content={tooltip}>{textElement}</Tooltip>;
   }

   return textElement;
};

export default React.forwardRef<HTMLParagraphElement, Props>(Text);
