import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../contexts/theme/ThemeContext";
import { Flex, Text } from "../../@ui/_index";

type Props = {
   className?: string;
};

const Path = ({ ...props }: Props) => {
   const { pathname } = useLocation();

   const dividedPaths = pathname.replace("/home", "").split("/");

   return (
      <Flex align="c" {...props}>
         {dividedPaths.map((dividedPathname) => {
            if (dividedPathname === "") return;
            return <DividedPath key={dividedPathname} dividedPathname={dividedPathname} />;
         })}
      </Flex>
   );
};

type DividedPathProps = {
   dividedPathname: string;
};

const DividedPath = ({ dividedPathname }: DividedPathProps) => {
   const { theme } = useTheme();
   const navigate = useNavigate();

   return (
      <>
         <ArrowRightIcon className={theme.textColor.default} />
         <Text variant="plain" size="sm" weight="sb" onClick={() => navigate("/" + dividedPathname)}>
            {dividedPathname}
         </Text>
      </>
   );
};

export default Path;
