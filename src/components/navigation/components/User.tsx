import Avatar from "../../@ui/Avatar";
import Badge from "../../@ui/Badge";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth/AuthContext";
import { getInitialsOf } from "../../../utils/string";

type Props = {};

const User = ({}: Props) => {
   const { user } = useAuth();
   const navigate = useNavigate();

   const handleClick = () => {
      navigate("./menu");
   };

   return (
      <div onClick={handleClick}>
         {user ? (
            <Avatar initials={getInitialsOf(user.username)} />
         ) : (
            <Badge pointer className="animate-wiggle">
               Sign in
            </Badge>
         )}
      </div>
   );
};

export default User;
