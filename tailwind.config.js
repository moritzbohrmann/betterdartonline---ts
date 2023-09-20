/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            primary: ["Satoshi", "sans-serif"],
            secondary: ["DM Sans", "sans-serif"],
            sans: ["DM Sans", "sans-serif"],
         },
         textColor: {
            white: {
               default: "#d1d1d1",
            },
            black: {
               default: "#1c1c1c",
            },
            dark: {
               background: "#0a0a0a",
               window: "#21202a",
            },
            light: {
               background: "#f5f5f5",
               window: "#dedfd5",
            },
         },
         backgroundColor: {
            white: {
               default: "#d1d1d1",
            },
            dark: {
               background: "#0a0a0a",
               window: "#0F0F0F",
            },
            light: {
               background: "#f5f5f5",
               window: "#0F0F0F",
            },
         },
         ringColor: {
            white: {
               default: "#d1d1d1",
            },
            dark: {
               background: "#0a0a0a",
               window: "#21202a",
            },
            light: {
               background: "#f5f5f5",
               window: "#0F0F0F",
            },
         },
         borderColor: {
            white: {
               default: "#d1d1d1",
            },
            dark: {
               background: "#0a0a0a",
               window: "#21202a",
               500: "#71717a",
               900: "#18181b",
            },
            light: {
               background: "#f5f5f5",
               window: "#0F0F0F",
               500: "#8e8e85",
               900: "#e7e7e4",
            },
         },
         borderWidth: {
            1: "1px",
         },
         height: {
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
         },
         width: {
            112: "24rem",
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
            208: "72rem",
            224: "80rem",
         },
         maxWidth: {
            112: "24rem",
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
            208: "72rem",
            224: "80rem",
         },
         maxHeight: {
            112: "24rem",
            128: "32rem",
            144: "40rem",
            152: "44rem",
            160: "48rem",
            176: "56rem",
            192: "64rem",
            208: "72rem",
            224: "80rem",
         },
         keyframes: {
            overlayShow: {
               from: { opacity: 0 },
               to: { opacity: 1 },
            },
            contentShow: {
               from: { opacity: 0, transform: "scale(0.96)" },
               to: { opacity: 1, transform: "scale(1)" },
            },
            contentFade: {
               from: { opacity: 0 },
               to: { opacity: 1 },
            },
            extendDown: {
               from: { transform: "translateY(-50%) scaleY(0%)" },
               to: { transform: "translateY(0) scaleY(100%)" },
            },
            extendUp: {
               from: { transform: "translateY(0) scaleY(0%)" },
               to: { transform: "translateY(50%) scaleY(100%)" },
            },
            extendLeft: {
               from: { transform: "translateX(50%) scaleX(0%)" },
               to: { transform: "translateX(0%) scaleX(100%)" },
            },
            extendRight: {
               from: { transform: "translateX(50%) scaleX(0%)" },
               to: { transform: "translateX(100%) scaleX(100%)" },
            },
            wiggle: {
               "0%": { transform: "translateX(-2px)" },
               "2%": { transform: "translateX(2px)" },
               "4%": { transform: "translateX(-2px)" },
               "6%": { transform: "translateX(0)" },
               "100": { transform: "translateX(0%)" },
            },
            rotateCross1: {
               from: { transform: "translateY(2px) rotate(0deg)" },
               to: { transform: "translateY(0) rotate(45deg)" },
            },
            rotateCross2: {
               from: { transform: "translateY(-2px) rotate(0deg)" },
               to: { transform: "translateY(0) rotate(-45deg)" },
            },
            strech: {
               "0%": { transform: "scaleX(1%)" },
               "20%": { transform: "scaleX(10%)" },
               "50%": { transform: "scaleX(5%)" },
               "80%": { transform: "initial" },
            },
         },
         animation: {
            overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            contentFade: "contentFade 150ms",
            rollDown: "rollDown 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            extendLeft: "extendLeft 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            extendRight: "extendRight 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            extendUp: "extendUp 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            extendDown: "extendDown 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            wiggle: "wiggle 3000ms infinite",
            rotateCross1: "rotateCross1 150ms",
            rotateCross2: "rotateCross2 150ms",
            strech: "stretch 600ms",
         },
      },
   },
   plugins: [],
};
