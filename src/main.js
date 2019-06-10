import { DoctorLookup } from './doclookup.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('#showDoctors').text("");
    let doctorName = $('#drname').val();
    $('#drname').val("");

    let doctorLookup = new DoctorLookup();  // create instance of WeatherService class
    let promise = doctorLookup.findDoctor(doctorName);  // call the instance method and pass in user input

    promise.then(function(response) {
      body = JSON.parse(response);
      //why is body undefined???
      if(body.data.length === 0) {
        $('#showDoctors').text(`There are no doctors in your area that match your search parameters.`)
      }
  });

});
});
