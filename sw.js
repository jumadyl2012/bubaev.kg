const CACHE_NAME = 'v1_bubaev_school';
const urlsToCache = [
  'index.html',
  'manifest.json'
];

// Орнотуу (Install)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ресурстарды алуу (Fetch)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
