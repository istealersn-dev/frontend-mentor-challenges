import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["*{.html,.js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "moderate-violet": "hsl(263, 55%, 52%)",
        "dark-greyish-blue": "hsl(217, 19%, 35%)",
        "dark-blackish-blue": "hsl(219, 29%, 14%)",
        White: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
        bcolor: "hsl(264, 82%, 70%)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        medium: "500",
        "semi-bold": "600",
      },
      fontSize: {
        xs: ".6875rem",
        sm: ".8125rem",
        xl: "1.25rem",
      },
      boxShadow: {
        'shadow-2xl': '40px 60px 50px -47px rgba(72,85,106, 0.25)'
      }
    },
  },
  plugins: [],
} satisfies Config;
