var countdownDate = new Date("Mar 22, 2020 00:00:00").getTime();

var months, days, hours, minutes, seconds;

var interval = setInterval(function() {
  var now = new Date().getTime();
  
  var distance = parseInt((countdownDate - now) / 1000);

  if (distance >= 0) {
    months = parseInt(distance / 2592000);
    distance = distance % 2592000;

    days = parseInt(distance / 86400);
    distance = distance % 86400;

    hours = parseInt(distance / 3600);
    distance = distance % 3600;

    minutes = parseInt(distance / 60);
    distance = distance % 60;

    seconds = parseInt(distance);

    document.getElementById("display").innerHTML = "On est au Japon dans " + months + " mois, " + days + " jours, " + hours + " heures, " + minutes + " minutes et " + seconds + " secondes !";
  }
}, 1000);