// Day 7 Notes
// JB
// 2.1.2016

var number1 = 4.4;
var number2 = 1.2;

function add(a, b) {
  var c = a + b;
  return c;
}

function main() {
  var result = add(number1, number2);
  result = Math.round(result)
  if(result >= 0) {
    console.log("postive");
  } else {
    console.log("negative")
  }
  console.log(result);
}

var cond = "a";
switch(cond) {
    case "a":
        //do something for case a
        console.log("case a")
        break;
        //fall-through
    case "b":
        //do something for case b
        console.log("case b")
        break;
    case "c":
        //do something for case c
        console.log("case c")
        break;
    default:
        console.log("default")
        //do default
        break;
}

    while(false) {
      console.log("hello");
    }

    do {
      console.log("world")
    } while(false)

for(var i = 0; i < 10; i++) {
  console.log(i);
}



//main ();
