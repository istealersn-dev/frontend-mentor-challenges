import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1440px'
    },
    colors: {
      almostBlack: '#141414',
      almostWhite: '#FAFAFA',
      mediumGray: '#696969'
    },
    fontSize: {
      '2xl': [
        '80px',
        {
          lineHeight: '80px',
          letterSpacing: '-1.11px',
          fontWeight: 700
        },
      ],
      xl: [
        '36px',
        {
          lineHeight: '42px',
          letterSpacing: '-0.5px'
        },
      ],
      'p-lg': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: 500
        },
      ],
      'p-sm': [
        '16px',
        {
          lineHeight: '26px',
          fontWeight: 500
        },
      ],
      'cta-sm': [
        '14px', {
          lineHeight: '16px',
          fontWeight: 500
        }
      ]
    },
    fontWeight: {
      medium: '500',
      bold: '700',
    },
    borderRadius: {
      def: '15px',
      sm: '10px'
    },
    extend: {
      boxShadow: {
        'mxl': '0 10px 40px 0 rgba(0, 0, 0, 0.14)'
      }
    },
  },
  plugins: [],
};
export default config;
