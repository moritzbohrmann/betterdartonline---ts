import * as RadixTooltip from "@radix-ui/react-tooltip";
import React from "react";
import Text from "./Text";

type Props = {
   content: string;
   children: React.ReactNode;
};

function Tooltip({ content, children }: Props) {
   return (
      <RadixTooltip.Provider>
         <RadixTooltip.Root delayDuration={100}>
            <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
            <RadixTooltip.Portal>
               <RadixTooltip.Content className="data-[state=delayed-open]:animate-contentFade">
                  <div className="max-w-[12rem] rounded-md bg-zinc-300 px-2 py-1">
                     <Text variant="invert" align="c" size="sm">
                        {content}
                     </Text>
                  </div>
               </RadixTooltip.Content>
            </RadixTooltip.Portal>
         </RadixTooltip.Root>
      </RadixTooltip.Provider>
   );
}

export default Tooltip;
