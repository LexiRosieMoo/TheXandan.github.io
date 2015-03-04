$(document).ready(function () {
				$( "#Games")
				.mouseover(function() {
					$("#sidebareffect-blue").transition({x:'200px'});
					}
				)
				.mouseout(function() {
					$("#sidebareffect-blue").transition({x:'0px'});
				}
				);
				
				$( "#Stuff")
				.mouseover(function() {
					$("#sidebareffect-green").transition({x:'200px'});
					$("#sidebareffect-green-text").transition({x:'200px'});
					}
				)
				.mouseout(function() {
					$("#sidebareffect-green").transition({x:'0px'});
					$("#sidebareffect-green-text").transition({x:'200px'});
				}
				);
				
			});