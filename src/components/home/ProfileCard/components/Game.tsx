import Flex from "../../../@ui/Flex";
import Property, { IProperty } from "../../../../common/Property";
import React from "react";

type Props = {
   properties: IProperty[];
};

const Game = ({ properties }: Props) => {
   return (
      <Flex orientation="v" stretchX>
         {properties.map((property: IProperty): React.ReactElement => {
            return (
               <Property key={property.name} propertyElement={property.name}>
                  {property.children}
               </Property>
            );
         })}
      </Flex>
   );
};

export default Game;
