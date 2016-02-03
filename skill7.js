//

var count = 0;

function myClickUpHandler(event) {
  count ++;
  document.getElementById("myCount").innerHTML = count;
  printPyramid(count);
}

document.getElementById("myBtnUp").onclick = myClickUpHandler;
//end of click up

function myClickDownHandler(event) {
  count --;
  document.getElementById("myCount").innerHTML = count;
  printPyramid(count);
}

document.getElementById("myBtnDown").onclick = myClickDownHandler;
//end of click down


function myClickResetHandler(event) {
//      alert("working?");
//function printReset() {
  outString="";
  count=0;
  //return myCount;
//}
//printReset();
document.getElementById("myCount").innerHTML = count;
printPyramid(count);
}
document.getElementById("myBtnReset").onclick = myClickResetHandler;





function printPyramid(cnt) {
	var outString = "";
	for (var j = 0; j<cnt; j++) {
		outString += "<p>";
		for(var k = 0; k<=j; k++) {
			outString += "#";
		}
		outString += "</p>";
	}
  //print to page
	document.getElementById("myPyramid").innerHTML = outString;
}
