/**
 *    ___  __    _____  __  __  ____  _  _  ____  ____
 *   / __)(  )  (  _  )(  )(  )(  _ \( )/ )(_  _)(_  _)
 *  ( (__  )(__  )(_)(  )(__)(  )(_) ))  (  _)(_   )(
 *   \___)(____)(_____)(______)(____/(_)\_)(____) (__)
 * 
 *  @author     Cloudkit Team
 *  @package    Service Worker
 *  @version    1.0.0
 */

const cacheName = "cloudkit-1.0.0";
const cacheList = [
    "/",
    "/assets/img/icon.png",
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.css",
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "/assets/css/style.css",
    "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.global.prod.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.12/vue-router.global.prod.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/addons/fit/fit.min.js",
    "/assets/js/script.js",
    "https://fonts.gstatic.com/s/jetbrainsmono/v6/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2",
    "https://fonts.gstatic.com/s/jetbrainsmono/v6/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTPlOVgaY.woff2",
    "https://fonts.gstatic.com/s/jetbrainsmono/v6/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOVOVgaY.woff2",
    "https://fonts.gstatic.com/s/jetbrainsmono/v6/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNVOVgaY.woff2",
    "https://fonts.gstatic.com/s/jetbrainsmono/v6/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNFOVgaY.woff2",
    "https://fonts.gstatic.com/s/jetbrainsmono/v6/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2",
];

self.addEventListener("install", (e) => {

    // Show debug message.
    console.log("[SW] Installation.");

    // Force the waiting service worker to become the active service worker.
    self.skipWaiting();

    // Cache ressources.
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheList);
        })
    );
});

self.addEventListener("activate", e => {

    // Show debug message.
    console.log("[SW] Activation.");

    // Force the deactivation of preloading.
    if (self.registration.navigationPreload)
        self.registration.navigationPreload.disable();

    // Purge caches.
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key != cacheName)
                    return caches.delete(key);
            }));
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {

            // Return cached response or fetch.
            return response || fetch(e.request);
        })
    );
});
