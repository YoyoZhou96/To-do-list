$(document).ready(function(){
    var doneButton = "<button class='done'>Done</button>";
    var undoButton = "<button class='undo'>Undo</button>";
    var removeButton = "<button class='remove'>Remove</button>";

    $("#button").click(function(){
        var toAdd = $("#new-item").val();
        $("ol").append("<li>" + toAdd + doneButton + removeButton + "</li>");
    })

    $("ol").on("click", "button.remove", function(){
		$(this).closest("li").fadeOut("slow");
	});

    $("ol").on("click", "button.done", function(){
        $(this).parent("li").css("text-decoration", "line-through");
        $(this).replaceWith(undoButton);
    })

    $("ol").on("click", "button.undo", function(){
        $(this).parent("li").css("text-decoration", "none");
        $(this).replaceWith(doneButton);
    })
});
