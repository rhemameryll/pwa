self.addEventListener('install', (e) => {
    console.log('Service Worker Installed!');
    
    e.waitUntil(
        caches.open('static')
        .then(cache => {
            return cache.addAll([
                './index.html',
                './assets/css/reset.css',
                './assets/images/logo256.png'
            ]);
        })
    );
});

self.addEventListener('activated', (e) => {
    console.log('Service Worker Activated!');
});

self.addEventListener('fetch', (e) => {
    console.log('Intercepting Fetch Request: ' + e.request.url);

    caches.match(e.request)
    .then(res => {
        return res || fetch(e.request);
    });
});