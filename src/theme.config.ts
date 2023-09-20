export default {
   theme: {
      dark: {
         type: "dark",
         select: "data-[state=active]:bg-zinc-500",
         icon: "text-zinc-300",
         textColor: {
            default: "text-zinc-300",
            theme: "text-light-950",
            vibrant: "text-green-500",
            tomato: "text-red-500",
            plain: "text-zinc-500",
            honey: "text-amber-500",
         },
         backgroundColor: {
            default: "bg-neutral-950",
            vibrant: "bg-green-500",
            tomato: "bg-red-500",
            plain: "bg-zinc-500",
            honey: "bg-amber-500",
         },
         borderColor: {
            default: "border-zinc-500",
            vibrant: "border-green-500",
            tomato: "border-red-500",
            plain: "border-zinc-500",
            honey: "border-amber-500",
         },
      },
      light: {
         type: "light",
         select: "data-[state=active]:bg-zinc-400",
         icon: "text-zinc-800",
         textColor: {
            default: "text-zinc-800",
            theme: "text-neutral-200",
            vibrant: "text-green-500",
            tomato: "text-red-500",
            plain: "text-zinc-500",
            honey: "text-amber-600",
         },
         backgroundColor: {
            default: "bg-neutral-200",
            vibrant: "bg-green-500",
            tomato: "bg-red-500",
            plain: "bg-zinc-100",
            honey: "bg-amber-600",
         },
         borderColor: {
            default: "border-zinc-400",
            vibrant: "border-green-500",
            tomato: "border-red-500",
            plain: "border-zinc-500",
            honey: "border-amber-500",
         },
      },
      rainbow: {
         type: "rainbow",
         background: "bg-gradient-to-br from-rose-400 via-yellow-500 to-blue-400",
         backgroundColor: "bg-gradient-to-br from-rose-400 via-yellow-500 to-blue-400",
         select: "bg-zinc-300",
         separator: "bg-zinc-300",
         textColor: {
            default: "text-zinc-300",
            descent: "text-zinc-500",
            background: "bg-gradient-to-br from-rose-400 via-yellow-500 to-blue-400",
         },
         borderColor: {
            default: "border-zinc-700",
            light: "border-zinc-300",
         },
         buttonColor: {
            default: "bg-amber-600",
            vibrant: "bg-green-600",
            tomato: "bg-red-600",
         },
      },
   },
};
