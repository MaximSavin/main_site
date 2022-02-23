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
