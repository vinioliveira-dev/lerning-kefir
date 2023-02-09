import kefir from "kefir";

// Variables to store access to DOM elements:
const click_button = document.getElementById('clicker');
const output_element = document.getElementById('counter');
const reset_button = document.getElementById('reset');

// Create observables for listening to 'click' events
const click_s = kefir.fromEvents(click_button, 'click');
const reset_s = kefir.fromEvents(reset_button, 'click');

// Counting the amount of clicks
const counting_click_s = click_s.scan(sum => sum + 1, 0);

// Showing the amount of clicks on the display
