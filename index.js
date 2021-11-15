if('serviceWorker' in navigator) {

    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Service Worker Registered!');
        console.log(reg);
    })
    .catch(err => {
        console.log('Service Worker Registration Failed!');
        console.log(err);
    });

}