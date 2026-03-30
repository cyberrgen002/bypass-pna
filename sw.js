self.addEventListener('fetch', event => {
    const request = event.request;

    // hanya intercept same-origin request
    if (!request.url.startsWith(self.location.origin)) {
        return;
    }

    // forward request tanpa validasi tambahan
    event.respondWith(fetch(request));
});
