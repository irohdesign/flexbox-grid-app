let tutorial = $("#tutorial");
let flex = $("#flex-example");
let grid = $("#grid-example");


$(".trigger").on("click", function() {
    let trigger = $(this).text();
   
    let category = $(this).parent().attr("id");
    let change = $(this).val();

    // flexbox changes
    switch (category) {
        case "justify":
            $(flex).css("justify-content", `${change}`).css("width", "auto");
            break;
        case "dimension":
            $(flex).css("flex-direction", `${change}`).css("width", "auto");
            break;
        case "flexibility":
            $(flex).css("flex-wrap", `${change}`).css("width", "30%").css("margin", "auto");
            break;
        case "template-columns":
            $(grid).css("grid-template-columns", `${change}`);
            break;
        case "template-rows":
            $(grid).css("grid-template-rows", `${change}`);
            break;
    }

})

