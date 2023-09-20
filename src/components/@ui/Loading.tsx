import Flex from "./Flex";
import { cva } from "class-variance-authority";
import { useTheme } from "../../contexts/theme/ThemeContext";
import { cn } from "../../utils/style";

const variants = cva("", {
   variants: {
      size: {
         sm: "h-4 w-4",
         md: "h-6 w-6",
         lg: "h-8 w-8",
         xl: "h-10 w-10",
      },
   },
   defaultVariants: {
      size: "md",
   },
});

type Props = {
   size?: "sm" | "md" | "lg" | "xl";
   className?: string;
};

const Loading = ({ size, className = "", ...props }: Props) => {
   const { theme } = useTheme();

   const loadingRingClassName = cn(variants({ size }), "rounded-full border-2 border-t-0 animate-spin", theme.borderColor.default);

   return (
      <Flex justify="c" align="c" className={cn("h-0 w-full animate-contentFade", className)} {...props}>
         <div className={loadingRingClassName} />
      </Flex>
   );
};

export default Loading;
