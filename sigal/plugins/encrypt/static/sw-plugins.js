Decryptor.requestHandler = (r) => {
    const BASEURL = "https://gallery-1253148367.file.myqcloud.com";

    let path = (new URL(r.url)).pathname;
    if (path.endsWith("/")) {
        path += "index.html";
    }
    return new Request(new URL(path, BASEURL), {
        method: r.method,
        headers: r.headers,
        body: r.body,
        mode: "cors",
        credentials: r.credentials,
        cache: r.cache,
        redirect: r.redirect,
        referrer: r.referrer,
        integrity: r.integrity
    });
};

Decryptor.responseHandler = (request, response, type, contexts) => {
    switch (type) {
        case "fetch-failed":
            if (request.destination === "image") {
                return Decryptor.imageErrorResponse.clone();
            } else {
                return response;
            }
        case "non-image":
        case "not-encrypted":
            Decryptor._addToCache(request, response.clone());
        default:
            return response;
    }
};