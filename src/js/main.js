import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';
import Age from './calculator.js';


$('.btn').click(function(event1) {
  event1.preventDefault();
  const clk = $(this).attr('id');
  const name = $('#name').val();
  const age = $('#age').val();
  const gender = $('#gender').val();
  if (!gender || gender === 'none' || !age || isNaN(age) || !name) {
    $('form')[0].reset();
    return alert(`Make sure you don't leave empty fields and all information is correct!`);
  }
  let spaceAge = new Age(age, gender);

  if (clk === 'Earth') {
    $('.card-title').text(`${clk}`);
    $('.card-text').html(`<p>${name}, you are ${spaceAge.years} years old on ${clk}</p>
    <p>Approximate time left to live for you - ${spaceAge.expect} years`);
  } else {
    alert("later");
  }
  $('form').hide();
  $('#output').show();

  $('#again').click(function(event2) {
    event2.preventDefault();
    $('#output').hide();
    $('form')[0].reset();
    $('form').show();
  });
});