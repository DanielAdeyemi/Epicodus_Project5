import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import Age from './calculator.js';


$('form').submit(function(event1) {
  event1.preventDefault();
  const age = $('#age').val();
  const gender = $('#gender').val();
  if (!gender || gender === 'none') {
    alert(`We can't calculate your age just yet!`);
  }
  let spaceAge = new Age(age, gender);
  $('#output').text(`${spaceAge.years}, ${spaceAge.expect}`);
});