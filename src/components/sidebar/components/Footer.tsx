import Flex from "../../@ui/Flex";
import IconText from "../../@ui/IconText";
import Separator from "../../@ui/Separator";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

type Props = {};

const Footer = ({}: Props) => {
   return (
      <Flex orientation="v" stretchX gap={8}>
         <Separator />
         <IconText icon={<QuestionMarkCircledIcon />}>Help</IconText>
      </Flex>
   );
};

export default Footer;
