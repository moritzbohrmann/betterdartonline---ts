export interface IVariants<T, C> {
   variant?: {
      default: string;
   } & T;
   size?: {
      "default": string;
      "sm"?: string;
      "md"?: string;
      "lg"?: string;
      "xl"?: string;
      "2xl"?: string;
      "3xl"?: string;
   };
   color?: {
      default: string;
      plain?: string;
      vibrant?: string;
      tomato?: string;
   } & C;
}
