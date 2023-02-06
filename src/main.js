// Set initiall scroll to the middle
$(window).scrollTop(20000);


// Base *scroll + time* Property
// (Now the base property will depend on both scroll and time)


// Base property 1

function getTime() {
    return Date.now();
}

var timeBasedTime = Kefir
    .fromPoll(500, getTime)
    .toProperty(getTime);


// Base property 2

$window = $(window);

function getScroll() {
    return $window.scrollTop();
}

var curScroll = Kefir
    .fromEvents($window, 'scroll', getScroll)
    .toProperty(getScroll);
    
var scrollBasedTime = curScroll.map(function(scroll) {
    return scroll * 1000;
});


// Combined base property

var randomOffset = Math.floor((Math.random() - 0.5) * 1000 * 60 * 60 * 12);

var curTime = Kefir.combine([timeBasedTime, scrollBasedTime], function(time, scroll) {
    return randomOffset + time + scroll;
}).toProperty();




// ---------------- all below is same as in previous examples -----------------
// --- ( http://jsfiddle.net/vyppkj0k/3/, http://jsfiddle.net/vyppkj0k/4/ ) ---

// Arrows angle Property

function timeToAngles(timestamp) {
    var date = new Date(timestamp);
    var seconds = date.getSeconds();
    var minutes =  date.getMinutes() + seconds / 60;
    var hours = date.getHours() + minutes / 60;
    return {
        seconds: 360 * seconds / 60,
        minutes: 360 * minutes / 60,
        hours: 360 * hours / 12,
    };
}

var angles = curTime.map(timeToAngles);



// Side effects

$seconds = $('.seconds');
$minutes = $('.minutes');
$hours = $('.hours');

function rotateStr(angle) {
    return 'rotate(' + angle + 'deg)';
}

angles.onValue(function(a) {
    $seconds.css('transform', rotateStr(a.seconds));
    $minutes.css('transform', rotateStr(a.minutes));
    $hours.css('transform', rotateStr(a.hours));
});