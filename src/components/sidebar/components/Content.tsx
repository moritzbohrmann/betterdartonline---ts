import Createuser from "./guest/CreateAccount";
import SignIn from "./guest/SignIn";
import { EnterIcon, ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../../contexts/auth/AuthContext";
import { Collapsible, Flex, IconText } from "../../@ui/_index";

type Props = {};

const Content = ({}: Props) => {
   const { isAuthenticated, doLogout } = useAuth();

   if (isAuthenticated) {
      return (
         <Flex stretchX orientation="v" gap={2}>
            <div onClick={doLogout}>
               <IconText icon={<ExitIcon />} pointer>
                  Sign out
               </IconText>
            </div>
         </Flex>
      );
   }

   return (
      <Flex stretchX orientation="v" gap={2}>
         <Collapsible trigger={<IconText icon={<PersonIcon />}>Sign in</IconText>} content={<SignIn />} className="w-full" />
         <Collapsible trigger={<IconText icon={<EnterIcon />}>Create user</IconText>} content={<Createuser />} className="w-full" />
      </Flex>
   );
};

export default Content;
