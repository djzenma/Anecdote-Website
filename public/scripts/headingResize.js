$("document").ready(function () {
    let startWidth = $(window).width();
    if (startWidth < 557) {
        toggleSize(true);
    }
    else {
        toggleSize(false);
    }

    $(window).on('resize', function () {
        let width = $(window).width();
        if (width < 557) {
            toggleSize(true);
        }
        else {
            toggleSize(false);
        }
    });
});

function toggleSize(toggler) {
    let selector = "#header h1";
    if(toggler) {
        $(selector).removeClass("display-1");
        $(selector).addClass("display-3");
    } else {
        $(selector).addClass("display-1");
        $(selector).removeClass("display-3");
    }
}