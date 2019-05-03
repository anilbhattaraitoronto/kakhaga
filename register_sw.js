if (navigator.serviceWorker) {
    //register the service worker
    navigator.serviceWorker.register('./sw.js')
        .then(function (result) {
            console.log("service worker registered");
            console.log('Scope ' + result.scope);
        }, function (error) {
            console.log("service worker registration failed!");
            console.log(error);
        });
} else {
    console.log("Service Workers not supported");
}