import Flex from "../../../@ui/Flex";
import Text from "../../../@ui/Text";
import { useSelector } from "react-redux";
import { IPlayer } from "../../../../redux/reducers/lobby/types";

type Props = {};

const PlayersInLobby = ({}: Props) => {
   const lobby = useSelector((state: { lobby: { filter: string; players: IPlayer[] } }) => state.lobby);

   return (
      <Flex orientation="v" stretchX stretchY>
         <Flex orientation="v" stretchX className="overflow-auto">
            {lobby.players
               .filter((player) => player.username.includes(lobby.filter))
               .map((player) => {
                  return (
                     <Flex key={player.uuid} justify="a" align="c" stretchX bordered className="min-h-[2.5rem]">
                        <Text weight="b">{player.username}</Text>
                     </Flex>
                  );
               })}
         </Flex>
      </Flex>
   );
};

export default PlayersInLobby;
