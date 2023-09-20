import * as Radix from "@radix-ui/react-tabs";
import Border from "./Border";
import Flex from "./Flex";
import Text from "./Text";
import { useTheme } from "../../contexts/theme/ThemeContext";

export const Content = ({ className, ...props }: Radix.TabsContentProps) => {
   return <Radix.Content className={`mt-4 ${className}`} {...props} />;
};

type Props = {
   tabNames: string[];
   className?: string;
   children: JSX.Element[];
};

export const Tabs = ({ tabNames, className, children }: Props) => {
   const { theme } = useTheme();

   return (
      <Radix.Root defaultValue={tabNames[0]} className="w-full">
         <Border>
            <Radix.List className={`h-10 ${className} flex`}>
               {tabNames.map((tabName) => {
                  return (
                     <Radix.Trigger key={tabName} value={tabName} className={`w-full ${theme.select}`}>
                        <Flex stretchX stretchY justify="c" align="c">
                           <Text weight="b">{tabName}</Text>
                        </Flex>
                     </Radix.Trigger>
                  );
               })}
            </Radix.List>
         </Border>
         {children}
      </Radix.Root>
   );
};
