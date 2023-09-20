import { Flex, Modal, Separator, Text, Title } from "../../@ui/_index";

type Props = {};

const Tournaments = ({}: Props) => {
   return (
      <Modal.Modal bordered pX={8} pY={6} gap={6} className="w-96">
         <Modal.Header>
            <Title description="All tournaments open to register for.">Tournaments</Title>
         </Modal.Header>
         <Modal.Content className="h-96">
            <></>
         </Modal.Content>
         <Modal.Footer>
            <Flex orientation="v" justify="c" align="c" gap={6} stretchX>
               <Separator />
               <Text>0 Tournaments</Text>
            </Flex>
         </Modal.Footer>
      </Modal.Modal>
   );
};

export default Tournaments;
