export interface ITheme {
   type: string;
   select: string;
   icon: string;
   textColor: Color & { theme: string };
   backgroundColor: Color;
   borderColor: Color;
}

export interface Color {
   default: string;
   vibrant: string;
   tomato: string;
   plain: string;
   honey: string;
}
export interface IThemeType {
   DARK: "dark";
   LIGHT: "light";
}
