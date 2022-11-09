/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mytheme: {
          

 
      "primary": "#0f38dd",
                
      
       
      "secondary": "#f43dba",
                
      
       
      "accent": "#4a86bf",
                
      
       
      "neutral": "#1A191F",
                
      
       
      "base-100": "#3B3A40",
                
      
       
      "info": "#74BDDC",
                
      
       
      "success": "#208854",
                
      
       
      "warning": "#EA9610",
                
      
       
      "error": "#E92020",
                },
    extend: {},
  },
  plugins: [require("daisyui")],
}
