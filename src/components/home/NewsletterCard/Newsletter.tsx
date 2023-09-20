import { Button, Flex, Input, Modal, Title } from "../../@ui/_index";

type Props = {};

const Newsletter = ({}: Props) => {
   return (
      <Modal.Modal bordered pX={8} pY={8} gap={6} className="w-96 xl:w-full">
         <Modal.Header>
            <Title description="Subscribe to our newsletter and be the first to be informed!">Newsletter</Title>
         </Modal.Header>
         <Modal.Content className="justify-center">
            <Flex orientation="w" justify="c">
               <Input type="email" placeholder="Email-address" errorMessage="Invalid Email." />
               <Button variant="vibrant">Subscribe</Button>
               <Button variant="tomato">Unsubscribe</Button>
            </Flex>
         </Modal.Content>
      </Modal.Modal>
   );
};

export default Newsletter;
