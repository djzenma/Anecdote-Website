$("document").ready(function () {
    let startWidth = $(window).width();
    let small = startWidth < 557;
    toggleSize(small);

    $(window).on('resize', function () {
        let width = $(window).width();
        let breakpoint = width < 557;
        toggleSize(breakpoint);
    });
});

function toggleSize(small) {
    let header = "#header h1";
    let btn = "#submit";
    if(small) {
        $(header).removeClass("display-1");
        $(header).addClass("display-3");

        $(btn).addClass("btn-sm");
    } else {
        $(header).addClass("display-1");
        $(header).removeClass("display-3");

        $(btn).removeClass("btn-sm");
    }
}