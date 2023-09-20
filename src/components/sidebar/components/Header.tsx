import { Cross2Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { IAuthuser } from "../../../contexts/auth/auth";
import { getInitialsOf } from "../../../utils/string";
import { Avatar, Flex, IconButton, Text } from "../../@ui/_index";

type Props = {
   user?: IAuthuser;
};

const Header = ({ user }: Props) => {
   const navigate = useNavigate();

   const handleDispose = () => {
      navigate("/home");
   };

   return (
      <Flex justify="b" align="c" stretchX>
         <Flex justify="a" align="c" className="px-4 h-10 rounded-md bg-zinc-400 bg-opacity-20">
            <Avatar initials={user ? getInitialsOf(user.username) : "G"} />
            <Text weight="sb" className="">
               {user ? user.username : "Welcome, guest!"}
            </Text>
         </Flex>
         <IconButton onClick={handleDispose}>
            <Cross2Icon />
         </IconButton>
      </Flex>
   );
};

export default Header;
