import Input from "../../@ui/Input";
import { EnterIcon, EnvelopeClosedIcon, ImageIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";

const options = [
   [
      {
         trigger: { icon: <PersonIcon />, children: "Sign in" },
         properties: [
            { propertyElement: <PersonIcon />, children: <Input placeholder="Username" /> },
            { propertyElement: <EnvelopeClosedIcon />, children: <Input placeholder="Email" /> },
            { propertyElement: <LockClosedIcon />, children: <Input placeholder="Password" /> },
            { propertyElement: <ImageIcon />, children: <Input placeholder="Avatar-URL" /> },
         ],
      },
      {
         trigger: { icon: <EnterIcon />, children: "Create user" },
         properties: [
            { propertyElement: <PersonIcon />, children: <Input placeholder="Username" /> },
            { propertyElement: <EnvelopeClosedIcon />, children: <Input placeholder="Email" /> },
            { propertyElement: <LockClosedIcon />, children: <Input placeholder="Password" /> },
            { propertyElement: <ImageIcon />, children: <Input placeholder="Avatar-URL" /> },
         ],
      },
   ],
   [
      {
         trigger: { icon: <PersonIcon />, children: "Sign in" },
         properties: [
            { propertyElement: <PersonIcon />, children: <Input placeholder="Username" /> },
            { propertyElement: <EnvelopeClosedIcon />, children: <Input placeholder="Email" /> },
            { propertyElement: <LockClosedIcon />, children: <Input placeholder="Password" /> },
            { propertyElement: <ImageIcon />, children: <Input placeholder="Avatar-URL" /> },
         ],
      },
      {
         trigger: { icon: <EnterIcon />, children: "Create user" },
         properties: [
            { propertyElement: <PersonIcon />, children: <Input placeholder="Username" /> },
            { propertyElement: <EnvelopeClosedIcon />, children: <Input placeholder="Email" /> },
            { propertyElement: <LockClosedIcon />, children: <Input placeholder="Password" /> },
            { propertyElement: <ImageIcon />, children: <Input placeholder="Avatar-URL" /> },
         ],
      },
   ],
];

export default options;
