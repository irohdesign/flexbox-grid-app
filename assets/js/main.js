let header = $("<h1>");
let tutorial = $("#tutorial");
let sidelinks = [];

function reset() {
    event.preventDefault();
    $(tutorial).html("");
}

function sidePopulate(sidelinks) {
    let sidebar = $("<div>");
    let sideList = $("<ul>").attr("class", "sidebar");
    
    $.each(sidelinks, function () {
        var link = $("<li>").text(this);
        sideList.append(link);
    });
    
    $(sidebar).html(sideList);
    $(tutorial).append(sidebar);
}

function flex() {
    reset();
    header.text("Flexbox");

    $(tutorial).css("background-color", "yellow");
    $(tutorial).append(header);

    let sidelinks = ["Navigation Bars", "Sidebars", "Vertical Alignment", "Spacing"];
    sidePopulate(sidelinks);

    // main section
    

    // demo

    // info underneath
}

function recommended() {
    reset();
    header.text("Recommendations");

}

function grid() {
    reset();
    header.text("CSS Grid");

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

