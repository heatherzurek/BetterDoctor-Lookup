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
      //why is body undefined???
      if(body.data.length === 0) {
        $('#showDoctors').text(`There are no doctors in your area that match your search parameters.`);
      }
    });

  });
});
