import { Button, Modal, Tabs, Title } from "../../@ui/_index";
import { Cricket, Split, X01 } from "./components/games/_index";

const Profile = () => {
   type GameProps = {
      value: string;
      children: JSX.Element;
   };

   const gameList: GameProps[] = [
      { value: "X01", children: <X01 /> },
      { value: "Cricket", children: <Cricket /> },
      { value: "Split", children: <Split /> },
   ];

   return (
      <Modal.Modal bordered pX={8} pY={6} gap={6} className="w-96">
         <Modal.Footer>
            <Title description="Adjust your profile.">Profile</Title>
         </Modal.Footer>
         <Modal.Content>
            <Tabs.Tabs tabNames={["X01", "Cricket", "Split"]}>
               {gameList.map((game) => {
                  return <Tabs.Content key={game.value} {...game} />;
               })}
            </Tabs.Tabs>
         </Modal.Content>
         <Modal.Footer>
            <Button alignX="c">Join</Button>
         </Modal.Footer>
      </Modal.Modal>
   );
};

export default Profile;
