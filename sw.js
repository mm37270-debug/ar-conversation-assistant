const CACHE_NAME = 'suho-v1';
const urlsToCache = [
  '/ar-conversation-assistant/',
  '/ar-conversation-assistant/index.html',
  '/ar-conversation-assistant/prototype.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
