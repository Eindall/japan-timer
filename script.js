var departureDate = new Date("Mar 20, 2020 00:00:00").getTime();
var coeDate = new Date("Feb 28, 2020 00:00:00").getTime();

var months, days, hours, minutes, seconds;

var interval = setInterval(function() {
  var now = new Date().getTime();

  var departureDistance = parseInt((departureDate - now) / 1000);

  if (departureDistance >= 0) {
    months = parseInt(departureDistance / 2592000);
    departureDistance = departureDistance % 2592000;

    days = parseInt(departureDistance / 86400);
    departureDistance = departureDistance % 86400;

    hours = parseInt(departureDistance / 3600);
    departureDistance = departureDistance % 3600;

    minutes = parseInt(departureDistance / 60);
    departureDistance = departureDistance % 60;

    seconds = parseInt(departureDistance);

    document.getElementById("departure").innerHTML = "On est au Japon dans " + months + " mois, " + days + " jours, " + hours + " heures, " + minutes + " minutes et " + seconds + " secondes !";
  } else {
    document.getElementById("departure").innerHTML = "ON EST AU JAPON AYAYA";
  }
}, 1000);

var coeInterval = setInterval(function() {
  var now = new Date().getTime();

  var coeDistance = parseInt((coeDate - now) / 1000);

  if (coeDistance >= 0) {
    months = parseInt(coeDistance / 2592000);
    coeDistance = coeDistance % 2592000;

    days = parseInt(coeDistance / 86400);
    coeDistance = coeDistance % 86400;

    hours = parseInt(coeDistance / 3600);
    coeDistance = coeDistance % 3600;

    minutes = parseInt(coeDistance / 60);
    coeDistance = coeDistance % 60;

    seconds = parseInt(coeDistance);

    document.getElementById("coe_release").innerHTML = "On devrait recevoir notre CoE dans environ " + months + " mois, " + days + " jours, " + hours + " heures, " + minutes + " minutes et " + seconds + " secondes !";
  } else {
    document.getElementsById("coe_release").innerHTML = "ON A NOTRE COE AYAYA";
  }
}, 1000);