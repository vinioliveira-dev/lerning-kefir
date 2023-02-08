import Kefir from 'node_modules/kefir';

// Variables for HTML elements:
const click_btn = document.getElementById('click');
const count_display = document.getElementById('count-display');
const reset_btn = document.getElementById('reset');

// Listeners for the events we want to capture:
const button_click_s = Kefir.fromEvents(click_btn, 'click');

const reset_click_s = Kefir.fromEvents(reset_btn, 'click');

// We need to count the amount of clicks:
const count_s = button_click_s.scan(sum => sum + 1, 0);

console.log(count_s);

// 

export { click_btn, count_display, reset_btn };