// function
function addition(a, b, cb) {
    var result;
    result = a + b;
    cb(result);
}
addition(1, 3, function (result) {
    console.log(result);
});
