import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useAuth } from "../../contexts/auth/AuthContext";
import { useTheme } from "../../hooks/useTheme";
import { Flex, Modal } from "../@ui/_index";

type Props = {};

const Sidebar = ({}: Props) => {
   const { user } = useAuth();
   const { theme } = useTheme();

   return (
      <Flex stretchX stretchY className="bg-black bg-opacity-10 fixed animate-contentFade">
         <Modal.Modal
            stretchY
            bordered
            className={`w-80 p-8 absolute right-0 top-0 animate-extendLeft rounded-r-none border-y-0 border-r-0 ${theme.backgroundColor.default}`}>
            <Modal.Header className="h-24">
               <Header user={user} />
            </Modal.Header>
            <Modal.Content>
               <Content />
            </Modal.Content>
            <Modal.Footer className="h-12 flex-col gap-4 center">
               <Footer />
            </Modal.Footer>
         </Modal.Modal>
      </Flex>
   );
};

export default Sidebar;
