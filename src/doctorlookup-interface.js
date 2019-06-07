// import { DoctorLookup } from './doclookup.js';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
//
//
// $(document).ready(function() {
//   $('#medicalCondition').click(function() {
//     let input = $('#condition').val();
//     $('#condition').val("");
//     let doctorLookup = new DoctorLookup();
//     let promise = doctorLookup.medicalCondition(input);
//     promise.then(function(response) {
//       let body = JSON.parse(response);
//       let data = body.data;
//       if (data.length > 0) {
//         $('#medicalConditionSearch').html(`<p>doctors who specialize in: ${input}</p>`);
//         for (let i=0; i < data.length; i++){
//           $('.showMedicalCondition').append(`<li>${data[i].profile.first_name} ${data[i].profile.last_name}<ul><li>${data[i].practices[0].visit_address.street} ${data[i].practices[0].visit_address.city} ${data[i].practices[0].visit_address.state}</li> <li>${data[i].practices[0].phones[0].number}</li> <li>Accepts New Patients? ${data[i].practices[0].accepts_new_patients}</li></li>`);
//         }
//       } else {
//           $('#medicalConditionSearch').html(`<h4>Sorry, there are no doctors that can help with ${input}</h4>`);
//       }
//
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//     });
//   });
//
// });
