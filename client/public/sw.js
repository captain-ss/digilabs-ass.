let cacheData= "appV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/index.html",
                "/static/media/image1.3110049ad701368f70097c81198f72a8.svg",
                "/static/media/Banner.bc9912d1f8ef63283bdc78da357b429e.svg",
                "/"
            ])
        })
    )
})
this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp;
            }
        })
    )
})