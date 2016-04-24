$(document).ready(function() {
	$(".flContainer").css({
		display: 'block'
	});
	$("#fl").css({
		top: ($(window).height()/2 - 2400) + "px",
		left: ($(window).width()/2 - 2400) + "px"
	});

	var touchFlag = false;
	var emptyFunction = function(e) { touchFlag = true; };
	$("body").on('touchstart', emptyFunction);
	$("body").on('touchmove', emptyFunction);
	$("body").on('touchend', emptyFunction);
	$(document).mousemove(function(e){
		if(!touchFlag)
		{
			$("#fl").css({
				top: (e.pageY - $(window).scrollTop() - 2400) + "px",
				left: (e.pageX - 2400) + "px"
			});
		}
	});

	// fallback for IE
	$("#fl").click(function (event) {
		$(this).toggle();
		var link = document.elementFromPoint(event.clientX, event.clientY);	// IE & FF
		$(this).toggle();
		if (link.tagName.toLowerCase() == 'a') {
			window.location.href = link.href;
		}
		$(link).trigger('click');
	});
	var fldiv = document.getElementById('fl');
	fldiv.style.display = 'block';
});