import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
    plugins: [
        astro(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'RESICO Calc',
                short_name: 'RESICO',
                description: 'A simple RESICO calculator',
                theme_color: '#ecf0f3',
                icons: [
                    {
                        src: '/icons/favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-57x57.png',
                        sizes: '57x57',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-70x70.png',
                        sizes: '70x70',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-96x96.png',
                        sizes: '96x96',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-114x114.png',
                        sizes: '114x114',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-120x120.png',
                        sizes: '120x120',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-180x180.png',
                        sizes: '180x180',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-310x310.png',
                        sizes: '310x310',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png'
                    },
                    {
                        src: '/icons/favicon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
});
