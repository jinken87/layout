if('serviceWorker' in navigator) navigator.serviceWorker.register('/layout/dev-sw.js?dev-sw', { scope: '/layout/', type: 'classic' })