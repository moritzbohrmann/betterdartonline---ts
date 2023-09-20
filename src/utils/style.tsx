import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...args: string[]) => twMerge(clsx(...args));

export { cn };
