(function () {
  var holder = document.createElement("div");
  var button = document.createElement("button");
  var input = document.createElement("input");

  //give elements text
  button.innerHTML = "start";
  input.placeholder = "set timer (minutes)";

  //assign id and append to body
  input.setAttribute('id', 'input')
  document.body.appendChild(button);
  document.body.appendChild(input);
  document.body.appendChild(holder);


  var interval;

  //listen for click event, then run timer
  button.addEventListener('click', function() {

    //clear previous timer
    clearInterval(interval);

    //get user input of minutes
    var value =
    document.getElementById('input').value;
    document.getElementById('input').value = '';

    //check if user input was blank, if not, run timer
    if(value != '' && parseInt(value) > 0) {
      holder.innerHTML = '';
      var count = value * 60;

    // start timer, create values, show them, decream counter
      interval = setInterval(function(){
          var seconds = count % 60;
          var minutes = count / 60;
          var hours = (count/60) / 60;

          //if input of minutes is more than one hour
          if(minutes >=60) {
            minutes = minutes % 60;
          }

          //print current time left to holder
          holder.innerHTML = Math.floor(hours) + '<br>hours<br>' + Math.floor(minutes) + '<br>minutes<br>' + seconds + '<br>seconds<br>';

          //decrease count by 1
          count--;

          //when timer hits zero
          if(count == 0){
            holder.innerHTML = "DONE";
            clearInterval(interval);
          }
      }, 1000);

    } else {
      holder.innerHTML = '';
    }




  });



})();
