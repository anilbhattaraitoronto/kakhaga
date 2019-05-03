let cacheName = "LNv2";
let cachedFiles = [
    '/',
    './index.html',
    './manifest.json',
    './main.css',
    './main.js',
    './register_sw.js',
    './sw.js',
    './pictures/nepal_flag.svg',
    './pictures/nepal_flag.png',
    './pictures/vowels/aalu.svg',
    './pictures/vowels/aduwa.png',
    './pictures/vowels/aihna.png',
    './pictures/vowels/anka.png',
    './pictures/vowels/aujar.png',
    './pictures/vowels/ehk.png',
    './pictures/vowels/ita.png',
    './pictures/vowels/okhar.png',
    './pictures/vowels/oon.png',
    './pictures/vowels/unt.png',
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
self.addEventListener('activate', function (event) {
    console.log('Service Worker Activated');
    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key != cacheName) {
                    console.log('Removing Old Cache', key);
                    return caches.delete(key)
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log('Fetch Event occurred' + event.request.url)
    event.respondWith(
        caches.match(event.request)
    );
});