let cacheName = "LNv2";
let cachedFiles = [
    './kakhaga',
    './kakhaga/index.html',
    './kakhaga/manifest.json',
    './kakhaga/main.css',
    './kakhaga/main.js',
    './kakhaga/register_sw.js',
    './kakhaga/pictures/nepal_flag.svg',
    './kakhaga/pictures/nepal_flag.png',
    './kakhaga/pictures/vowels/aalu.svg',
    './kakhaga/pictures/vowels/aduwa.png',
    './kakhaga/pictures/vowels/aihna.png',
    './kakhaga/pictures/vowels/anka.png',
    './kakhaga/pictures/vowels/aujar.png',
    './kakhaga/pictures/vowels/ehk.png',
    './kakhaga/pictures/vowels/ita.png',
    './kakhaga/pictures/vowels/okhar.png',
    './kakhaga/pictures/vowels/oon.png',
    './kakhaga/pictures/vowels/unt.png',
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