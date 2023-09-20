import Game from "../Game";
import Input from "../../../../@ui/Input";
import Select from "../../../../@ui/Select";
import { IProperty } from "../../../../../common/Property";

const properties: Array<IProperty> = [
   { name: "Username", children: <Input defaultValue={"Moritz Bohrmann"} /> },
   {
      name: "Points",
      children: (
         <Select>
            <option value="301">301</option>
            <option value="501">501</option>
         </Select>
      ),
   },
   {
      name: "Mode",
      children: (
         <Select>
            <option value="firsto">First to</option>
            <option value="bestof">Best of</option>
         </Select>
      ),
   },
   { name: "Legs", children: <Input type="number" defaultValue={1} min={1} max={50} /> },
];

const Split = () => {
   return <Game properties={properties} />;
};

export default Split;
