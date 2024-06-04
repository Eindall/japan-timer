var departureDate = new Date('November 4, 2024 11:20:00').getTime();

var months, days, hours, minutes, seconds;

var interval = setInterval(function () {
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

    document.getElementById(
      'departure'
    ).innerHTML = `On part au Japon dans ${months} mois, ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes !`;
  } else {
    document.getElementById('departure').innerHTML = 'ON EST AU JAPON AYAYA';
  }
}, 1000);
