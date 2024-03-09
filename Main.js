function one(callback, value) {
  setTimeout(() => {
    console.log("one");
    callback(value + 10);
  }, 100);
}

function two(callback, value) {
  setTimeout(() => {
    console.log("two");
    callback(value + 10);
  }, 1000);
}

function three(callback, value) {
  setTimeout(() => {
    console.log("three");
    callback(value + 10);
  }, 2000);
}

function four(callback2, value) {
  setTimeout(() => {
    console.log("four");
    callback2(value + 10);
  }, 200);
}

function five(callback, value) {
  setTimeout(() => {
    console.log("THIS IS FUNCTION FIVE");
    callback(value);
  }, 2000);
}

function six(finalDAta) {
  setTimeout(() => {
    console.log("six", finalDAta);
  }, 500);
}

function seven(callback, value) {
  setTimeout(() => {
    console.log("seven");
    callback(value + 10);
  }, 500);
}

function nine(callback, value) {
  setTimeout(() => {
    console.log("nine");
    callback(value + 10);
  }, 500);
}

function ten(callback, value) {
  setTimeout(() => {
    console.log("ten");
    callback(value + 10);
  }, 500);
}

function eleven(callback, vlaue) {
  setTimeout(() => {
    console.log("eleven");
    callback(vlaue + 10);
  }, 500);
}

function tweleve(callback, value) {
  setTimeout(() => {
    console.log("tweleve");
    callback(value + 10);
  }, 500);
}

function thirteen(callback, value) {
  setTimeout(() => {
    console.log("thirteen");
    callback(value + 10);
  }, 500);
}

function fourteen(callback, value) {
  setTimeout(() => {
    console.log("fourteen");
    callback(value + 10);
  }, 500);
}

function fiftheen(callback, value) {
  setTimeout(() => {
    console.log("fiftheen");
    callback(value + 10);
  }, 500);
}

five(function (reslut1) {
  four(function (r2) {
    three(function (r3) {
      one(function (r4) {
        two(function (r5) {
          fiftheen(function (r6) {
            fourteen(function (r7) {
              thirteen(function (r8) {
                tweleve(function (r9) {
                  eleven(function (r10) {
                    ten(function (r11) {
                      nine(function (r12) {
                        seven(function (r13) {
                          six(r13);
                        }, r12);
                      }, r11);
                    }, r10);
                  }, r9);
                }, r8);
              }, r7);
            }, r6);
          }, r5);
        }, r4);
      }, r3);
    }, r2);
  }, reslut1);
}, 10);
