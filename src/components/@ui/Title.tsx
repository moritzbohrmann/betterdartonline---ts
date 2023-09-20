import Flex from "./Flex";
import React from "react";
import Text from "./Text";

type Props = {
   description?: string;
   children: React.ReactNode;
};

const Title = ({ description, children }: Props) => {
   return (
      <Flex orientation="v" gap={0}>
         <Text size="3xl" weight="b">
            {children}
         </Text>
         {description && (
            <Text variant="plain" size="lg">
               {description}
            </Text>
         )}
      </Flex>
   );
};

export default Title;
