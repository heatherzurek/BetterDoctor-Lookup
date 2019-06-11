import { DoctorLookup } from './doclookup.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#drSearch').submit(function(event) {
    event.preventDefault();
    $('#showDoctors').text("");
    let doctorName = $('#drname').val();
    $('#drname').val("");

    let doctorLookup = new DoctorLookup();
    let promise = doctorLookup.findDoctor(doctorName);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $('#showDoctors').text("There are no doctors in your area that match your search.");
      }
      body.data.forEach(function (data) {
        console.log(data.profile.first_name);
        console.log(data.profile.last_name);
        $('#showDoctors').append(`${data.profile.first_name} ${data.profile.last_name}<br>`);
      },

      function (error) {
        $('#apiError').text(`Error ${error.message}`);
      });
    });

  });
});
