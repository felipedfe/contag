// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0'
//   }
// })




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

//   // https://vitejs.dev/config/
//   export default defineConfig({
//     plugins: [react()],
//     server: {
//       host: '0.0.0.0',
//       proxy: {
//         '/api': {
//           target: 'https://script.google.com/macros/s/AKfycbxCM4-7h7BJ-C7M8lby3zgsSg_zRkBdXhRtEGcrc4Fhsxj7Z4WuuSr8Gtv6s5NhbOwIFg/exec', // Substitua pela URL do seu Web App
//           changeOrigin: true,
//           rewrite: path => path.replace(/^\/api/, '')
//         }
//       }
//     }
//   });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/seraquevaichover/', 
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
});
