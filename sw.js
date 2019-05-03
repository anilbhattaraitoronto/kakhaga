let cacheName = "LNv1";
let cachedFiles = [
    '/',
    '/index.html',
    '/manifext.json',
    '/main.css',
    '/main.js',
    '/register_sw.js',
    '/pictures/nepal_flag.svg',
    '/pictures/nepal_flag.png',
    '/pictures/vowels/aalu.svg',
    '/pictures/vowels/aduwa.png',
    '/pictures/vowels/aihna.png',
    '/pictures/vowels/anka.png',
    '/pictures/vowels/aujar.png',
    '/pictures/vowels/ehk.png',
    '/pictures/vowels/ita.png',
    '/pictures/vowels/okhar.png',
    '/pictures/vowels/oon.png',
    '/pictures/vowels/unt.png',
];
self.addEventListener('install', function (event) {
    console.log('Service Worker Install Event');
    //add file to the cache
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('Caching files');
            return cache.addAll(cachedFiles);
        }).then(function () {
            return self.skipWaiting();
        }).catch(function (err) {
            console.log('Cache failed', err);
        })
    );
});