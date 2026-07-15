/* Service worker del Dojo Katsuya Ishiyama.
   Estrategia: red primero, caché como respaldo (la app sigue abriendo sin conexión). */
var CACHE = "dojo-v1";

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(["./", "./index.html"]); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        var copia = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
        return res;
      })
      .catch(function () {
        return caches.match(e.request).then(function (r) {
          return r || caches.match("./index.html");
        });
      })
  );
});
