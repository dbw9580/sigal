"use strict"
importScripts("static/decrypt.js", "static/sw-plugins.js");
oninstall = Decryptor.onServiceWorkerInstall;
onactivate = Decryptor.onServiceWorkerActivate;
onfetch = Decryptor.onServiceWorkerFetch;
onmessage = Decryptor.onServiceWorkerMesssage;
Decryptor.init({});
