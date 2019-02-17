let header = $("<h1>");
let tutorial = $("#tutorial");

function flex() {
    event.preventDefault();
    $(tutorial).html("");


    header.text("Flexbox");



    $(tutorial).css("background-color", "yellow");
    $(tutorial).append(header);

    // sidebar
    

    // main section

    // demo

    // info underneath
}

function recommended() {
    $("#tutorial").html("hey it's me");

}

function grid() {

}


// get rid of intro

$(".guide").on("click", function () {
    let whichRoute = $(this).val();

    switch (whichRoute) {
        case "flex":
            flex();
            break;
        case "rec":
            recommended();
            break;
        case "grid":
            grid();
            break;
    }
})

