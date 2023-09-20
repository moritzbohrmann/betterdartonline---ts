import { Flex, Text } from "../../@ui/_index";

type Props = {
   className?: string;
};

const Large = ({ className }: Props) => (
   <Flex align="c" className={`rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 ${className}`}>
      <Text size="xl" weight="b" className="px-2 py-0.5 text-white-default">
         Betterdartonline
      </Text>
   </Flex>
);

const Small = ({ className }: Props) => (
   <Flex align="c" className={`rounded-md bg-red-100 bg-gradient-to-tr from-indigo-600 via-purple-800 to-pink-700 ${className}`}>
      <Text size="xl" weight="b" align="c" className="w-8 py-0.5 text-white-default">
         B
      </Text>
   </Flex>
);

export { Large, Small };
