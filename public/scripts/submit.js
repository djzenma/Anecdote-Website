
$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        let username = $("#username").val();
        let confess = $("#confession").val();
        $("#username").val("");
        $("#confession").val("");

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
                item = res[res.length-1];
                $('main').append(createConfession(item.name, item.confession));
            }
        });
    });
});

function createConfession(name, confession){
    return `  <div class="row">
         <article class="container col-sm-10 col-md-8 col-lg-6 card list-group-flush mb-5 w-75">
             <div class="card-header row">
                 <div class="col-3 col-lg-2">
                     <div class="row">
                        <img class="col-12 col-sm-8 offset-sm-2 col-lg-7 rounded-circle" style="height: 50px;" src="images/<%= user.img %>" alt="person's img">
                     </div>
                 </div>
                 <h2 class="col" style="font-size: 1.7rem;">${name}</h2>
             </div>
            <div class="card-body">
                <p class="card-text" style="margin-top: 10px;">${confession}</p>
            </div>
         </article><!--confession item-->
     </div>`;
};