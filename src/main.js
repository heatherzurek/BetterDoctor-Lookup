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
        let website = "";
        if (data.practices[0].website === undefined) {
          website = 'No website available';
        }

        let newPatients = "";
        if (data.practices[0].accepts_new_patients === true){
          newPatients = 'Yes';
        } else {
          newPatients = 'No';
        }

        $('#showDoctors').append(`<strong>Name:</strong>
          ${data.profile.first_name} ${data.profile.last_name}<br>
          <strong>Bio:</strong>
          ${data.profile.bio}<br>
          <strong>Specialties:</strong>
          ${data.specialties[0].name}<br>
          <strong>Address:</strong>
          ${data.practices[0].visit_address.street}
          ${data.practices[0].visit_address.city},
          ${data.practices[0].visit_address.state}
          ${data.practices[0].visit_address.zip}<br>
          <strong>Phone Number:</strong>
          ${data.practices[0].phones[0].number}<br>
          <strong>Website:</strong>
          ${website}<br>
          <strong>Accepts New Patients:</strong>
          ${newPatients}<br><hr>`);
      },

      function (error) {
        $('#apiError').text(`Error ${error.message}`);
      });
    });

  });
});
