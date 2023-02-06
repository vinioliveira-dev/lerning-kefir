import kefir from "kefir";

var btn_clicks = kefir.fromEvents(document.querySelector('#btn'), 'click');

var input_value = kefir.fromEvents(document.querySelector('#input-field'), 'keyup').map(event => event.target.value);

var clicks_count = btn_clicks.scan(sum => sum + 1, 0);

var input_number = input_value.map(text => parseInt(text, 10));

var fixed_input_number = input_number.flatMap(
    x => isNaN(x)
    ? kefir.constantError('not a number')
    : kefir.constant (x)
);

var multiply_result = kefir.combine([fixed_input_number, clicks_count], (a, b) => a + b);

var multiplier_display_div = document.querySelector('#number-mult');

multiply_result
    .onValue (x => {
        multiplier_display_div.innerHTML = x;
    })

    .onError (err => {
        multiplier_display_div.innerHTML = `<span style="color:red">${err}</span>` 
    });