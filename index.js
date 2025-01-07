for (var i = 0; i < 3; i++) {
    setTimeout((function (i) {
        console.log(999,i);
        return function () {
            console.log(i);
        };
    })(i), 1000);
}





