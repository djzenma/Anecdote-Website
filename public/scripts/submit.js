$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        let username = $("#username").val();
        let confess = $("#confession").val();
        var user = {name: username, img: "img.jpg", confession: confess};

        // $.post('/api', JSON.stringify(user), function (data, status) {
        //     console.log("$ " + data.name);
        // }, 'json');
        $.ajax({
            type: 'POST',
            data: JSON.stringify(user),
            contentType: 'application/json',
            url: '/api',
            success: function (res) {
                console.log("$ "+res);
            }
        });
    });
});
