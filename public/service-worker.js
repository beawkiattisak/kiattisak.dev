const CACHE_NAME = "kiattisak-offlinepage"
const OFFLINE_PAGE = "/static/offline-page.html"
const OFFLINE_CACHES = [
  OFFLINE_PAGE
]

this.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(OFFLINE_CACHES);
  })())
})

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    if ("navigationPreload" in self.registration) {
      await self.registration.navigationPreload.enable()
    }
  })())

  self.clients.claim()
})

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
      event.respondWith((async () => {
      try {
        const preloadResponse = await event.preloadResponse

        if (preloadResponse) return preloadResponse

        return await fetch(event.request)
      } catch (error) {
        const cache = await caches.open(CACHE_NAME)
        return await cache.match(OFFLINE_PAGE)
      }
      })())
    }
})