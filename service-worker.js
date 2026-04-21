const CACHE_NAME = 'police-fitness-tracker-v2';
const APP_FILES = [
  './',
  './police-fitness-tracker.html',
  './manifest.webmanifest',
  './service-worker.js',
  './icon-192.svg',
  './icon-512.svg',
  './fpd-logo.jpg'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./police-fitness-tracker.html')))
  );
});
