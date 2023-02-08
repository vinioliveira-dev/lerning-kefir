import Kefir from 'kefir';

// Variables for HTML elements:
const click_btn = document.getElementById('click');
const count_display = document.getElementById('count-display');
const reset_btn = document.getElementById('reset');


// TO CREATE A STREAM: 

// It will begin with the click interaction made by the user:
const button_clicks = Kefir.fromEvents(click_btn, 'click');

// We need to count the amount of clicks:

const clicks_count = button_clicks.scan(sum => sum + 1, 0);
//Quick note: the '.scan' method from Kefir was used because
//it keeps kind of an "internal state" to store the count amount

// Now to show the count correctly, we need to subscribe for changes of the clicks count value:
clicks_count
    .onValue ((x) => {
        count_display.innerText = x;
    })
    .onError( (err) => {
        count_display.innerText = err;
    });


export { click_btn, count_display, reset_btn, clicks_count };