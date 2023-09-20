import Property from "../../../common/Property";
import { useDispatch } from "react-redux";
import { filter } from "../../../redux/reducers/lobby/lobbySlice";
import { Input, Modal, Title } from "../../@ui/_index";

type Props = {};

const Filter = ({}: Props) => {
   const dispatch = useDispatch();
   const applyFilter = (e: any) => {
      dispatch(filter(e.target.value));
   };

   return (
      <Modal.Modal bordered pX={8} pY={8} gap={6} className="w-96">
         <Modal.Header>
            <Title description="Searching for a particular player?">Filter</Title>
         </Modal.Header>
         <Modal.Content>
            <Property propertyElement="Terms">
               <Input placeholder="E.g. username" onChange={applyFilter} />
            </Property>
         </Modal.Content>
      </Modal.Modal>
   );
};

export default Filter;
