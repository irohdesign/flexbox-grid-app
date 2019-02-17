let header = $("<h1>");
let tutorial = $("#tutorial");

function flex() {
    event.preventDefault();
    $(tutorial).html("");

    header.text("Flexbox");

    $(tutorial).css("background-color", "yellow");
    $(tutorial).append(header);

    // sidebar
    let sidebar = $("<div>");
    let sideList = $("<ul>").attr("class", "sidebar");
    let sidelinks = ["Navigation Bars", "Sidebars", "Vertical Alignment", "Spacing"];
    $.each(sidelinks, function () {
        var link = $("<li>").text(this);
        sideList.append(link);
    });
    
    $(sidebar).html(sideList);
    $(tutorial).append(sidebar);


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

