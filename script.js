import Kefir from "kefir";

// Variables to store access to DOM elements:
const click_button = document.getElementById('clicker');
const output_element = document.getElementById('counter');
const reset_button = document.getElementById('reset');

// Create observables for listening to 'click' events
const click_s = Kefir.fromEvents(click_button, 'click');
const reset_s = Kefir.fromEvents(reset_button, 'click');

// Counting the amount of clicks
const counting_click_s = click_s.scan(sum => sum + 1, 0);


counting_click_s
    .takeUntilBy(reset_s)
    .onValue(count => {
        output_element.innerHTML = count
    })
    .merge([counting_click_s, reset_s]);