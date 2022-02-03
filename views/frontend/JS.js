$("#login").click(function () {
    var data = ($('input[name=username]').val()) + ($('input[name=password]').val());
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/login',
        data: data,
        dataType: 'text'
    })
        .done(function (data) {
            $('h1').html(data.username);
        });
});

$("#signIn").click(function () {
    
});