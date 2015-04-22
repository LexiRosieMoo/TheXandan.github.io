$(document).ready(function () {
	$("#sidebareffect-green").delay(100).transition({x:'0px',y:'-2px'});
	$("#sidebareffect-blue").delay(100).transition({x:'2px'});
	$("#TopTextgreen").delay(100).transition({x:'1px',y:'-1px'});
	$("#TopTextblue").delay(100).transition({x:'10px', y:'-5'});
	/*loop();*/
	/*
	$("#TopTextred").mouseover(function(){
		$("#TopTextblue").transition({
			scale:[1.1, 1.1]
		});
	
	
		$("#TopTextgreen").transition({
			scale:[1.2, 1.2]
		});
		
		$("#TopTextred").transition({
			scale:[1.3, 1.3]
		});
	}).mouseout(function(){
		$("#TopTextblue").transition({
			scale:[1, 1]
		});
	
	
		$("#TopTextgreen").transition({
			scale:[1, 1]
		});
		
		$("#TopTextred").transition({
			scale:[1, 1]
		});
	});
	*/
});
