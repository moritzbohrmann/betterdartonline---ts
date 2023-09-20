import Border from "./Border";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";

const variants = cva("flex", {
   variants: {
      orientation: {
         h: "flex-row",
         v: "flex-col",
         w: "flex-wrap",
      },
      justify: {
         s: "justify-start",
         c: "justify-center",
         e: "justify-end",
         a: "justify-around",
         b: "justify-between",
      },
      align: {
         s: "items-start",
         c: "items-center",
         e: "items-end",
      },
      gap: {
         0: "gap-0",
         2: "gap-2",
         4: "gap-4",
         6: "gap-6",
         8: "gap-8",
         10: "gap-10",
         12: "gap-12",
         16: "gap-16",
      },
      pX: {
         0: "px-0",
         2: "px-2",
         4: "px-4",
         6: "px-6",
         8: "px-8",
         10: "px-10",
         12: "px-12",
         16: "px-16",
      },
      pY: {
         0: "px-0",
         2: "py-2",
         4: "py-4",
         6: "py-6",
         8: "py-8",
         10: "py-10",
         12: "py-12",
         16: "py-16",
      },
   },
   defaultVariants: {
      orientation: "h",
      justify: "s",
      align: "s",
      gap: 2,
      pX: 0,
      pY: 0,
   },
});

export type Props = {
   orientation?: "h" | "v" | "w";
   justify?: "s" | "c" | "e" | "a" | "b";
   align?: "s" | "c" | "e";
   gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16;
   pX?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16;
   pY?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16;
   stretchX?: boolean;
   stretchY?: boolean;
   bordered?: boolean;
   className?: string;
   children?: React.ReactNode;
};

const Flex = (
   {
      orientation,
      justify,
      align,
      gap,
      pX,
      pY,
      stretchX = false,
      stretchY = false,
      bordered,
      className,
      children,
      ...props
   }: React.ComponentProps<"div"> & Props,
   ref: React.ForwardedRef<HTMLDivElement>
) => {
   const baseElement = (
      <div
         ref={ref}
         className={cn(stretchX ? "w-full" : "", stretchY ? "h-full" : "", variants({ orientation, justify, align, gap, pX, pY, className }))}
         {...props}>
         {children}
      </div>
   );

   if (bordered) {
      return <Border children={baseElement} />;
   }

   return baseElement;
};

export default React.forwardRef<HTMLDivElement, Props>(Flex);
