// Injecting
javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')

// Request

jQuery.ajax({
    url: "https://api.galaxyonline.io/user/auth/telegram",
    crossDomain: true,
    headers: {
        'X-CSRF-TOKEN': '3yehBBTuAkJjFHFlyhLgEjtk7E6A70Ha5x5EWB2P',
    },
    method: "post",
    data: {
        asd: 123
    }
});

jQuery.ajax({
    url: "https://api.galaxyonline.io/user/auth/telegram-step2?id=12155",
    crossDomain: true,
    headers: {
        'X-CSRF-TOKEN': 'G64ym6ElX94tDQjhqzooK0weCfFJEqKy5scjuMdr',
    },
});
