import IconButton from "../../@ui/IconButton";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ThemeType, useTheme } from "../../../contexts/theme/ThemeContext";

type Props = {};

const ToggleTheme = ({}: Props) => {
   const { theme, toggleTheme } = useTheme();

   return <IconButton onClick={toggleTheme}>{theme.type === ThemeType.LIGHT ? <MoonIcon /> : <SunIcon />}</IconButton>;
};

export default ToggleTheme;
