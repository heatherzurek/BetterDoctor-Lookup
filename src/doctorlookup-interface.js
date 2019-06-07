import { DoctorLookup } from './doclookup.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#doctorLookup').click(function() {
    let city = $('#medicalNeed').val();
    $('#medicalNeed').val("");


    let doctorLookup = new DoctorLookup();  // create instance of DoctorLookup class
    let promise = doctorLookup.getDoctorByNeed(need);  // call the instance method and pass in user input

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showDoctor').text(`Name: ${name}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
