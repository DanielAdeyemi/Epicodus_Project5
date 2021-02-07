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

  $('.card-title').text(`${clk}`);
  switch (true) {
    case (clk === 'Earth' && spaceAge.expect >= 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.years} years old on ${clk}</p>
      <p>Approximate time left to live for you - ${spaceAge.expect} year(s)</p>`);
      break;
    case (clk === 'Earth' && spaceAge.expect < 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.years} years old on ${clk}</p>
      <p>You overlived your average expectancy by ${-spaceAge.expect} year(s).</p>`);
      break;
    case (clk === 'Mercury' && spaceAge.expect >= 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.mercuryAge()[0]} years old on ${clk}</p>
      <p>Approximate time left to live for you - ${spaceAge.mercuryAge()[1]} year(s)</p>`);
      break;
    case (clk === 'Mercury' && spaceAge.expect < 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.mercuryAge()[0]} years old on ${clk}</p>
      <p>You overlived your average expectancy by ${spaceAge.mercuryAge()[1]} year(s).</p>`);
      break;
    case (clk === 'Venus' && spaceAge.expect >= 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.venusAge()[0]} years old on ${clk}</p>
      <p>Approximate time left to live for you - ${spaceAge.venusAge()[1]} year(s)</p>`);
      break;
    case (clk === 'Venus' && spaceAge.expect < 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.venusAge()[0]} years old on ${clk}</p>
      <p>You overlived your average expectancy by ${spaceAge.venusAge()[1]} year(s).</p>`);
      break;
    case (clk === 'Mars' && spaceAge.expect >= 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.marsAge()[0]} years old on ${clk}</p>
      <p>Approximate time left to live for you - ${spaceAge.marsAge()[1]} year(s)</p>`);
      break;
    case (clk === 'Mars' && spaceAge.expect < 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.marsAge()[0]} years old on ${clk}</p>
      <p>You overlived your average expectancy by ${spaceAge.marsAge()[1]} year(s).</p>`);
      break;
    case (clk === 'Jupiter' && spaceAge.expect >= 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.juniperAge()[0]} years old on ${clk}</p>
      <p>Approximate time left to live for you - ${spaceAge.juniperAge()[1]} year(s)</p>`);
      break;
    case (clk === 'Jupiter' && spaceAge.expect < 0):
      $('.card-text').html(`<p>${name}, you are ${spaceAge.juniperAge()[0]} years old on ${clk}</p>
      <p>You overlived your average expectancy by ${spaceAge.juniperAge()[1]} year(s).</p>`);
      break;
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