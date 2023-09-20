import PlayersInLobby from "./components/PlayersInLobby";
import { Flex, Modal, Separator, Text, Title } from "../../@ui/_index";

type Props = {};

const Lobby = ({}: Props) => {
   return (
      <Modal.Modal bordered pX={8} pY={6} gap={6} className="w-96">
         <Modal.Header>
            <Title description="Players who search for an opponent.">Lobby</Title>
         </Modal.Header>
         <Modal.Content className="h-96">
            <PlayersInLobby />
         </Modal.Content>
         <Modal.Footer>
            <Flex orientation="v" justify="c" align="c" gap={6} stretchX>
               <Separator />
               <Text>0 Players</Text>
            </Flex>
         </Modal.Footer>
      </Modal.Modal>
   );
};

export default Lobby;
