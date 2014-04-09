window.onload = canvas_app;

function canvas_support() {
	return Modernizr.canvas;
}

function canvas_app() {
	if (!canvas_support()) {
    	return;
    }

	var cnvs = document.getElementById("hello_world_canvas");
	var context = cnvs.getContext("2d");

	function draw_screen() {
		context.fillStyle = "#ffffaa";
		context.fillRect(0, 0, 500, 500);

		context.fillStyle  = "#000000";
		context.font = "80px Sans-Serif";
		context.textBaseline = "top";
		context.fillText  ("love", 24, 100);

		context.fillStyle  = "#000000";
		context.font = "80px Sans-Serif";
		context.textBaseline = "top";
		context.fillText  ("beauty", 25, 155);

		context.fillStyle  = "#0000DD";
		context.font = "80px Sans-Serif";
		context.textBaseline = "top";
		context.fillText  ("js", 25, 208);
	}
	draw_screen();
}
