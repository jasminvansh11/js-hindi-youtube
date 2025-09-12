// Immdiately Invoked Function Expression (IIFE)

(function chai(){
    //Named IIFE 
    console.log("DB CONNECTED")
})();

( (name) => {
    console.log(`DB 2 CONNECTED ${name}`);
})("jasmin")