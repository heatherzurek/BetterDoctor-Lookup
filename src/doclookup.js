$(document).ready(function() {
  $('#doctorLookup').click(function() {
    const medicalNeed = $('#need').val();
    $('#need').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${drName}&query=${medIssue}&location=or-portland&sort=last-name-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${medicalNeed} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });
});
