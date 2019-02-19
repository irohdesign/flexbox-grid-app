let tutorial = $("#tutorial");



$(".trigger").on("click", function() {
    let trigger = $(this).text();
   
    let category = $(this).parent().attr("id");
    let change = $(this).val();

    // flexbox changes
    switch (category) {
        case "justify":
            $("#flex-example").css("justify-content", `${change}`);
            break;
        case "dimension":
            console.log("Another dimension!");
            break;
        case "flexibility":
            console.log("Responsive");
            break;
    }


})

