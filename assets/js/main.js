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
        let linkItem = $("<li>").text(this);
        let href = (linkItem.text());
        linkItem.html(`<a href="${href}">${href}</a>`);
        sideList.append(linkItem);
    });
    
    $(sidebar).html(sideList);
    $(tutorial).append(sidebar);
}

function tableCreator(tableList, containerClass) {
    let tableCont = $("<div>").attr("src", `${containerClass}`);

    for(let i = 0; i < tableList.length; i++) {
        let tableItem = $("<div>").attr("value", tableList[i]).text(tableList[i]);
        tableCont.append(tableItem);
    }

    $(tutorial).append(tableCont);
}

function flex() {
    reset();
    header.text("Flexbox");

    $(tutorial).css("background-color", "yellow");
    $(tutorial).append(header);

    let sidelinks = ["Navigation Bars", "Sidebars", "Vertical Alignment", "Spacing"];
    sidePopulate(sidelinks);

    // main section
    let tableList = [1, 2, 3, 4, 5, 6];
    let containerClass = "flex-container";

    tableCreator(tableList, containerClass);

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

