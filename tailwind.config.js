/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,vue,html}"],
  theme: {
    
    extend: {
      screens:{
        '4xl':'1500px',
      },
      fontFamily: {gotham: ['"Gotham"','"Gotham Bold"'], 
      gothamPro:['"GothamPro"','sans'], 
      sans: 'Helvetica, Arial, sans-serif' },
      colors:{
        buttonBlue: "#1551E5",
        buttonHoverBlue: "#316CFF",
        buttonDisable: "#E9ECF2",
        buttonTextDisable: "#B2BACE",
        heartColor: "#F2F6FF",
        inputBorderColor: "#E2E4F0",
        inputTextColor: "#828EAD",
        inputTextFilledColor: "#071435",
        inputTextActiveColor: "#1551E5",
        inputDisabledColor: "#F0F3FC",
        inputDisabledTextColor: "#F2F5F9",
        inputHoverColor: "#828EAD",
        inputErrorColor: "#FF608A",
        logoTextColor : "#171D45",
        textSupport: "#77829E",
        textHeader1Color: "#050D23",    
        footerTextColor: "#8F9BB3",                                 
      },
    },
  },
  plugins: [],
}

