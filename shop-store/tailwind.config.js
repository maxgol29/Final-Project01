/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'macBook': "url('./images/SlideShow/MacBookSlide.jpg')",
        'iphone': "url('/images/SlideShow/IphoneSlide.jpg')",
        'appleWatch': "url('/images/SlideShow/AppleWatch.jpg')",
        'rediphone': "url('https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_1352,h_702,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg')",
        'purpleHeadphone': "url('https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_1352,h_702,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg')",
        'bannerPhoto': "url('https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1745,h_668,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg')",
        'headphones': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlEsMpSd5zfUEm1QGOeGHQsDVfA-efH28vQ&s')",
      },
      theme: {
        letterSpacing: {
          '1': '0em',
          '2': '0.025em',
          '3': '0.05em',
          '4': '0.1em',
          '56': '13em'
        },
    },
  },
  plugins: [],
},
}
