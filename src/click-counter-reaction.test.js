import _sinon from 'sinon';
import test from 'tape';

import { click_btn, count_display, reset_btn } from './click-counter-reaction';

test('test click counter reaction', (t) => {

    t.test('checking the default values of our variables for DOM elements', (t) => {
        
        //testing the default value of our variables:
        t.equal(typeof click_btn, 'object', 'should be an object');
        t.equal(typeof count_display, 'object', 'should be an object');
        t.equal(typeof reset_btn, 'object', 'should be an object');
        t.end();
    });

    t.test('checking if the DOM elements are being correctly accessed', (t) => {

        //estabilishing expected id's
        const click_expected_id = 'click';
        const count_display_expected_id = 'count-display';
        const reset_expected_id = 'reset';

        //estabilishing actual id's
        const click_actual_id = click_btn.id;
        const count_actual_id = count_display.id;
        const reset_actual_id = reset_btn.id;

        //checking the assertions
        t.deepEqual(click_actual_id, click_expected_id, 'should be "click"');
        t.deepEqual(count_actual_id, count_display_expected_id, `should be "count-display"`);
        t.deepEqual(reset_actual_id, reset_expected_id, `should be "reset"`);
    });

});