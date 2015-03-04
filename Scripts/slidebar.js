$(document).ready(function () {
	

				$( "#Games")
				.mouseover(function() {
						$("#sidebareffect-blue").transition({x:'200px'});
						$("#sidebar-blue").transition({x:'200px'});
						
					}
				)
				.mouseout(function() {
					$("#sidebareffect-blue").transition({x:'0px'});
					$("#sidebar-blue").transition({x:'0px'});
					
					}
				);
				
				
				
				$( "#Stuff")
				.mouseover(function() {
					$("#sidebareffect-green").transition({x:'200px'});
					$("#sidebar-green").transition({x:'200px'});
					}
				)
				.mouseout(function() {
					$("#sidebareffect-green").transition({x:'0px'});
					$("#sidebar-green").transition({x:'0px'});
				}
				);
				
			});