const customOnce = (function() {
    let value;
    let executed = false;
    return function(a,b) {
        if (!executed) {
            executed = true;
            value = a + b;
            console.log(value);
        } else {
            console.log(value);
        }
    };
})();

customOnce(1,2);
customOnce(2,2);